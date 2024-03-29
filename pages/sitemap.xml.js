//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://api-trickzone.vercel.app/api/posts'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${process.env.NEXT_PUBLIC_SITE_URL}</loc>
     </url>
     ${posts?.episodes
       .map(({ id,title,createdAt }) => {
         return `
       <url>
           <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/file/${id}`}</loc>
           <changefreq>daily</changefreq>
           <priority>0.5</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/posts?limit=5000`);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;