import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import ProductDialog from '../Dialogs/ProductDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DataGridTable from '../dataGridTable/DataGridTable';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../container/UI/Loader/Loader';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { getProductAction, removeProductAction } from '../../../redux/actions/Admin/productAction';

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  const productData = useSelector(state => state.productReducerAdm)
  const dispatch = useDispatch()

  const handleShowAddPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
    if (editMode) {
      setSelectedData(null)
      setEditMode(false)
    }
  }

  const handleEdit = (data) => {
    setEditMode(true)
    setOpen(true)
    setSelectedData(data)
  }
  const handleDelete = (data) => {
    dispatch(removeProductAction(data))
  }

  useEffect(() => {
    dispatch(getProductAction())
  }, [dispatch])

  const columns = [
    {
      field: 'serialNumber',
      headerName: 'Sr. no.',
      width: 70,
    },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: params => <img src={params.row.image} style={{ width: 50, height: 50 }} alt=" of good" />
    },
    {
      field: 'name',
      headerName: 'Product name',
      width: 600,
      editable: true,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      width: 100,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      editable: true,
      renderCell: params => <span>&#8377; {params.row.price}</span>
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <IconButton onClick={handleEdit.bind(null, params.row)} >
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete.bind(null, params.row)}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      }
    },
  ];

  const rowsData = useMemo(() => productData.products.map((item, i) => {
    return {
      ...item,
      serialNumber: i + 1,
    }
  }), [productData.products])

  return (
    <>
      <div className="heading">
        <h2>Products</h2>
      </div>
      <div className="category-add mb-5">
        <button type='button' onClick={handleShowAddPopup}>Add</button>
      </div>
      <ProductDialog data={selectedData} editMode={editMode} open={open} onClose={handleClosePopup} />
      {productData.loading ? (
        <Loader />
      ) : (
        productData.error ? (
          <p className="error-message">{productData.error}</p>
        ) : (
          <DataGridTable columns={columns} rows={rowsData} />
        )
      )}
    </>
  )
}

export default ProductsPage;
