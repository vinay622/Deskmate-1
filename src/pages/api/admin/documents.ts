import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

function computeStatus(expiryDate: string | null): 'active' | 'expiring' | 'expired' {
  if (!expiryDate) return 'active';
  const expiry = new Date(expiryDate);
  const now = new Date();
  const sevenDaysOut = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (expiry < now) return 'expired';
  if (expiry < sevenDaysOut) return 'expiring';
  return 'active';
}

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  if (!locals.user || locals.userRole !== 'admin') {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json();
  const name = (body.name as string)?.trim();
  const category = (body.category as string) || 'General';
  const description = (body.description as string) || '';
  const expiryDate = (body.expiry_date as string) || null;

  if (!name) {
    return new Response(JSON.stringify({ ok: false, error: 'name is required' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const supabase = createSupabaseServerClient(request, cookies);
  const { data: doc, error } = await supabase
    .from('documents')
    .insert({
      name,
      category,
      description,
      uploaded_by_name: locals.userName ?? '',
      expiry_date: expiryDate,
      status: computeStatus(expiryDate),
    })
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, doc }), {
    status: 201, headers: { 'Content-Type': 'application/json' },
  });
};
