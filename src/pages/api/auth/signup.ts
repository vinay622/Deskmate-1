import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const firstName = String(formData.get('first_name') ?? '').trim();
  const lastName = String(formData.get('last_name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const college = String(formData.get('college') ?? '').trim();
  const role = String(formData.get('role') ?? 'student');
  const accessCode = String(formData.get('access_code') ?? '').trim();

  if (!firstName || !lastName || !email || !password || !college) {
    return new Response(
      JSON.stringify({ ok: false, error: 'All fields are required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (password.length < 8) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Password must be at least 8 characters.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const supabase = createSupabaseServerClient(request, cookies);

  // Admin: verify access code first (before creating the user)
  if (role === 'admin') {
    if (!accessCode) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Admin access code is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data: codeRow, error: codeError } = await supabase
      .from('admin_access_codes')
      .select('id, is_used')
      .eq('code', accessCode.toUpperCase())
      .single();

    if (codeError || !codeRow) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid admin access code.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (codeRow.is_used) {
      return new Response(
        JSON.stringify({ ok: false, error: 'This access code has already been used.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Create auth user, passing role and college as metadata so the
  // handle_new_user trigger creates the profiles row automatically,
  // bypassing RLS (works even when email confirmation is required).
  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        role,
        college_name: college,
      },
    },
  });

  if (signUpError || !authData.user) {
    return new Response(
      JSON.stringify({ ok: false, error: signUpError?.message ?? 'Sign up failed.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const userId = authData.user.id;

  // Mark admin access code as used
  if (role === 'admin' && accessCode) {
    const { error: markError } = await supabase
      .from('admin_access_codes')
      .update({ is_used: true, used_by: userId })
      .eq('code', accessCode.toUpperCase());

    if (markError) {
      console.error('[signup] failed to mark access code used:', markError.message);
    }
  }

  const destination = role === 'admin' ? '/app/admin' : '/app/chat';
  return new Response(
    JSON.stringify({ ok: true, redirect: destination }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
