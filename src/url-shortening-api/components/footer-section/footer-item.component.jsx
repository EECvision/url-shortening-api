const FooterItem =({title, contents})=>{
    return(
        <div className="md:text-left text-center mb-">
            <div className="text-white mb-3 font-bold">{title}</div>
            <div  className="" style={{color: 'hsl(257, 7%, 63%)'}}>
                {
                    contents.map(content =>(
                        <div className="text-sm py-1">{content}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterItem;

