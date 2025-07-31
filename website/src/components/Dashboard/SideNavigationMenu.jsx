import { useState } from 'react'

const SideNavMenu = () => {

const [isOpen, setIsOpen] = useState(true);
const toggleSidebar = () => setIsOpen(!isOpen);


    return ( 
<div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Navigation</h2>
          <nav>
            <ul className="space-y-4">
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Home</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">About</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Services</a></li>
              <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Contact</a></li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? 'ml-64' : ''
        }`}
      >
        <header className="p-4 bg-white shadow-md">
          <button
            onClick={toggleSidebar}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </header>

        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-700">
            This is your main content area. The sidebar pushes this content when opened.
          </p>
        </main>
      </div>
    </div>
     );
}
 
export default SideNavMenu;