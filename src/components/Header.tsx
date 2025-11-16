import Link from "next/link";
import { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth";
import { FiUser, FiLogOut } from "react-icons/fi";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-6 sm:space-x-8">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Model<span className="font-light">Katte</span>
            </Link>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-purple-600 transition-colors font-medium group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/catalog"
                className="relative text-gray-700 hover:text-purple-600 transition-colors font-medium group"
              >
                Catalog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="relative text-gray-700 hover:text-purple-600 transition-colors font-medium group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {session?.user ? (
              <>
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="hidden lg:block text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {session.user.email}
                    </p>
                  </div>
                  {session.user.image && (
                    <img
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      className="w-10 h-10 rounded-full border-2 border-purple-300 ring-2 ring-purple-100 hover:ring-purple-200 transition-all"
                    />
                  )}
                </div>
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="sm:hidden w-9 h-9 rounded-full border-2 border-purple-300"
                  />
                )}
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all hover:scale-105 active:scale-95"
                  >
                    <FiLogOut />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                </form>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-xl font-medium text-sm hover:scale-105 active:scale-95"
              >
                <FiUser />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
