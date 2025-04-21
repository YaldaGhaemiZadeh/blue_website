import Navbar from "../NavigationBar/Navbar";

const Shop = () => {
    return ( 
        <div className="flex justify-center">
            <Navbar />
            <div className="flex flex-row justify-evenly gap-3 w-[1080px] h-[500px] bg-green-500 mt-40">
                <div className="w-[350px] h-[400px] bg-red-900"></div>
                <div className="w-[350px] h-[400px] bg-red-900"></div>
                <div className="w-[350px] h-[400px] bg-red-900"></div>
            </div>
        </div>
    );
}
 
export default Shop;