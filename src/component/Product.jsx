import React, { useEffect, useState } from 'react'
// import SingleProduct from './SingleProduct'
import axios from 'axios'
import { Container,Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
const Product = () => {

    const [apidata,setApidata] = useState([])

    useEffect(()=>{  axios.get('https://fakestoreapi.com/products')
    .then(res=>setApidata(res.data)).catch(err=>console.log(err))},[])
  return (
      <Container>
        <Row gap={5}>
            {apidata.map((fd,i)=>(
                <SingleProduct title={fd.title} key={i} desc={fd.desc} img={fd.image}/>
            ))}
            
        </Row>
      </Container>
  )
}

export default Product