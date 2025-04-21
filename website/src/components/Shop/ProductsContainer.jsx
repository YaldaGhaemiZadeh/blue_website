import Product_card from "./ProductCard";

const Shop_items = () => {
    return ( 
        <div className="flex flex-wrap justify-center gap-3 w-[1020px] h-[705px] ml-12 pt-5 bg-[#313131] rounded-3xl shadow-xl">
            <Product_card />
            <Product_card />
            <Product_card />
            <Product_card />
            <Product_card />
            <Product_card />

        </div>
    );
}
 
export default Shop_items;