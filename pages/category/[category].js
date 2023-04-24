import React from 'react';
import Main from '../../Layer/Main';

const category = ({data:category}) => {
    return (
        <Main title={category.value}>
            <p>{category.value}</p>
        </Main>
    );
};

export default category;

export async function getServerSideProps(context) {
    const { category } = context.query;
    console.log(category)
    // Fetch data for the given id
    const res = await fetch(`${process.env.PRO}/api/category/${category}`);
    const data = await res.json();
  
    return {
      props: { data },
    };
  }