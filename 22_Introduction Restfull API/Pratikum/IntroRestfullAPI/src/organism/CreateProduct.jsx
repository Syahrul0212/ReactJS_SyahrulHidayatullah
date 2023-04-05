import React, { useEffect } from 'react'
import { Form, Hero, Navbar } from '../component'
import { useDispatch } from 'react-redux'
import { retrieveProduct } from '../confiq/Redux/Product/productThunk'

function CreateProduct() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(retrieveProduct())
  }, [])
   
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Form/>
    </div>
  )
}

export default CreateProduct;