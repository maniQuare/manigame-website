import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h1>GameTypes</h1>

      <Link
        href="/sign-in"
        className="inline-block mt-5 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
      >
        man
      </Link>
    </div>
  );
}
