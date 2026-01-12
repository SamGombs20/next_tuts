'use-client'
import Image from "next/image";
import style from "../styles/footer.module.css"
import Link from "next/link";
const Footer = () => {
    return (
        <div className={style.footer_container}>
            <div className={style.footer}>
                <div className={style.footer_logo_name}>
                    <Image src="/obesiscan_white.webp"
                        alt="" width={35} height={35} />
                    <p className={style.app_title}><span>Obesi</span>Scan</p>
                </div>
                <div className={style.nav_links}>
                    <p className={style.title}>Quick links</p>
                    <div className={style.footer_links}>
                        <Link href="/" className={style.footer_link}>Quick Check</Link>
                        <Link href="/blog" className={style.footer_link}><p>Blog</p></Link>
                        <Link href="/about" className={style.footer_link}><p>About</p></Link>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <p>&copy; 2025 ObesiScan. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;