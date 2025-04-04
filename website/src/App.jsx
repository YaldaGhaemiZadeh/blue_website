import Navbar from './components/NavigationBar/Navbar'
import Banner from './components/Banner'
import Slider from './components/Slider/Slider'
import Shop_items from './components/Shop/Shop_items_container'
import Btext from './components/Big_text'
import Fab_menu from './components/Fab_menu'
import Footer from './components/Footer'


function App() {
  return (
    <>
        <Navbar />
        <br /><br />
        <Banner />
        <br /><br />
        <Slider />
        <br /><br />
        <Shop_items />
        <br /><br />
        <Btext />
        <br /><br />
        <Fab_menu />
        <br /><br />
        <Footer />
    </>
  )
}

export default App
