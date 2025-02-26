import { updateSession } from '@/utils/supabse/middleware'

export async function middleware(request) {
    // update user's auth session

    return await updateSession(request)



}
export const config = {

    matcher: [
        '/dashboard/:path*', '/dashboard'

        // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}