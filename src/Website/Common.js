import React from 'react'
import { NavLink } from 'react-router-dom'
const Common=({name,imgsrc,visit,btnName})=>{
    return(
    <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>{name} <br/> <strong className="brand-name">Mr Mannu</strong></h1>
        <h2 className="para" style={{fontSize:"20px", marginTop:"20px"}}>We Are The Team Of Talented Website Developers</h2>
        <div className="mt-4">
        <NavLink to={visit} className="get-started">{btnName}</NavLink>
        </div>
        </div>
        <div className="col-lg-6 pt-0 order-1 order-lg-2 header-img">
            <div className="">
                <img src={imgsrc} className="img-fluid animated"/>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default Common
// import img from "../Images/aero.png"
// const Common=({name,imgsrc,visit,btnName})=>{
//     return(
//         <>
//         <section id="header" className="d-flex align-items-center">
//         <div className="container-fluid">
//     <div className="row">
//     <div className="col-10 mx-auto">
//         <div className="row ">
//         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//         <h1>{name}
//         <br/>
//         <strong className="brand-name">Mr Manahil</strong>
//         </h1>
//         <h2 className="my-3">We Are The Team Of Talented Website Developers</h2>
        
//         <div className="mt-3">
//             <NavLink to={visit} className="btn-get-started"> {btnName} </NavLink>
//         </div>
//         </div>
//         <div className="col-lg-6 order-1 order-lg-2 header-img">
//         <img src={imgsrc} className="img-fluid animated" alt="Common img"/>
//     </div>
//     </div>
    
//         </div>
//     </div>
//     </div>
//         </section>
//         </>
//     )
// }
// export default Common