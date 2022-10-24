import { IconButton } from '@mui/material'
import React, { useMemo, useState } from 'react'
import DataGridTable from '../dataGridTable/DataGridTable'
import AddCategoryDialog from '../Dialogs/AddCategoryDialog'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./category.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction, removeCategoryAction } from '../../../redux/actions/Admin/categoryAction';
import Loader from '../../../container/UI/Loader/Loader';
import { getOrderAdmin } from '../../../redux/actions/Admin/orederAction';

const CategoryPage = (props) => {
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  const dispatch = useDispatch()
  const category = useSelector(state => state.category)

  useEffect(() => {
    dispatch(getCategoryAction())
  }, [dispatch])

  const handleHideAddCategory = () => {
    setShowAddCategory(false)
    setEditMode(false)
    setSelectedData(null)
  }

  const handleShowAddPopup = () => {
    setShowAddCategory(true)
  }

  const handleEdit = data => {
    setSelectedData(data)
    setEditMode(true)
    setShowAddCategory(true)
  }

  const handleDelete = data => {
    dispatch(removeCategoryAction(data))
  }

  const columns = [
    {
      field: 'serialNumber',
      headerName: 'Sr. no.',
      width: 70,
      editable: true,
    },
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
      width: 230,
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

  const rowsData = useMemo(() => category.categoryList.map((item, i) => {
    return {
      ...item,
      serialNumber: i + 1
    }
  }), [category.categoryList])

  return (
    <>
      <div className="heading">
        <h2>Categories</h2>
      </div>
      <div className="category-add mb-5">
        <button type='button' onClick={handleShowAddPopup}>Add</button>
      </div>
      <AddCategoryDialog open={showAddCategory} onClose={handleHideAddCategory} editMode={editMode} data={selectedData} />
      <div className="category-data">
        {category.loading ? (
          <Loader />
        ) : (
          category.error ? (
            <p className="error-message">{category.error}</p>
          ) : (
            <DataGridTable
              columns={columns}
              rows={rowsData}
            />
          )
        )
        }

      </div>
    </>
  )
}

export default CategoryPage
