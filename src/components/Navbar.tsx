import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  // function imported from kinde to get the current user if they are logged in
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // check to see if the user is an admin
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 w-full inset-x-0 top-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            case<span className="text-rose-600">magician</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {/* if the user is logged in display the logout and create case buttons, if they are an admin additionally display dashboard  button, otherwise display the sign up and login buttons */}
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Log out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "text-rose-600"
                    )}
                  >
                    Dashboard
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case ✨
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "text-rose-600"
                  )}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <span className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case ✨
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
