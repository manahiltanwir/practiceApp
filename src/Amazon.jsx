import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards"

const Amazon=()=>{
    return(
        <Card   
                        key={Sdata[3].id}
                        imgsrc={Sdata[3].imgsrc}
                        title={Sdata[3].title}
                        className={Sdata[3].className}
                        link={Sdata[3].link}/>
    )
}
export default  Amazon