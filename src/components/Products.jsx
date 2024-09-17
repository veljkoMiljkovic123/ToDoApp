import React, { useEffect, useState } from 'react'; 
import PostService from '../services/postService';
import SingleCard from './SingleCard';

function Products() {

  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  const [loading,setLoading] = useState(false)
    useEffect(() => {
        PostService.getAllProduct()
        .then((res)=>setAllProducts(res.data.products))
       
        .catch((err)=>console.log(err))
      }, []);

  return (
    <div className='bg-slate-300 dark:bg-orange-800'>
    <div className="container mx-auto">
    <h2>All my products</h2>
      <div className='flex justify-center items-center flex-wrap gap-5 mt-10' >{allProducts.map((el,i)=>{
        return <SingleCard el={el} id={i} key={i}/>
      })}</div>
    </div>
    </div>
  )

}

export default Products;