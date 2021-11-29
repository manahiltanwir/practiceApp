import React from 'react'
import Common from './Common'
import img from "../Images/aero.png"
const About=()=>{
    return(
    <>
    <Common
    imgsrc={img}
    name="Welcome To About Page"
    btnName="Contact Here"
    visit="/contact"/>
    </>
    )
}
export default About
// import React from 'react'
// import Common from './Common'
// import img from "../Images/images.png"
// const About=()=>{
//     return(
//         <>
//          <Common 
//        name="Welcome To About Page"
//        imgsrc={img}
//        visit="/contact"
//        btnName="Contact Now"/>
//         </>
        
//     )
// }
// export default About