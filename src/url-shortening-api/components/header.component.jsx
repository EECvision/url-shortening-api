import Button from './button.component';
import illustration from '../images/illustration-working.svg';
import NavigationList from './navigation-list.component';
import useScreenWidth from './with-screen-width-hoc';

const Header =({toggleNavbar})=>{
    const {width} = useScreenWidth();
    const middleScreenSize = 640;

    return (
        <div className={`relative w-full flex flex-col-reverse md:flex-row items-center justify-end border border-red-500 md:pl-24 mb-12 ${toggleNavbar && width < middleScreenSize ? 'pt-3' : 'pt-8'}`}>
            <div className="border border-black w-full flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
                <h1 style={{color: 'hsl(255, 11%, 22%)'}} className="w-full max-w-xl text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">More than just <br/> shorter links</h1>
                <p style={{color: 'hsl(257, 7%, 63%)'}} className="w-full max-w-md md:text-lg lg:text-xl text-gray-700 mb-8 border border-black">
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <Button/>
            </div>
            <>
                {
                    toggleNavbar && width < middleScreenSize
                    ?
                    <div className="w-full px-8"><NavigationList/></div>
                    :
                    <img className="sm:absolute w-full sm:max-w-lg md:max-w-xl border border-black transform scale-125 sm:scale-100 translate-x-20 sm:translate-x-48 md:translate-x-24 -translate-y-6 md:translate-y-0" src={illustration} alt="illustration"/>
                }
            </>
        </div>
    )
}

export default Header;