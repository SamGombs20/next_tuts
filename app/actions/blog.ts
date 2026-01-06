import { getBlog, getSanityData, getSanitySlugs } from "../api/sanityAPI"

export const getBlogPosts = async():Promise<BlogPost[]>=>{
    const res = await getSanityData()
    return res.result
}
export const getBlogSlugs = async():Promise<{slug:string}[]>=>{
    const res = await getSanitySlugs()
    return res.result
}
export const getBlogBySlug = async(slug:string):Promise<BlogPost>=>{
    const res = await getBlog(slug)
    return res.result
}