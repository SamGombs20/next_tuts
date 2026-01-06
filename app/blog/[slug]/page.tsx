import style from "../../styles/blog.module.css"
import { getBlogBySlug, getBlogSlugs } from "@/app/actions/blog"

export const generateStaticParams = async()=>{
    const slugs = await getBlogSlugs()
    return slugs.map((item)=>({
        slug:item.slug
    }))
}

const BlogDetailPage = async ({params,}: {params: { slug: string }}) => {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  return (
    <article className={style.article_page_container}>
        <p className={`${style.blog_title} title-text`}>{blog.title}</p>
        <div className={style.date_author}>
            <p>Published on: <span>{blog.publishedAt}</span></p>
            <p>Author: <span>{blog.author?.name}</span></p>
        </div>
    </article>
  )
}
export default BlogDetailPage;
export const revalidate = 60;