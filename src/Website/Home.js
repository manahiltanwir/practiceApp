import React from 'react'
import joker from "../Images/82886.jpg"
import Common from './Common'
import { NavLink } from 'react-router-dom'
const Home=()=>{
    return(
    <>
    <Common 
    name="Grow Your Business With"
    imgsrc={joker}
    visit="/services"
    btnName="Get Started"/>
    </>
    )
}
export default Home
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import img from "../Images/aero.png"
// import Common from './Common'
// const Home=()=>{
//     return(
//         <>
//        <Common 
//        name="Grow Your Business With"
//        imgsrc={img}
//        visit="/services"
//        btnName="Get Started"/>
//         </>
//     )
// }
// export default Home