
const baseUrl = process.env.SANITY_URL
export const getSanityData = async () => {
    const query = "*[_type=='blogPost']{" +
        "_id," +
        "title," +
        "'slug':slug.current," +
        "'body':body[children[].text!='']," +
        "mainImage{asset->{url}}," +
        "author->{_id,name,bio}," +
        "publishedAt" +
        "}"
    const res = await fetch(`${baseUrl}${encodeURIComponent(query)}`, {
        method: "GET"
    })
    if (!res.ok) {
        throw new Error("Failed to fetch Sanity data")
    }
    return res.json()
}

export const getSanitySlugs = async () => {
    const query = `*[_type == 'blogPost']{'slug':slug.current}`
    const res = await fetch(`${baseUrl}${encodeURIComponent(query)}`, {
        method: "GET"
    })
    if (!res.ok) {
        throw new Error("Failed to fetch Sanity slugs")
    }
    return res.json()
}
export const getBlog = async (slug: string) => {
    const query = `
    *[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      slug,
      body,
      mainImage{
        asset->{url}
      },
      author->{
        name,
        bio
      }
    }
    `
    const res = await fetch(`${baseUrl}${encodeURIComponent(query)}&$slug="${encodeURIComponent(slug)}"`, {
        method: "GET"
    })
    if (!res.ok) {
        throw new Error("Failed to fetch blog post")
    }
    return res.json()
}
