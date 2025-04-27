import Social_medias from "./SocialMedias";

const Footer = () => {
    return ( 
      <footer>
            <div className="w-[100%] h-[170px] bg-gradient-to-r from-blue-700 to-sky-400 aspect-[3/2] clip-path">

                <div className="flex pt-[65px] px-1 gap-1 text-xl italic">
                <div className="w-80 h-20 border-r-4 border-slate-300/70 p-5 text-2xl">Yalda Ghaemi Zadeh</div>

                <Social_medias />

                <div className="w-80 h-20 p-5 text-2xl">Copyright© 20XX - 20XX</div>

                </div>
            </div>
        </footer>
     );
}
 
export default Footer;