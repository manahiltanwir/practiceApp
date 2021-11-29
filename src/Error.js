import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
export const Error = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Oops, Page Not Found</h1>
            <button className="btn"
                onClick={() => navigate(-1)}>Go Back</button>
            <button className="btn"
                onClick={() => navigate("/")}>Homepage</button>
        </>
    )
}
export default Error
// import React from 'react'
// import { useNavigate } from 'react-router'
// const Error=()=>{
//     // const navigate=useNavigate()
//     return(
//     <>
//     <h1 style={{fontSize:"100px",textAlign:"center",display:"flex",
//     justifyContent:"center",alignItems:"center",
//     color:"burlywood"}}>404 Error Not Found</h1>
//     <h1 style={{fontSize:"100px",textAlign:"center",display:"flex",
//     justifyContent:"center",alignItems:"center",
//     color:"burlywood"}}>This Page Is Unavalable</h1>
//     <button
//     onClick={()=>navigate("/")}>Home</button>
//     </>
//     )
// }
// export default Error
// import { useNavigate } from 'react-router'
// const Error=()=>{
//     const navigate=useNavigate()
//     return(
//     <>
//     <h1 style={{fontSize:"100px",textAlign:"center",display:"flex",
//     justifyContent:"center",alignItems:"center",
//     color:"burlywood"}}>
//     404 Error Page
//     </h1>
//     <h1 style={{fontSize:"70px",display:"flex",justifyContent:"center",
//     alignItems:"center",color:"burlywood"}}>
//     Sorry,This Page Is Unavailable
//     </h1>
//     <button className="btn" style={{color:"red"}}
//     onClick={()=>navigate("/")}>Go Back</button>
//     </>
//     )
// }
// export default Error
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Error=()=>{
// return (
//     <>
//     <h1> 404 Error Page </h1>
//     <NavLink to="/">Go Back</NavLink>
//     </>
//     )
// }
// export default Error