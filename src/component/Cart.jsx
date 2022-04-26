import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELITEM } from '../redux/action/index'

export default function Cart() {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()
    
    const products = (product) =>{
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
                <div className='container'>
                    <button className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                    <div className='col-md-4'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className='col-md-4'>
                            <h3>find</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        {state.length !== 0 && state.map(products)}
    </>
  )
}
