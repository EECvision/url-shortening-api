import {ReactComponent as Logo} from '../images/logo.svg';
import useScreenWidth from './with-screen-width-hoc';

const NavigationMenu =({click, toggleNavbar})=>{
const {width} = useScreenWidth();
const middleScreenSize = 639;

    return (
        <div className={`w-full relative flex items-center justify-center md:justify-between border border-black ${toggleNavbar && width < middleScreenSize ? 'pt-6' : 'py-6'} px-8 md:px-24`}>
            <div className="w-full max-w-lg flex md:justify-start justify-between items-center border border-black">
                <Logo/>
                <>
                    {
                        !toggleNavbar 
                        ?
                        <div onClick={()=>click()} className="w-6 h-6 flex sm:hidden flex-col justify-around cursor-pointer">
                            <div className="w-full border-b-2 border-gray-700"></div>
                            <div className="w-full border-b-2 border-gray-700"></div>
                            <div className="w-full border-b-2 border-gray-700"></div>
                        </div>
                        :
                        <div onClick={()=>click()} className="relative w-6 h-6 flex sm:hidden flex-col items-center justify-center cursor-pointer">
                            <div className="w-full absolute transition duration-100 ease-in-out transform -rotate-45 border-b-2 border-gray-700"></div>
                            <div className="w-full transition duration-100 ease-in-out transform rotate-45 border-b-2 border-gray-700"></div>
                        </div>
                    }
                </>
                <div className="hidden sm:flex items-center cursor-pointer border border-black ml-6">
                    <div style={{color: 'hsl(257, 7%, 63%)'}}className="px-4 font-bold">Features</div>
                    <div style={{color: 'hsl(257, 7%, 63%)'}}className="px-4 font-bold">Pricing</div>
                    <div style={{color: 'hsl(257, 7%, 63%)'}}className="px-4 font-bold">Resources</div>
                </div>
            </div>
            <div className="hidden sm:flex items-center cursor-pointer border border-black">
                <div style={{color: 'hsl(257, 7%, 63%)'}}className="font-bold px-6 py-2">Login</div>
                <div style={{background: 'hsl(180, 66%, 49%)'}} className="text-white font-bold px-6 py-2 rounded-full">Sign Up</div>
            </div>
        </div>
    )
}

export default NavigationMenu;


