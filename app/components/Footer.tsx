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
                        <Link href="/"><p>Quick Check</p></Link>
                        <Link href="/blog"><p>Blog</p></Link>
                        <Link href="/about"><p>About</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;