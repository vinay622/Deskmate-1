import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  if (!locals.user || locals.userRole !== 'admin') {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json();
  const name = (body.name as string)?.trim();
  const role = (body.role as string)?.trim();
  const department = (body.department as string) || 'General';
  const email = (body.email as string) || '';
  const phone = (body.phone as string) || '';
  const room = (body.room as string) || '';
  const hours = (body.hours as string) || '';
  const handlesRaw = (body.handles as string) || '';
  const handles = handlesRaw.split(',').map((h: string) => h.trim()).filter(Boolean);

  if (!name || !role) {
    return new Response(JSON.stringify({ ok: false, error: 'name and role are required' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const supabase = createSupabaseServerClient(request, cookies);
  const { data: member, error } = await supabase
    .from('staff_members')
    .insert({ name, role, department, email, phone, room, hours, handles })
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, member }), {
    status: 201, headers: { 'Content-Type': 'application/json' },
  });
};
