'use client';
import React from 'react'       

function AddToCard() {
  return (
    <div>
        <button className="btn btn-primary" onClick={() => console.log('Button clicked')}>Add to Cart</button>
    </div>
  )
}

export default AddToCard