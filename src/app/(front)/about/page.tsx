// http://localhost:3000/about

import Link from "next/link";

// เอา (front) layout.tsx มาเป็น url
export default function AboutPage() {
  return (
    <div>
      <p>About Us</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}