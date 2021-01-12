import React, { useContext, useEffect, useState } from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Markdown } from '../shared/Markdown/Markdown';
import "./Editor.css";
import { BlogDataContext } from '../../shared/firebase/contexts/BlogDataContext';
import AddBlogDialog from '../addBlogDialog/AddBlogDialog';
import { editBlog, saveBlog } from '../../shared/firebase';
import { AuthContext } from '../../shared/firebase/contexts/AuthContext';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles((theme) => ({
    main: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    root: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: "35px",
        right: "35px",
        '& > *': {
            margin: theme.spacing(1),
          },
    }
  }));

const Editor = () => {
    const [source,setSource] = useState("");
    const [saveDialogOpen,setSaveDialogOpen] = useState(false);
    const classes = useStyles();
    const blogData = useContext(BlogDataContext)
    const user = useContext(AuthContext)
    const isLoggedIn = user !== null;
    useEffect(()=>{
        setSource(blogData.blogFile);
    },[blogData])
    console.log(isLoggedIn)
    return (
        <div className={classes.main}>
            <AddBlogDialog open={saveDialogOpen} handleClose={()=>{setSaveDialogOpen(false)}} handleSave={(name)=>{
                 if(blogData?.selectedBlog?.id) {
                     editBlog({...blogData.selectedBlog, name},source)
                 }else{
                     saveBlog(name,source);
                 }
                 setSaveDialogOpen(false);
            }} />
        <div className="container">
            <textarea className={"editor"} disabled={!isLoggedIn} value={source} onChange={(e)=>{setSource(e.target.value)}} />
            <div className={"viewer"}>
            <Markdown source={source} useFullScreen={true} />
            </div>
        </div>    
        <div className={classes.root}>
                <Fab color="secondary"  aria-label="save" disabled={!source || !isLoggedIn} onClick={()=>{
                    setSaveDialogOpen(true)
                }}>
                    <SaveIcon />
                </Fab>
            </div>
        </div>
    )
}

export default Editor;