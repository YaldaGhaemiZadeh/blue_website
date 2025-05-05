import { useState } from 'react'
import Navbar from "../NavigationBar/Navbar"


const Shop = () => {

    const [ products ] = useState([
        { title: 'Samsung Galaxy S24 ultra', price: 200000 + '$', path: '/photos/phoneS24.png', id: 1 },
        { title: 'Iphone 16 blue', price: 300000 + '$', path: 'photos/phoneIphone16.png', id: 2 },
        { title: 'Iphone 16 blue', price: 300000 + '$', path: 'photos/phoneIphone16.png', id: 3 },
        { title: 'Samsung Galaxy S24 ultra', price: 200000 + '$', path: '/photos/phoneS24.png', id: 4 },
    ])

    return ( 
        <div className="flex justify-center">
            <Navbar />
            <div className="grid grid-cols-3 justify-evenly gap-3 w-[1080px] h-full py-40 px-1">
                {products.map((product) => (
                <div key={product.id}>
                    <a href="/product">
                    <div className="w-[350px] h-[400px] bg-[#313131] p-5 rounded-2xl">
                        <img src={product.path} alt="product" className='rounded-lg' />
                        <h2 className='mt-7 font-extrabold text-xl'>{product.title}</h2>
                        <h3 className='text-xl mt-2 mb-4 ml-1'>{product.price}</h3>
                        <button className='rounded-lg ml-[206px] p-3 bg-[#008eff]'>Add to cart</button>
                    </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
        
    );
}
 
export default Shop;