import { Blog, BlogPost } from '../../model/BlogPost';
import { auth, db, storage } from '../firebaseEntity';

function downloadFile(downloadUrl: string) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = (e) => {
      reject(xhr.status);
    };
    xhr.open('GET', downloadUrl);
    xhr.send();
  });
}

export async function getBlogFile(id: string): Promise<any> {
  const fileRef = storage.ref(`posts/${id}.md`);
  const downloadUrl = await fileRef.getDownloadURL();
  const file = await downloadFile(downloadUrl);
  return file;
}

export async function saveBlog(name:string, markdown:string): Promise<any> {
  const documentFileName = Date.now();
  const blogData = {
    name,
    contentJson: "",
    userId: auth.currentUser.uid,
    deleted: false,
    blogFile: documentFileName,
  };
  await db.collection('posts').add(blogData);
  const storageRef = storage.ref(`posts/${documentFileName}.md`);
  storageRef.putString(markdown);
}

export async function deleteBlog(id: string){
  await db.collection('posts').doc(id).update({
    deleted: true,
  })
}

export async function editBlog(blog:Blog, markdown: string){
  const storageRef = storage.ref(`posts/${blog.blogFile}.md`);
  storageRef.putString(markdown)
  await db.collection('posts').doc(blog.userId).update({
    userId: auth.currentUser.uid,
    name: blog.name,
    deleted: false,
    blogFile: blog.blogFile,
    contentJson: blog.contentJson,
  })
}