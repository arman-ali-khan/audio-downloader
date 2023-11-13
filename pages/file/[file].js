
import React from 'react';
import Main from '../../Layout/Main';
import SingleEpisode from '../../components/Single/SingleEpisode';

const file = ({data:file}) => {
 
    return (
        <Main title={file?.title} description={`Download ${file?.title}`} thumb={file?.thumbnail} >
           <SingleEpisode file={file} />
        </Main>
    );
};

export default file;

export async function getServerSideProps(context) {
    const { file } = context.query;
    // console.log(file)
    // Fetch data for the given id
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/posts/${file}`);
    const data = await res.json();
  
    return {
      props: { data },
    };
  }