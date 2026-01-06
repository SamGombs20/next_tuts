import { getSanityData } from "../api/sanityAPI"

export const getBlogPosts = async():Promise<BlogPost[]>=>{
    const res = await getSanityData()
    return res.result
}