const ABC = () => {
    return ( 
    <div className="w-[855px] h-52 bg-[#313131] rounded-2xl flex flex-row
    ">
        <div className="w-52 h-52 p-2"><div className="w-48 h-48 bg-[#008eff] rounded-full"></div></div>
        <div className="w-[647px] h-52 p-4 flex flex-col gap-2">
            <div className="flex flex-row gap-5 text-5xl">
                <h2 className="">title</h2>
                <h2>category</h2>
                <h2>date/time</h2>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maxime blanditiis repellendus labore cumque ratione reiciendis molestias, atque eum rerum laboriosam, corrupti fuga eligendi facilis eos corporis. Dicta, similique laboriosam.</p>
            <div className="w-full flex justify-end gap-2">
                <button className="w-32 h-12 bg-[#008eff] rounded-xl text-4xl">Edit</button>
                <button className="w-32 h-12 bg-red-900 rounded-xl text-4xl">Delete</button>
            </div>
            
        </div>
    </div>
 );
}
 
export default ABC;