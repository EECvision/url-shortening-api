const NavigationList =()=>{
    return(
        <div style={{background: "hsl(257, 27%, 26%)"}} className="w-full flex flex-col items-center py-6 pb-10 px-6 text-white text-center rounded-lg ">
            <div className="my-2 font-bold cursor-pointer">Features</div>
            <div className="my-2 font-bold cursor-pointer">Pricing</div>
            <div className="my-2 font-bold cursor-pointer">Resources</div>
            <div style={{borderBottom: "2px solid hsl(257, 7%, 63%)"}} className="w-64 my-2 cursor-pointer"/>
            <div className="my-2 font-bold">Login</div>
            <div style={{background: 'hsl(180, 66%, 49%)'}} className="w-64 my-2 py-2 font-bold rounded-full cursor-pointer">Sign Up</div>
        </div>
    )
}

export default NavigationList;

