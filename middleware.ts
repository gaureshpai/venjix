import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export const runtime = 'nodejs'

export default withAuth(

    async function middleware(req: NextRequestWithAuth) {
        let pathname = req.nextUrl?.pathname;
        let baseUrl = req.nextUrl?.origin;
        let token = req.nextauth?.token;
        try {
            if (!token) return NextResponse.redirect(baseUrl);

        } catch (err) {
            console.error("middleware err:", err, "for token:", token, "with req", req)
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: async ({ req, token }) => {
                if (!token) return false;
                return true
            },
        },
        pages: {
            signIn: "/login",
        }
    }
)

export const config = { matcher: ["/admin", "/admin/film", "/admin/work", "/admin/portfolio"] }