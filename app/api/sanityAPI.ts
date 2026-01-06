const url =
  "https://40v865zp.api.sanity.io/v2025-03-26/data/query/production" +
  "?query=*[_type=='blogPost']{" +
  "_id," +
  "title," +
  "'slug':slug.current," +
  "'body':body[children[].text!='']," +
  "mainImage{asset->{url}}," +
  "author->{_id,name,bio}," +
  "publishedAt" +
  "}";
const slugUrl = "https://40v865zp.api.sanity.io/v2025-03-26/data/query/production?query=*[_type == 'blogPost']{'slug':slug.current}"
const baseUrl = "https://40v865zp.api.sanity.io/v2025-03-26/data/query/production?query="
export const getSanityData = async()=>{
    const res = await fetch(url,{
        method:"GET"
    })
    if(!res.ok){
        throw new Error("Failed to fetch Sanity data")
    }
    return res.json()
}

export const getSanitySlugs = async()=>{
    const res = await fetch(slugUrl,{
        method:"GET"
    })
    if(!res.ok){
        throw new Error("Failed to fetch Sanity slugs")
    }
    return res.json()
}
export const getBlog = async(slug:string)=>{
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
    const res = await fetch(`${baseUrl}${encodeURIComponent(query)}&$slug="${encodeURIComponent(slug)}"`,{
        method:"GET"
    })
    if(!res.ok){
        throw new Error("Failed to fetch blog post")
    }
    return res.json()
}
