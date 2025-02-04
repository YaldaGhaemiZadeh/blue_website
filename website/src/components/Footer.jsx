const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="w-[100%] h-[150px] bg-gradient-to-r from-blue-700 to-sky-400 aspect-[3/2] clip-path">
                <ul className="flex pt-10 py-5 px-11 justify-stretch gap-24">
                    <li className="w-[200px] h-[50px] bg-slate-50 rounded-xl bg-opacity-25 content-center px-[70px]"><a href="">Contact</a></li>
                    <li className="w-[200px] h-[50px] bg-slate-50 rounded-xl bg-opacity-25 content-center px-[70px]"><a href="">About</a></li>
                    <li className="w-[200px] h-[50px] bg-slate-50 rounded-xl bg-opacity-25 content-center px-[70px]"><a href="">items</a></li>
                    <li className="w-[200px] h-[50px] bg-slate-50 rounded-xl bg-opacity-25 content-center px-[70px]"><a href="">items</a></li>
                </ul>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;