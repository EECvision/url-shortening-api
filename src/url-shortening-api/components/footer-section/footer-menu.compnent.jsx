import {useState} from 'react';
import Data from './footer-data.json';

import FooterItem from './footer-item.component';

import {ReactComponent as Logo} from '../../images/logo.svg';
import iconFacebook from '../../images/icon-facebook.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import iconPinterest from '../../images/icon-pinterest.svg';
import iconInstagram from '../../images/icon-instagram.svg';

const FooterMenu =()=>{
    const [data] = useState(Data);
    const icons=[iconFacebook, iconTwitter, iconPinterest, iconInstagram];

    return (
        <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between py-12 px-8 md:px-32" style={{background: "hsl(260, 8%, 14%)"}}>
            <Logo style={{filter: "brightness(10)"}} className="transform scale-75 mb-16 border border-white"/>
            <div className="w-full max-w-md lg:mb-0 mb-12 flex flex-col items-center justify-center sm:flex-row sm:justify-around sm:items-start border border-white">
                {
                    data.map(datum =>(
                        <FooterItem key={datum.id} {...datum}/>
                    ))
                }
            </div>
            <div className="w-32 flex items-center justify-between border border-white">
                {
                    icons.map((icon, idx)=>(
                        <img className="w-5 h-5" key={idx} src={icon} alt="icon"/>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterMenu;