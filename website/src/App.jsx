import Navbar from './components/NavigationBar/Navbar'
import Banner from './components/Single_components/Banner'
import Slider from './components/Slider/SliderContainer'
import Shop_items from './components/Shop/Shop_items_container'
import Fab_menu from './components/Single_components/Fab_menu'
import Footer from './components/Single_components/Footer'
import Loader_b from './components/Loader/Loader_bg'

function App() {
  return (
    <>
        <Loader_b />
        <Navbar />
        <br /><br />
        <br /><br />
        <br /><br />
        <Banner />
        <br /><br />
        <Slider />
        <br /><br />
        <Shop_items />
        <br /><br />
        <Fab_menu />
        <br /><br />
        <Footer />
    </>
  )
}

export default App
