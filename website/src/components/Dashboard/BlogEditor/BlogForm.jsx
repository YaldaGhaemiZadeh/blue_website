const BlogForm = () => {
    return ( 
        <form action="" className="w-[750px] h-[500px] ml-[40px] mt-14 flex flex-col gap-3 px-6 py-5 bg-[#313131] shadow-xl rounded-3xl">
            <input type="text" placeholder="Title..." className="w-[700px] h-20 rounded-xl text-[50px] italic p-6" />
                
                <div className="w-[700px] h-[60px] p-1 flex gap-2 justify-between text-3xl bold italic">
                 <select name="" id="" className="w-[170px] h-[50px] rounded-lg p-1 bg-[#3b3b3b] text-[#9ca3af]">
                   <option value="">
                    Phone
                   </option>
                   <option value="">
                    News
                   </option>
                   <option value="">
                    Others
                   </option>
                 </select>

          <button className="w-[120px] h-[50px] bg-green-700 rounded-lg">Post</button>
          <button className="w-[120px] h-[50px] bg-red-900 rounded-lg">Clear</button>
          <button className="w-[120px] h-[50px] bg-[#3b3b3b] rounded-lg">???</button>
          <button className="w-[120px] h-[50px] bg-[#3b3b3b] rounded-lg">???</button>
               </div>
            <textarea className="h-[300px] rounded-xl p-5 text-2xl" placeholder="Text..."></textarea>
        </form>
     );
}
 
export default BlogForm;