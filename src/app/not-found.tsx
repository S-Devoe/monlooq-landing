import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60dvh] flex-col items-start justify-center py-20">
      <p className="eyebrow text-brand">Error 404</p>
      <h1 className="mt-5 text-6xl font-semibold tracking-tight sm:text-8xl">
        Not in this <span className="font-light italic">closet</span>
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
        The page you are looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-foreground px-6 py-3 font-medium text-background"
      >
        Back to home
      </Link>
    </section>
  );
}
