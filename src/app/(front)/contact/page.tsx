// http://localhost:3000/contact
// เอา (front) layout.tsx มาเป็น url

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export default function ContactPage() {
  return (
      <div>
      <p className="text-sky-500 mb-4">Contact Us</p>
      <Spinner />
      <hr />
      <Button variant="link">
          <Link href="/">Home</Link>
      </Button>
    </div>
  );
}