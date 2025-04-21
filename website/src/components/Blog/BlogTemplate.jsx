import Lorem from "./Lorem"
import Heart_btn from "../Single_components/HeartButton"

const Blog_template = () => {

    let data = new Date(8.64e15)
    let time = data.toDateString()
    let date = data.toTimeString()
    let author = 'admin'

    return ( 
        <div className="flex justify-center content-center">
            <div className="flex flex-col w-[1080px] h-[100%] bg-[#313131] mt-20 mb-14 pb-20 rounded-3xl shadow-2xl">

                <div className="flex flex-row w-[1080px] h-[100%]">
                <div className="absolute z-40 top-6 rounded-full w-[180px] h-[180px] ml-12 bg-[#008eff] shadow-2xl"><div className=" w-[160px] h-[160px] rounded-full mt-[10px] ml-[10px]  bg-[#004eff] p-12">Category picture</div></div>

                <div className="w-[750px] h-[100px]  ml-64 mt-2 pl-2 font-semibold font-mono">
                    <h6 className="w-[370px] text-nowrap text-[50px] tracking-tight underline">Title of the Blog.</h6>
                    <h5 className='w-[370px]'>{time + ' / ' + date + ' By: ' + author}</h5>
                </div>
                <div className="mr-[50px] mt-6"><Heart_btn /></div>
                </div>

                


                <div className="w-[850=5px] h-[250vh] mx-[10%] my-20">
                    <Lorem /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
     );
}

export default Blog_template;