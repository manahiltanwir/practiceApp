import React from 'react'
import Card from "../Website/Card"
import Carddata from "./Carddata"
const Services=()=>{
    return(
    <>
    <div className="my-5">
    <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">   
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
    {Carddata.map((item,index)=>{
    return(
    <Card 
    title={item.title}
    imgsrc={item.imgsrc}
    id={index}
    key={index}/>
    )
    })}
    </div>
    </div>
    </div>
     </div>
    </>
    )
}
export default Services
// import Card from './Card'
// import Carddata from "./Carddata"
// const Services=()=>{
//     return(
//         <>
//         <div className="my-5">
//         <h1 className="text-center">Our Services</h1>
//         </div>
//         <div className="container-fluid mb-5">
//     <div className="row">
//     <div className="col-10 mx-auto">
//         <div className="row gy-4">
            
//             {Carddata.map((item,index)=>{
//         return(
//             <Card 
//             img={item.imgsrc}
//             title={item.title}
//             id={index}
//             key={index}/>
//         )
//         })}
//             </div>
//         </div>
//     </div>    
//     </div>
//     </>
//     )
// }
// export default Services