const Product1 = () => {

    const title = 'item number one model x serie y'
    const properties = ['size', 'weight']
    const price = 2000
    // bg-cyan-950
    return ( 
    <div className="flex justify-center mt-10">   
        <div className="flex flex-row w-[1020px] h-[440px] rounded-2xl bg-[#313131] ">
            <div className="w-[500px] h-[440px] ">
                <div className="pt-5 pl-5 h-28 font-sans text-[30px] font-semibold">{title}</div>
                <div className="w-[500px] h-60 bg-blue-600">{properties}</div>

                <div className="flex flex-row bg-cyan-300 w-[500px] h-[88px]">
                    <p className="font-sans text-[30px] font-semibold pt-5 pl-5">{price}</p>
                    <div className="w-64 h-2 bg-black"></div>
                    <button className="h-12 mt-5 p-3 font-sans text-[20px] font-semibold border border-cyan-500 border-solid">add to cart</button>
                </div> 

            </div>

            <div className="w-[520px] h-[440px] bg-cyan-800 ">pic</div>
        </div>
    </div>    
     );
}
 
export default Product1;