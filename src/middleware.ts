import { defineMiddleware } from "astro:middleware";
import { createSupabaseServerClient } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createSupabaseServerClient(
    context.request,
    context.cookies
  );

  // Get authenticated user from JWT (server-side safe check)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  context.locals.user = user;
  context.locals.userRole = null;
  context.locals.userName = null;

  if (user) {
    // Fetch role and name from profiles table
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, full_name")
      .eq("id", user.id)
      .single();

    context.locals.userRole = (profile?.role as "student" | "admin") ?? null;
    context.locals.userName = profile?.full_name ?? null;
  }

  const pathname = new URL(context.request.url).pathname;

  // Protect all /app/* routes — must be authenticated
  if (pathname.startsWith("/app/")) {
    if (!user) {
      const next_url = encodeURIComponent(pathname);
      return context.redirect(`/login?next=${next_url}`);
    }

    // Protect /app/admin/* — must be admin
    if (pathname.startsWith("/app/admin") && context.locals.userRole !== "admin") {
      return context.redirect("/app/chat?error=unauthorized");
    }
  }

  return next();
});
