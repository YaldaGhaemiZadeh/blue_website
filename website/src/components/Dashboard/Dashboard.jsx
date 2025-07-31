import { useState } from 'react'
import BlogForm from './BlogEditor/BlogForm'

const Dashboard = () => {

const [isOpen, setIsOpen] = useState(false)
const toggleSidebar = () => setIsOpen(!isOpen)

return ( 
    <div className='flex min-h-screen'>
        <aside className={`fixed top-0 left-0 h-full w-64 p-2 bg-[#303030] text-[#9ca3af] transform transition-transform duration-300 ease-in-out z-50 
            ${ isOpen ? ' translate-x-0 ' : '-translate-x-full '}`}>

                {/* Profile picture */}
                <div className='w-[240px] h-[240px] p-5 content-center'>
                 <div className='content-center bg-[#48cae4] w-[200px] h-[200px] px-20 rounded-full'><img src="icons/user.svg" alt="" /></div>
                 <button className='bg-[#1c4dd8] px-4 w-20 h-20 fixed z-50 top-[160px] left-[160px] rounded-full'><img src="icons/edit.svg" alt="" /></button>
                </div>

                {/* Buttons */}
                <div className='p-5'>
                 <ul className='flex flex-col gap-2'>
                    <li><a href="#" className="block p-2 border-b-4 border-blue-700 hover:bg-[#565656] rounded text-xl">Blogs</a></li>
                    <li><a href="#" className="block p-2 border-b-4 border-blue-700 hover:bg-[#565656] rounded text-xl">Products</a></li>
                    <li><a href="#" className="block p-2 border-b-4 border-blue-700 hover:bg-[#565656] rounded text-xl">Graphs</a></li>
                    <li><a href="#" className="block p-2 border-b-4 border-blue-700 hover:bg-[#565656] rounded text-xl">Settings</a></li>
                    <li><button onClick={toggleSidebar} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{isOpen ? <img src='icons/arrow.svg' /> : <img src='icons/arrow.svg' />}</button></li>
                 </ul>
                </div>
        </aside>
         <button onClick={toggleSidebar} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {isOpen ? <img src='icons/arrow.svg' /> : <img src='icons/arrow.svg' />}
         </button>
        <main className={`flex-1 transition-all duration-300 ease-in-out
         ${ isOpen ? 'ml-64' : 'ml-0' }`}>

         
         <BlogForm />
        </main>

    </div>
     );
}
 
export default Dashboard;