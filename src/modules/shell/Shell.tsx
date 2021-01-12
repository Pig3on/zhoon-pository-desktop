import { makeStyles } from '@material-ui/core';
import React from 'react';
import Editor from '../editor/Editor';
import SideMenu from '../sideMenu/SideMenu';
import { BlogDataWrapper } from '../../shared/firebase/contexts/BlogDataContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    }
  }));

const Shell = () => {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <BlogDataWrapper>
                <SideMenu />
                <Editor />
             </BlogDataWrapper>
        </div>

    )
}

export default Shell;