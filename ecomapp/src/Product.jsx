import React, { use, useEffect, useState } from 'react' 
import { Link } from 'react-router-dom';
// const products = [{name:'mobile',price:200},{name:'laptop',price:600}] 
export default function Product() { 
 
  //let products = [{name:'mobile',price:200},{name:'laptop',price:600}] 
  //let[variableToStoreDefaultvalue, functionToUpdateVariable]=useState(default state/value) 
  let[products, setProducts ]=useState(null) 
  //let [counter, setCounter]=useState(0) 
  async function fetchProucts() 
  { 
    let response=await fetch("https://dummyjson.com/products",{method:'GET'}) 
    let data=await response.json() 
    console.log(data); 
    console.log(data.products); 
    //products = data.products 
    setProducts(data.products) 
  } 
  //fetchProucts() 
  // useEffect(()=>{ 
  //   fetchProucts() 
  // },[counter]) 
  useEffect(()=>{ 
    fetchProucts() 
  },[]) 
  return ( 
     
    <div className='container mt-3'> 
    <div>
    
    </div>
      {/* <p>{counter}</p> 
      <button onClick={()=>{setCounter(counter+1)}}>change counter</button> */} 
      <div className='row'> 
        { 
          products && products.map(product => { 
            return ( 
              <div className='col-3 mb-3' key={product.id}> 
                  <div className="card" style={{width:18+"rem"}}> 
                      <img src={product.thumbnail} className="card-img-top" alt="..."/> 
                      <div className="card-body"> 
                        <h5 className="card-title">{product.title.slice(0,15)}</h5> 
                        <p className="card-text">{product.description.slice(0,95)}...</p> 
                        <p><del>&#8377;{product.price}</del>  &#8377;{product.discountPercentage}</p> 
                        <Link to={`/product/${product.id}`} className="btn btn-primary">View More</Link> 

                      </div> 
                    </div> 
                </div> 
            ) 
          }) 
        }    
      </div> 
    </div> 
  ) 
 
} 