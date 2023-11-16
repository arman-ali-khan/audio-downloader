// pages/rss.js

import RSS from 'rss';

const generateRSSFeed = async () => {
  // Fetch data from the API
  const apiUrl = 'https://apiradio.arman.top/0.1/api/posts';
  const response = await fetch(apiUrl);
  const posts = await response.json();

  // Process data and generate RSS XML
  const feed = new RSS({
    title: 'Your RSS Feed Title',
    description: 'Your RSS Feed Description',
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss`,
    site_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    language: 'en',
  });

  posts?.episodes?.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/file/${post.id}`, // Adjust the URL accordingly
      guid: post.id,
      date: new Date(post.createdAt),
    });
  });

  return feed.xml();
};

const Rss = ({ xml }) => {
  return <div dangerouslySetInnerHTML={{ __html: xml }} />;
};

export async function getServerSideProps({ res }) {
  const xml = await generateRSSFeed();

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default Rss;
