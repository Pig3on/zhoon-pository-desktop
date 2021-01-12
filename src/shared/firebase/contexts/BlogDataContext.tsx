import React, { useState, useEffect, useCallback } from 'react';
import { BlogPost } from '../../model/BlogPost';
import firebase, { auth } from '../firebaseEntity';
import { getBlogFile } from '../requests/requests';

interface BlogDataContext {
    blogFile: string;
    selectedBlog: BlogPost;
    setSelectedBlog: Function;
    clearSelectedBlog: Function;
}

export const BlogDataContext = React.createContext<BlogDataContext>(null);
type Props = {
  children: React.ReactNode;
};

export const BlogDataWrapper: React.FC<Props> = ({ children }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [blogFile,setBlogFile] = useState("");

  const clearSelectedBlog = useCallback(()=>{
      setSelectedBlog(null);
      setBlogFile("");
  },[])
  useEffect(() => {
    async function getFile() {
        if(selectedBlog){
            const file = await getBlogFile(selectedBlog.blogFile)
            setBlogFile(file);
        }
       
    }

    getFile()
  }, [selectedBlog]);

  return <BlogDataContext.Provider value={{blogFile,setSelectedBlog,clearSelectedBlog,selectedBlog}}>{children}</BlogDataContext.Provider>;
};
