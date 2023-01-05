import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const AppuseEffect = () => {
    const [count,setCount] = useState(0)
    useEffect (()=>{
        console.log('use effect is running')
    },[count])
  return (
    <Container mt={5}>
        <div>{count}</div>
        <button onClick={()=>setCount(count +1)}>Touch Me</button>
      </Container> 
  )
}

export default AppuseEffect