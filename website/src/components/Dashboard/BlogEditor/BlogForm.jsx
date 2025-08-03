import { useState } from "react"

const BlogForm = () => {

    const [ titleInput, setTitleInput ] = useState('')
    const [ articleInput, setArticleInput ] = useState('')
    const [ category, setCategory ] = useState('')

    const clearInput = () => {
        // none-efficient way
        // document.getElementById('title').value = null
        // document.getElementById('textArea').value = null
        // via state
        setCategory('Category')
        setTitleInput('')
        setArticleInput('')
        }

    const handleSubmit = (e) => { 
        e.preventDefault()
        if ( titleInput && articleInput !== null && category !== 'Category' ){
         console.log( titleInput, articleInput, category )
        //  clearInput()
        } else { alert('Please fill in both fields before posting.') }
    }

    return ( 

        // form container
        <form action="" onSubmit = { handleSubmit } className = "w-[900px] min-w-[750px] h-[500px] ml-[40px] mt-14 flex flex-col gap-3 px-6 py-5 bg-[#313131] shadow-xl rounded-3xl">

            {/* Title */}
            <input value = { titleInput } onChange = { e => setTitleInput( e.target.value ) } id = "title" type = "text" placeholder = "Title..." className = "w-[850px] min-w-[700px] h-20 rounded-xl text-[50px] italic p-6" />

                {/* editor buttons */}
                <div className = "w-[850px] min-w-[700px] h-[60px] p-1 flex justify-between text-3xl bold italic">
                 <select id = "category" value = { category } onChange = { e => setCategory( e.target.value ) } className = "w-[170px] h-[50px] rounded-lg p-1 bg-[#3b3b3b] text-[#9ca3af]">
                   <option value="Category">
                    Category
                   </option>
                   <option value="Phone">
                    Phone
                   </option>
                   <option value="News">
                    News
                   </option>
                   <option value="Others">
                    Others
                   </option>
                 </select>

                    <button type = "submit" className = "w-[120px] h-[50px] bg-green-700 rounded-lg flex p-2 content-center"><img src="icons/post.svg" className="w-7 h-7" alt="" />Post</button>
                    <button type = "button" onClick = { clearInput } className = "w-[120px] h-[50px] bg-red-900 rounded-lg flex p-2 content-center"><img src="icons/eraser.svg" className="w-7 h-7" alt="" />Clear</button>
                    <button type = "button" className = "w-[130px] h-[50px] bg-[#1949a3] rounded-lg flex p-2 content-center"><img src="icons/add_photo.svg" alt="" className="w-7 h-7" />Photo</button>
                    <button type = "button" className = "w-[140px] h-[50px] bg-[#3b3b3b] rounded-lg flex p-2 content-center"><img src="icons/article_person.svg" alt="" className="w-7 h-7" />Author</button>
                    <button type = "button" className = "w-[120px] h-[50px] bg-[#3b3b3b] rounded-lg flex p-2 content-center">???</button>

               </div>
               {/* article writing area */}
            <textarea value = { articleInput } onChange = { e => setArticleInput( e.target.value ) } id = "textArea" className = "h-[300px] rounded-xl p-5 text-2xl" placeholder = "Text..."></textarea>
        </form>
     )
}
 
export default BlogForm