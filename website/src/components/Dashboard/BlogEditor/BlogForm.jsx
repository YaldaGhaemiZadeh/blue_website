const BlogForm = () => {
    return ( 
        <form action="" className="w-[750px] h-[500px] flex flex-col px-6 py-5 bg-[#313131] shadow-xl rounded-3xl">
            <input type="text" placeholder="Title..." className="w-[700px] h-20 rounded-xl text-[50px] italic p-6" />
                
                <div className="w-[700px] h-[50px] bg-[#3b3b3b] mt-3">
                 <select name="" id="">
                   <option value="">
                    Phone
                   </option>
                   <option value="">
                    News
                   </option>
                 </select>

                </div>
        </form>
     );
}
 
export default BlogForm;