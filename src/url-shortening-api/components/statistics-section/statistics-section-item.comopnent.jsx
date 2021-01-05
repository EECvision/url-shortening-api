import iconBrand from '../../images/icon-brand-recognition.svg';
import iconDetailed from '../../images/icon-detailed-records.svg';
import iconFully from '../../images/icon-fully-customizable.svg';

const icons = {
    iconBrand: iconBrand,
    iconDetailed: iconDetailed,
    iconFully: iconFully
}

const StatisticsItem =({imageUrl, title, subtitle, extendBy})=>{
    return (
        <div style={{width: "17rem"}} className={`px-8 mb-16 flex flex-col items-center md:items-start text-center md:text-left shadow-2xl z-10 bg-white transform lg:-translate-y-${extendBy}`}>
            <div className="w-20 h-20 flex items-center justify-center transform -translate-y-1/2 rounded-full" style={{background: 'hsl(257, 27%, 26%)'}}>
                <img src={icons[imageUrl]} alt="icons"/>
            </div>
            <div className="font-bold text-xl mb-5" style={{color: 'hsl(255, 11%, 22%)'}}>{title}</div>
            <div className="text-xs font mb-4" style={{color: 'hsl(257, 7%, 63%)'}}>{subtitle}</div>
        </div>
    )
}

export default StatisticsItem;