import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`relative group transition-colors duration-200 ${isActive ? "text-yellow-500" : "hover:text-yellow-400"}`}>
      <span className={`underline-animation ${isActive ? "active-underline" : ""}`}>{children}</span>
    </Link>
  );
}
