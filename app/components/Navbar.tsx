'use client';
import Image from "next/image";
import style from "./navbar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const pathname = usePathname()

    const isActive = (path:string)=> pathname ===path ? style.active_link : '';
    return (
        <div className={style.navbar_container}>
            <div className={style.navbar_logo_name}>
                <Image src="/obesiscan_icon.png"
                    alt="" width={35} height={35} />
                <p className={style.app_title}><span>Obesi</span>Scan</p>
            </div>
            <div className={style.navbar_links}>
                <Link href="/" className={isActive("/")}><p>Home</p></Link>
                <Link href="/blog" className={isActive("/blog")}><p>Blog</p></Link>
                <Link href="/about" className={isActive("/about")}><p>About</p></Link>
            </div>
        </div>
    );
}
export default Navbar;