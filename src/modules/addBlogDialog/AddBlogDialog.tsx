import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core';

interface Props  {
    open: boolean;
    handleClose: ()=>void;
    handleSave: (name:string)=>void;
}

const AddBlogDialog: React.FC<Props> = ({open, handleClose, handleSave}) =>{
    const [blogTitle,setBlogTitle]= useState("")
    const theme = useTheme();
    return (
        <Dialog PaperProps={{
          style: {
            backgroundColor: theme.palette.primary.main,
          },
        }} color="primary" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Post Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select a title for the post
          </DialogContentText>
          <TextField
            color="secondary"
            autoFocus
            margin="dense"
            id="title"
            label="Post Title"
            type="text"
            onChange={(e)=>{setBlogTitle(e.target.value)}}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={()=>{handleSave(blogTitle)}}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default AddBlogDialog;