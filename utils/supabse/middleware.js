import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
    // console.log("requestone", request);
    // console.log("🔄 Middleware triggered for:", request.nextUrl.pathname);



    let supabaseResponse = NextResponse.next({
        request,
    })


    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {


                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )


    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {

        return NextResponse.redirect(new URL('/login', request.url));
    }


    // console.log("response form supabasemiddlewre", supabaseResponse);

    return supabaseResponse
}