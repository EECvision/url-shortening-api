import {useState} from 'react';

import StatisticsItem from './statistics-section-item.comopnent';

import Data from './statistics-data.json';

const StatisticsMenu =()=>{
    const [data] = useState(Data)
    return(
        <div className="w-full flex flex-col items-center justify-center bg-gray-200 px- md:px-24 pt-48">
            <div className="w-full max-w-lg text-center border border-black mb-16 px-12">
                <h1 style={{color: 'hsl(255, 11%, 22%)'}} className="text-3xl sm:text-4xl font-bold mb-2">Advanced Statistics</h1>
                <p style={{color: 'hsl(257, 7%, 63%)'}} className="text-sm">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-start transform lg:translate-y-40 mb-24">
                <div className="w-full flex flex-wrap justify-evenly lg:justify-between border border-black">
                    {
                        data.map(datum => (
                            <StatisticsItem key={datum.id} {...datum}/>
                        ))
                    }
                </div>
                {/* <div className="w-full max-w-md absolute border-b-8 border-teal-500"/> */}
            </div>
        </div>
    )
}

export default StatisticsMenu;


