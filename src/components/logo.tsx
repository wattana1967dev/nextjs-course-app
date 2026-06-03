// http://localhost:3000
// แสดงโลโก้ Next.js url
import Image from "next/image";

export const Logo = () => (
   <Image 
      src="/next.svg" 
      alt="โลโก้ Next.js" 
      width={124}
      height={32}
      priority
    />
);
