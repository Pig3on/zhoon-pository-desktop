import { Button, makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { auth, BlogsContext, deleteBlog, googleAuth } from '../../shared/firebase'
import { AuthContext } from '../../shared/firebase/contexts/AuthContext';
import { BlogDataContext } from '../../shared/firebase/contexts/BlogDataContext';
import SaveIcon from '@material-ui/icons/Save';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    divider: {
        flex:1
    },
    menu: {
        display: "flex",
        flexDirection: "column",
        width: "250px",
        padding: "20px",
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    controls: {
        display: "flex",
        flexDirection: "column",
        '& > *': {
            margin: theme.spacing(1),
          },
    }
  }));

const SideMenu = () =>{
    const styles = useStyles();
    const user = useContext(AuthContext);
    const blogs = useContext(BlogsContext); 
    const blogData = useContext(BlogDataContext);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const isLoggedIn = user !== null;
    return (
        <div className={styles.menu}>
            <div>Logged in as: {isLoggedIn ? user.email : "No One"}</div>
           {!isLoggedIn ? 
            <Button variant="contained" color="secondary" onClick={()=>{auth.signInWithPopup(googleAuth)}}>Login</Button> :
            <Button color="secondary" variant="contained" onClick={()=>{auth.signOut(); blogData.clearSelectedBlog()}} >Logout</Button>}
            {
                isLoggedIn &&
                blogs.map((blog)=>{
                    return (
                        <Button color="secondary" onClick={async ()=>{
                            setSelectedBlog(blog);
                            blogData.setSelectedBlog(blog);
                        }} >{blog?.name ?? ""}</Button>
                    )
                })
            }

            <div>Loaded post: {selectedBlog?.name ?? "None"}</div>
            
            <div className={styles.divider} />
            <div className={styles.controls}>
            <Button variant="contained" color="secondary" disabled >
                Set Posts Location <CloudDownloadIcon />
            </Button>
            <Button variant="contained" disabled={!isLoggedIn} color="secondary" onClick={()=>{blogData.clearSelectedBlog()}} >
                New Post <AddIcon />
            </Button>
            <Button variant="contained" color="secondary" disabled={selectedBlog === null || !isLoggedIn} onClick={()=>{
                if(selectedBlog && confirm("You sure?") ){
                    deleteBlog(selectedBlog.id);
                    blogData.clearSelectedBlog()
                }
            }}>
                Delete post <DeleteIcon />
            </Button>
            </div>
        </div>
    )
}

export default SideMenu;