import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { addCategoryAction } from '../../../redux/actions/categoryAction';
import { useDispatch } from 'react-redux';

export default function AddCategoryDialog(props) {
  const { open, onClose } = props
  const dispatch = useDispatch()

  const [categoryName, setCategoryName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [nameError, setNameError] = useState("")
  const [fileError, setFileError] = useState("")

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
      if (files.length) {
        setFileError("")
      } else {
        setFileError("This field is required.")
      }
    }
  }

  const handleClose = () => {
    onClose()
    setCategoryName("")
    setFileError("")
    setNameError("")
    setSelectedFile(null)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!categoryName || !selectedFile) {
      if (!categoryName) {
        setNameError("This field is required.")
      }
      if (!selectedFile) {
        setFileError("This field is required.")
      }
      return
    }
    const data = {
      name: categoryName,
      img: selectedFile
    }
    dispatch(addCategoryAction(data))
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
                label="Please enter category name"
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
                onBlur={handleChange}
              />
              {fileError && <p className="error-message">{fileError}</p>}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "#d19c97" }}>Cancel</Button>
            <Button type='submit' sx={{ color: "#d19c97" }}>Add</Button>
          </DialogActions>

        </form>
      </Dialog>
    </div>
  );
}

