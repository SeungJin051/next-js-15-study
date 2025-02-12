import Link from 'next/link';

export default async function NotFound() {
  return (
    <div>
      <p>
        not-found-page <Link href="/">Go to Home</Link>
      </p>
    </div>
  );
}
