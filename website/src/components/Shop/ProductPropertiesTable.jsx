const Product_table = () => {
    return ( 

        <div className="flex flex-row rounded-lg w-[440px] h-40">
            <div className="flex flex-col w-[220px]">
            <div className="w-[220px] h-10 pl-2 pt-2 bg-[#008eff]">SIZE</div>
            <div className="w-[220px] h-10 pl-2 pt-2 bg-[#1b78c4]">WEIGHT</div>
            <div className="w-[220px] h-10 pl-2 pt-2 bg-[#008eff]">RELEASE DATE</div>
            <div className="w-[220px] h-10 pl-2 pt-2 bg-[#1b78c4]">DISPLAY</div>
            </div>
            <div className="flex flex-col w-[220px] text-center">
            <div className="w-[220px] h-10 pt-2 bg-[#008eff]">158.5 x 75.9 x 7.7 mm</div>
            <div className="w-[220px] h-10 pt-2 bg-[#1b78c4]">197 g</div>
            <div className="w-[220px] h-10 pt-2 bg-[#008eff]">Released 2024, January 24</div>
            <div className="w-[220px] h-10 pt-2 bg-[#1b78c4]">Dynamic LTPO AMOLED 2X</div>
            </div>
        </div>

     );
}
 
export default Product_table;