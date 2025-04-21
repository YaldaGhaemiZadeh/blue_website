import Mag_glass from './Mag_glass'

const Search_bar = () => {
    return ( 
        <div className="flex flex-row w-[340px] h-[60px] mx-2 mt-2 shadow-xl">
            <search>
                <input className="ml-20 rounded-r-lg w-[80%] h-full outline-none bg-[#242424] px-3" type="search" />
                <button className="flex fixed z-20 top-5 justify-center pt-3 rounded-l-lg w-20 h-[60px] bg-[#004eff] hover:opacity-80" type="submit"><Mag_glass /></button>
            </search>
        </div>
     );
}
 
export default Search_bar;