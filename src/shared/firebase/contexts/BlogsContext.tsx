import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../model/BlogPost';
import { db } from '../firebaseEntity';
import { extractDataWithDocumentId } from '../utils';

export const BlogsContext = React.createContext<BlogPost[]>([]);

type Props = {
  children: React.ReactNode;
};

export const BlogsWrapper: React.FC<Props> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const unsub = db.collection('posts').where("deleted", "==", false).onSnapshot((snapshot) => {
      const data: BlogPost[] = [];
      if (snapshot.size) {
        snapshot.forEach((doc) =>
          data.push(extractDataWithDocumentId<BlogPost>(doc)),
        );
        setBlogs(data);
      } else {
        setBlogs([]);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};
