import { Divider } from "@mui/material";
import style from "../styles/blog.module.css"
import { dividerStyles } from "../styles/MUICustom";
const Blog = () => {
    return (
        <div className={style.blog_container}>
            <div className={style.intro_container}>
                <div className="main-container">
                    <h2 className={`${style.title_text}`}>Stay Updated and Informed</h2>
                    <p className={style.intro_details}>Your health journey starts with understanding. The <strong><em>ObesiScan</em></strong> blog provide clear, expert-informed content on <strong>obesity</strong>, <strong>weight management</strong>, and <strong>healthy living</strong> — empowering you with knowledge to make consistent, positive changes that last.</p>
                </div>
            </div>
            <div className={`${style.blogs_grid} main-container`}>
                <div className={style.blog_header}>
                    <p className={`${style.blogs_text} gradient-text`}>Articles</p>
                    <Divider sx={{ ...dividerStyles, width: "80%" }} />
                </div>
            </div>
        </div>
    )
}
export default Blog;