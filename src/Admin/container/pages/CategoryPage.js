import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import DataGridTable from '../dataGridTable/DataGridTable'
import AddCategoryDialog from '../Dialogs/AddCategoryDialog'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./category.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../../redux/actions/categoryAction';

const CategoryPage = (props) => {
  const [showAddCategory, setShowAddCategory] = useState(false)
  const dispatch = useDispatch()
  const category = useSelector(state => state.category)

  useEffect(() => {
    dispatch(getCategoryAction())
  }, [dispatch])

  const handleHideAddCategory = () => {
    setShowAddCategory(false)
  }

  const handleShowAddPopup = () => {
    setShowAddCategory(true)
  }

  const columns = [
    {
      field: 'name',
      headerName: 'Category',
      width: 600,
      editable: true,
    },
    {
      field: 'img',
      headerName: 'Image',
      width: 300,
      renderCell: params => <img src={params.row.img} style={{ width: 50, height: 50 }} alt=" of good" />
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 300,
      renderCell: params => {
        return (
          <>
            <IconButton >
              <EditIcon />
            </IconButton>
            <IconButton >
              <DeleteIcon />
            </IconButton>
          </>
        )
      }
    },
  ];

  return (
    <>
      <div className="heading">
        <h2>Categories</h2>
      </div>
      <div className="category-add mb-5">
        <button type='button' onClick={handleShowAddPopup}>Add</button>
      </div>
      <AddCategoryDialog open={showAddCategory} onClose={handleHideAddCategory} />
      <DataGridTable
        columns={columns}
        rows={category.categoryList}
      />
    </>
  )
}

export default CategoryPage
