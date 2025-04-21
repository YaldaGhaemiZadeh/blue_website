const Product_card = () => {
    return ( 
        <div className=" flex flex-col rounded-2xl p-5 w-80 h-80 bg-[#008eff] hover:opacity-70">
        <a  href="/product">
            <div className=" h-52 content-center border-b-4 border-b-blue-700 pb-2">
                <div className="w-full h-full bg-[#004eff] rounded-2xl"></div>
            </div>
            <p className="w-20 h-20 pt-7 text-2xl pl-2 text-[#060f1b] font-mono text-nowrap font-semibold">PRODUCT NAME</p>
        </a>
    </div>
     );
}
 
export default Product_card;