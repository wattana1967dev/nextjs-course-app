// http://localhost:3000/about

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

// เอา (front) layout.tsx มาเป็น url
export default function AboutPage() {
  return (
    <div>
      <p className="text-sky-500 mb-4">About Us</p>
      <Spinner />
      <hr />
      <Button variant="link">
          <Link href="/">Home</Link>
      </Button>
    </div>
  );
}