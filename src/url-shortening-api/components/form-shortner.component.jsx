import bgShortenDesktop from '../images/bg-shorten-desktop.svg';


const Form =()=>{
    return (
        <div className="w-full px-10 md:px-24 transform translate-y-1/2">
            <div className="w-full rounded-lg" style={{background: 'hsl(257, 27%, 26%)'}}>
                <div className="w-full flex justify-center rounded-lg sm:py-10 p-6 items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${bgShortenDesktop})`}}>
                    <form onSubmit={(e)=>e.preventDefault()} className="w-full flex flex-col justify-center sm:flex-row items-center justify-center">
                        <input type="text" placeholder="   Shorten a link here..." className="w-full sm:w-4/6 h-12 sm:mr-4 mb-4 sm:mb-0 rounded bg-white" />
                        <button style={{background: 'hsl(180, 66%, 49%)'}} className="w-full sm:w-1/6 h-12 text-white font-bold rounded bg-white" type="submit">Shorten it!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form