const Blog = () => {
    return ( 
        <a href="/blog">
        {/* Container */}
        <div className="text-black w-[20rem] h-[26.5rem] bg-[#004eff] ml-1 pl-[1rem] 
        pt-[2rem] rounded-[2rem] hover:bg-[#004cffc6]">

        {/* Title + Category */}
        <div className="font-bold text-3xl tracking-wide">
            <span className="text-[#39aadb] pl-[2rem]">CATEGORY</span>
            <p className="text-black pl-[3rem]">Title of blog</p>
        </div>

            {/* Content */}
            <p className="text-[#082000] mt-4 p-[1rem] font-semibold font-mono">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit porro omnis dolores, neque perspiciatis iste autem ipsum, odio, minus ipsa maxime. Reprehenderit et dolore ipsum a minus eum amet id!
            </p>
            
        </div>
        </a>
     );
}
 

export default Blog;
