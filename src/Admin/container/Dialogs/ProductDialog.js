import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAction, updateProductAction } from '../../../redux/actions/Admin/productAction';
import { useEffect } from 'react';

export default function ProductDialog(props) {
  const { open, onClose, editMode, data } = props
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    category: "",
    price: "",
    qty: "",
    image: ""
  })
  const [error, setError] = useState({
    name: "",
    category: "",
    price: "",
    qty: "",
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (editMode) {
      setEnteredValue({
        name: data.name,
        category: data.category,
        price: data.price,
        qty: data.qty,
        image: data.image
      })
    }
  }, [editMode, data])

  const handleClose = () => {
    onClose()
    setError({
      name: "",
      category: "",
      price: "",
      qty: "",
      image: ""
    })
    setEnteredValue({
      name: "",
      category: "",
      price: "",
      qty: "",
      image: ""
    })
  }

  const handleChange = event => {
    const { name, value, files } = event.target
    if (name === "image") {
      setEnteredValue({ ...enteredValue, [name]: files[0] })
    } else {
      setEnteredValue({ ...enteredValue, [name]: value })
    }
    if (name === "name") {
      if (value) {
        setError({ ...error, name: "" })
      } else {
        setError({ ...error, name: "This field is required." })
      }
    }
    if (name === "category") {
      if (value) {
        setError({ ...error, category: "" })
      } else {
        setError({ ...error, category: "This field is required." })
      }
    }
    if (name === "qty") {
      if (value) {
        setError({ ...error, qty: "" })
      } else {
        setError({ ...error, qty: "This field is required." })
      }
    }
    if (name === "price") {
      if (value) {
        setError({ ...error, price: "" })
      } else {
        setError({ ...error, price: "This field is required." })
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    for (let k of Object.values(error)) {
      if (k.trim()) return;
    }
    for (let k of Object.entries(enteredValue)) {
      if (!k[1] && k[0] !== "image") {
        setError({ ...error, [k[0]]: "This field is required." })
        return
      }
    }
    if (editMode) {
      dispatch(updateProductAction({ ...data, ...enteredValue }))
    } else {
      dispatch(addProductAction(enteredValue))
    }
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Product name"
              type="text"
              fullWidth
              variant="standard"
              name="name"
              onChange={handleChange}
              onBlur={handleChange}
              value={enteredValue.name}
            />
            {error.name && <p className="error-message">{error.name}</p>}
            <TextField
              name="category"
              onChange={handleChange}
              onBlur={handleChange}
              value={enteredValue.category}
              margin="dense"
              id="category"
              label="Category"
              type="text"
              fullWidth
              variant="standard"
            />
            {error.category && <p className="error-message">{error.category}</p>}
            <TextField
              name="price"
              onChange={handleChange}
              onBlur={handleChange}
              value={enteredValue.price}
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
            />
            {error.price && <p className="error-message">{error.price}</p>}
            <TextField
              name="qty"
              onChange={handleChange}
              onBlur={handleChange}
              value={enteredValue.qty}
              margin="dense"
              id="qty"
              label="Quantity"
              type="number"
              fullWidth
              variant="standard"
            />
            {error.qty && <p className="error-message">{error.qty}</p>}
            <TextField
              name="image"
              onChange={handleChange}
              margin="dense"
              id="image"
              label="Image"
              type="file"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">{editMode ? "Update" : "Add"}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
