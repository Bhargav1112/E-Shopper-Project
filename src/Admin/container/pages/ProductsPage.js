import React, { useState } from 'react'
import ProductDialog from '../Dialogs/ProductDialog';

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const handleShowAddPopup = () => {
    setOpen(true)
  }
  const handleClosePopup = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="heading">
        <h2>Products</h2>
      </div>
      <div className="category-add mb-5">
        <button type='button' onClick={handleShowAddPopup}>Add</button>
      </div>
      <ProductDialog open={open} onClose={handleClosePopup} />
    </>
  )
}

export default ProductsPage;
