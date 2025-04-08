const Product_card = () => {
    return ( 
        <div className=" flex flex-col rounded-2xl p-5 mt-5 w-80 h-80 bg-[#38bdf8]">
        <a  href="/product">
            <div className=" h-52 content-center border-b-4 border-b-blue-700">pic</div>
            <p className="w-20 h-20 pt-5 pl-1 text-nowrap">product #1</p>
        </a>
    </div>
     );
}
 
export default Product_card;