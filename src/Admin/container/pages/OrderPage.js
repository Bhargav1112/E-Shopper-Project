import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../container/UI/Loader/Loader'
import { getOrderAdmin } from '../../../redux/actions/Admin/orederAction'
import DataGridTable from '../dataGridTable/DataGridTable'

const OrderPage = () => {
  const { order, loading, error } = useSelector(state => state.orderReducerAdm)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderAdmin())
  }, [dispatch])

  const columns = [
    {
      field: 'serialNumber',
      headerName: 'Sr. no.',
      width: 70,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Product name',
      width: 400,
      editable: true,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 200,
      renderCell: params => <img src={params.row.image} style={{ width: 50, height: 50 }} alt=" of good" />
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      editable: true,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      width: 100,
      editable: true,
    },
    {
      field: 'user',
      headerName: 'Person Name',
      width: 300,
      editable: true,
    },
  ]

  const rows = useMemo(() => {
    return order.flatMap(item => {
      return item.items.map((data, i) => {
        return {
          orderId: item.id,
          id: data.id,
          name: data.title,
          image: data.img,
          price: data.price,
          qty: data.qty,
          user: item.user.displayName,
          userEmail: item.user.email
        }
      })
    })
  }, [order])


  const rowsData = rows.map((item, i) => {
    return {
      ...item,
      serialNumber: i + 1,
    }
  })
  console.log("rowsData", rowsData);

  return (
    <>
      <div className='heading'>
        <h2>Orders</h2>
      </div>
      <div className="category-data">
        {loading ? (
          <Loader />
        ) : (
          error ? (
            <p className="error-message">{error}</p>
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

export default OrderPage