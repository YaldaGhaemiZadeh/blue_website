import Product_table from "./ProductPropertiesTable";
import Product_image from "./ProductImageGallery";


const Product_temp = () => {

    const title = 'Item number 1 model X'
    const price = 2000000 + '$'
    
    return ( 

    <div className="flex justify-center mt-10">  

        {/* main container */}
        <div className="flex flex-row w-[1020px] h-[440px] rounded-2xl shadow-xl bg-[#313131]">

            {/* text part */}
            <div className="w-[500px] h-[440px]">
                <div className="pt-5 pl-5 h-28 font-sans text-[30px] font-semibold">{title}</div>

                {/* properties */}
                <div className="w-[500px] h-60 overflow-auto p-5">
                <Product_table />
                <br /><br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore cumque eum consequuntur, voluptas enim eos iusto aliquid veniam quam! Ut saepe vitae, cupiditate nemo repellendus et distinctio rem reprehenderit placeat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione, nisi praesentium tenetur minus cupiditate quae tempora voluptatum numquam cumque fugiat unde soluta nihil! Commodi provident similique architecto tempore consequatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo, nam, ullam sint sed possimus ipsa reprehenderit mollitia voluptatem molestiae dicta quaerat? Quisquam assumenda consectetur iusto aliquam! Earum, architecto expedita!
                </p>
                </div>

                {/* price and button part */}
                <div className="flex flex-row w-[500px] h-[88px]">
                    <p className="font-sans text-[30px] font-semibold pt-5 pl-5">{price}</p>
                    <div className="w-44 h-2"></div>
                    <button className="w-32 h-12 mt-5 font-sans text-[20px] font-semibold bg-[#008eff] rounded-xl hover:bg-[#1b78c4]">add to cart</button>
                </div> 

            </div>
            
            {/* pictures part */}
            <div className="flex justify-center pt-5 w-[520px] h-[440px] ">
                <Product_image />
            </div>
        </div>
    </div>    
     );
}
 
export default Product_temp;