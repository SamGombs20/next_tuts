'use client'
import { FC } from "react";
import style from "../styles/blog.module.css"
import { truncateText } from "../utils/common";
import Link from "next/link";

export const BlogPost:FC<BlogPost>=(blogPost)=>{
    return (
        <div className={style.blog}>
            <div className={style.blog_image} style={{backgroundImage:`url(${blogPost.mainImage?.asset.url})`}}>

            </div>
            <div className={style.blog_content}>
                <h3 className={style.blog_title}>{blogPost.title}</h3>
                <p className={style.blog_details}>{truncateText(blogPost.body?.[0]?.children?.[0]?.text,200)}</p>
                <Link href={`/blog/${blogPost.slug}`}><button className={`${style.read_more_btn}`}>Read more...</button></Link>
            </div>
        </div>
    )
}