import bgBoostDesktop from '../images/bg-boost-desktop.svg';

import Button from './button.component';

const Advert =()=>{
    return (
        <div className="w-full" style={{background: 'hsl(257, 27%, 26%)'}}>
            <div className="w-full flex justify-center py-12 items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${bgBoostDesktop})`}}>
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="text-4xl text-white font-bold mb-6">Boost your link today</div>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Advert;
