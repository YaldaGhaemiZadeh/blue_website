const Product1 = () => {

    const title = 'item number one model x serie y'
    const properties = ['size', 'weight']
    const price = 2000

    return ( 
    <div className="flex justify-center mt-10">   
        <div className="flex flex-row w-[1020px] h-[440px] rounded-2xl bg-[#313131] ">
            <div className="w-[500px] h-[440px] bg-cyan-500">
                <div className="bg-cyan-950 pt-4 pl-5 h-28 font-sans text-[30px] ">{title}</div>
                <div className="w-[500px] h-60 bg-blue-600">{properties}</div>
                <div className="flex flex-row bg-cyan-300 w-[500px] h-[88px]">
                    <p>{price}</p>
                    <div className="w-80 h-2 bg-black"></div>
                    <button>add to cart</button>
                </div>
            </div>

            <div className="w-[520px] h-[440px] bg-cyan-800 ">pic</div>
        </div>
    </div>    
     );
}
 
export default Product1;