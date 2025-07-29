import { useState } from 'react'

function Editor() {
    const [ blogs, setBlogs ] = useState([])

    const addBlog = ( blogText ) => {
        const newBlog = { id: Date.now(), text: blogText }
        setBlogs( oldBlogs => [ newBlog, ...oldBlogs ])
    }

    const deleteBlog = ( id ) => {
        setBlogs( oldBlogs => oldBlogs.filter( blog => blog.id !== id ))
    }
    return (
        <></>
    )
}
 
export default Editor