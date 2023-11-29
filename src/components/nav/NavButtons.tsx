import Link from "next/link";

interface NavButtonsProps {
  isLoggedIn: boolean;
  handleLogoutClicked: () => void;
  handleLoginClicked: () => void;
}

export default function NavButtons({
  isLoggedIn,
  handleLogoutClicked,
  handleLoginClicked,
}: NavButtonsProps) {
  return (
    <div className="w-48 hidden md:flex items-center gap-2">
      {!isLoggedIn ? (
        <>
          <button
            onClick={handleLoginClicked}
            className=" w-full mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 tracking-tighter"
          >
            Sign In
          </button>
          <Link
            href="/auth/register"
            className="w-full mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/dashboard"
            className="w-full mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Dashboard
          </Link>

          <button
            onClick={handleLogoutClicked}
            className="w-full mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 tracking-tighter"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
