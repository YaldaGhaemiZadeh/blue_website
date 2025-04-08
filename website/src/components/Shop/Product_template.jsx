import Product_table from "./Product_table";

const Product_temp = () => {

    const title = 'item number one model x serie y'
    const price = 2000
    
    return ( 

    <div className="flex justify-center mt-10">  

        {/* main container */}
        <div className="flex flex-row w-[1020px] h-[440px] rounded-2xl bg-[#313131]">

            {/* text part */}
            <div className="w-[500px] h-[440px]">
                <div className="pt-5 pl-5 h-28 font-sans text-[30px] font-semibold">{title}</div>

                {/* properties */}
                <div className="w-[500px] h-60 overflow-auto">
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
                    <div className="w-64 h-2"></div>
                    <button className="h-12 mt-5 p-3 font-sans text-[20px] font-semibold border border-cyan-500 border-solid">add to cart</button>
                </div> 

            </div>
            
            {/* pictures part */}
            <div className="flex justify-center pt-60 w-[520px] h-[440px] ">pic</div>
        </div>
    </div>    
     );
}
 
export default Product_temp;