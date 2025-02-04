import Blog from './Blog'


const Slider = () => {
    return ( 

        <>
        <div id="container" className="flex flex-row justify-center pt-10 gap-5 bg-[#3F3F3F] w-[1130px] h-[500px] mx-6 rounded-[2rem] p-[0.5px]">
            <Blog />
            <Blog />
            <Blog />
        </div>
        </>

     );
}
 
export default Slider;