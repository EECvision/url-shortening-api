import {useState} from 'react';

import NavigationMenu from './navigation-menu.component';
import Header from './header.component';
import Form from './form-shortner.component';
import StatisticsMenu from './statistics-section/statistics-section-menu.component';
import Advert from './advert.comoponent';
import Footer from './footer-section/footer-menu.compnent';
import useScreenWidth from './with-screen-width-hoc';

const UrlShortner =()=>{
    const {width} = useScreenWidth()
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const handleClick=()=>{
        setToggleNavbar(!toggleNavbar);
    }

    return(
        <div className="w-full flex flex-col justify-center items-center overflow-hidden ">
            {
                toggleNavbar && width < 639
                ?
                <>
                    <NavigationMenu toggleNavbar={toggleNavbar} click={handleClick} />
                    <Header toggleNavbar={toggleNavbar}/>
                </>
                :
                <>
                    <NavigationMenu toggleNavbar={toggleNavbar} click={handleClick} />
                    <Header toggleNavbar={toggleNavbar}/>
                    <Form/>
                    <StatisticsMenu/>
                    <Advert/>
                    <Footer/>
                </>
            
            }
        </div>
    )
}

export default UrlShortner;