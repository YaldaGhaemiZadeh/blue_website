import Blog from './Blog'


const Slider = () => {
    return ( 

        <>
        <div id="container" className="flex flex-row justify-center pt-10 gap-3 bg-[#3F3F3F] w-[1015px] h-[500px] mx-6 rounded-[2rem]">
            <Blog />
            <Blog />
            <Blog />
        </div>
        </>

     );
}
 
export default Slider;