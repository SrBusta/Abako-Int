import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Set the paths that don't require the user to be signed in
const publicPaths = ["/"];

const privatePaths = ["/dashboard"];

const excludedPrivatePaths = ["/login",'/register'];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

const isInLogin = (path: string) => {
  return excludedPrivatePaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

const isPrivate = (path: string) => {
  return privatePaths.find((x) =>
    path.match(new RegExp(`^${x}`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  console.log('asdfadf')
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request);

  if (userId && isInLogin(request.nextUrl.pathname)) {

    const signInUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(signInUrl);
  }

  if (!userId && isInLogin(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!userId && isPrivate(request.nextUrl.pathname)) {
    // console.log("PRIVATE");
    // redirect the users to /pages/sign-in/[[...index]].ts

    const signInUrl = new URL("/login", request.url);
    // signInUrl.searchParams.set("redirect_url", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
