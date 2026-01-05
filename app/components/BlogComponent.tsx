'use client'
import style from "../styles/blog.module.css"

export const BlogComponent =()=>{
    return (
        <div className={style.blog}>
            <div className={style.blog_image}>

            </div>
            <div className={style.blog_content}>
                <h3 className={style.blog_title}>Understanding Obesity: Causes, Risks, and Prevention</h3>
                <p className={style.blog_details}>Obesity is a complex health condition influenced by various factors including genetics, lifestyle, and environment. This article explores the causes of obesity, associated health risks, and effective prevention strategies to maintain a healthy weight.</p>
                <button className={`${style.read_more_btn}`}>Read more...</button>
            </div>
        </div>
    )
}