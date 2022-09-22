import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { addCategoryAction, updateCategoryAction } from '../../../redux/actions/categoryAction';
import { useDispatch } from 'react-redux';

export default function AddCategoryDialog(props) {
  const { open, onClose, editMode, data } = props
  const dispatch = useDispatch()

  const [categoryName, setCategoryName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [nameError, setNameError] = useState("")

  React.useEffect(() => {
    if (editMode) {
      setCategoryName(data?.name)
    }
  }, [editMode, data?.name])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "name") {
      setCategoryName(value)
      if (value) {
        setNameError("")
      } else {
        setNameError("This field is required.")
      }
    }
    if (name === "image") {
      setSelectedFile(files[0])
    }
  }

  const handleClose = () => {
    onClose()
    setCategoryName("")
    setNameError("")
    setSelectedFile(null)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!categoryName) {
      setNameError("This field is required.")
      return
    }
    if (editMode) {
      const formData = {
        ...data,
        name: categoryName,
        img: selectedFile || data.img
      }
      console.log(formData);
      dispatch(updateCategoryAction(formData))
    } else {
      const formData = {
        name: categoryName,
        img: selectedFile
      }
      dispatch(addCategoryAction(formData))
    }
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit} style={{ width: "600px" }}>
          <DialogTitle>Add Category</DialogTitle>

          <DialogContent>
            <div className="control">
              <TextField
                margin="dense"
                id="name"
                label="Category name"
                type="text"
                fullWidth
                name="name"
                value={categoryName}
                onChange={handleChange}
                onBlur={handleChange}
                variant="standard"
              />
              {nameError && <p className="error-message">{nameError}</p>}

            </div>
            <div className="control">

              <TextField
                margin="dense"
                id="img"
                name="image"
                type="file"
                fullWidth
                variant="standard"
                onChange={handleChange}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "#d19c97" }}>Cancel</Button>
            <Button type='submit' sx={{ color: "#d19c97" }}>{editMode ? "Update" : "Add"}</Button>
          </DialogActions>

        </form>
      </Dialog>
    </div>
  );
}

