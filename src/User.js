import { ControlPointSharp } from '@mui/icons-material'
import React from 'react'
import { useLocation } from 'react-router'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
export const User = () => {
    const { fname, lname } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <h1>Hello {fname} {lname}</h1>
            <p>My Current Location is {location.pathname}</p>
            {
                location.pathname == "/user/mr/mannu" ?
                    <button onClick={() => { alert("Downloading...") }}>Download</button>
                    : null
            }
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate("/")}>Homepage</button>
        </>
    )
}
export default User
// import React from 'react'
// import { useLocation, useNavigate, useParams } from 'react-router'
// const User=()=>{
//     const {fname,lname}=useParams()
//     const location=useLocation()
//     const navigate=useNavigate()
//     return(
//         <>
//         <h1>Hello From {fname} {lname} </h1>
//         <p>My Current Location is {location.pathname} </p>
//         <button
//         onClick={()=>navigate(-1)}>Go Back</button>
//         <button
//         onClick={()=>navigate("/")}>HomePage</button>
//         </>
//     )
// }
// export default User
// import { useParams } from 'react-router'
// import { useNavigate } from 'react-router'
// import { useLocation } from 'react-router'
// const User=()=>{
//     const {fname,lname}=useParams()
//     const navigate=useNavigate()
//     const location=useLocation()
//     return(
//     <>
//     <h1>Hello From User {fname} {lname} </h1>
//     <p>My Current Location Is {location.pathname}</p>
//     <button className="btn"
//     onClick={()=>navigate(-1)}>Go Back</button>
//     {location.pathname==="/user/syedmanahil/tanwir" ? (
//     <>
//     <button className="btn"
//     onClick={()=>alert("Download In Process")}>Download</button>
//     <button className="btn"
//     onClick={()=>navigate("/")}>Home</button>
//     </>
//     ): null }
//     </>
//     )
// }
// export default User
// import { useLocation, useNavigate, useParams } from 'react-router'
// const User=()=>{
//     const {fname,lname}=useParams()
//     const location= useLocation()
//     const navigate =useNavigate()
//     console.log(navigate)
//     return(
//         <>
//         <h1> Hello From {fname} {lname} </h1>
//         <p> My Current Location is {location.pathname} </p>
//         {location.pathname==="/user/syedmanahil/tanwir"?(
//         <>
//         <button className="btn"
//         onClick={()=>navigate("/")}>Home</button>
//         <button className="btn"
//         onClick={()=>navigate(-1)}>Back</button>
//         </>
//         ) : null }
//         </>
//     )
// }
// export default User
// import React from 'react'
// import { useParams } from 'react-router'
// import { useLocation } from 'react-router'
// import { useNavigate } from 'react-router'
// const User=()=>{
//     const {fname,lname}=useParams()
//     const location = useLocation()
//     const navigate = useNavigate()
//     return(
//     <>
//     <h1>Welcome To {fname} {lname} Page</h1>
//     <p> My Current Location Is {location.pathname} </p>
//     {location.pathname==="/user/syedmanahil/tanwir"?(
//     <button className="btn"
//     onClick={()=>alert("Download In Progess")}>Download</button>
//     ): null }
//     <button className="btn"
//     onClick={()=>navigate(-1)}>Back</button>
//     <button className="btn"
//     onClick={()=>navigate("/")}>Home</button>
//     </>
//     )
// }
// export default User
// import { useParams , useLocation } from 'react-router'
// import { useNavigate } from 'react-router'
// const User=()=>{
//     const {fname,lname}=useParams()
//     const location = useLocation()
//     const navigate = useNavigate()
//     return(
//     <>
//     <h1> This Is User {fname} {lname} Page </h1>
//     <p> My Current Location {location.pathname} </p>
//     {location.pathname==="/user/syedmanahil/tanwir" ?(
//     <>
//     <button className="btn"
//     onClick={()=>alert("Download In Progress")}>Click Me</button>
//     <button className="btn"
//     onClick={()=>navigate(-1)}>Go Back</button>
//     <button className="btn"
//     onClick={()=>navigate("/contact")}>Homepage</button>
//     </>
//     ): null }
//     </>
//     )
// }
// export default User
// const User=()=>{
//     const {fname,lname}=useParams()
//     const location = useLocation()
//     const navigate = useNavigate()
//     console.log(navigate)
//     return(
//     <>
//     <h1> Hello From User {fname} {lname} </h1>
//     <p> My Current Location Is {location.pathname} </p>
//     { location.pathname==="/user/syedmanahil/tanwir" ?(
//         <>
//     <button className="btn"
//     onClick={()=>{
//         alert("Download In Progress...")
//     }}>Click Me</button>
//     <button className="btn"
//     onClick={()=>navigate(-1)}>Go Back</button>
//     <button className="btn"
//     onClick={()=>{
//         alert("Download In Progress...")
//     }}>Click Me</button>
//     <button className="btn"
//     onClick={()=>navigate("/")}>Home Page</button>
//     </>
//     ) : null }

//     </>
//     )
// }
// export default User
// import React from 'react'
// import { useParams , useLocation } from 'react-router-dom'
// const User=()=>{
//     const {fname,lname} = useParams()
//     const location = useLocation()
//     console.log(location)
//     return(
//         <>
//         <h1> Sorry We Couldn't Find {fname}  {lname}  </h1>
//         <p> My Current Location Is {location.pathname} </p>
//         {location.pathname==="/user/syedmanahil/tanwir" ?(
//         <button className="btn"
//         onClick={()=>alert("You Clicked Me Buddy")}>Click Me</button>
//         ) : null } 
//         </>
//     )
// }
// export default User
// import React from 'react'
// import { useParams } from 'react-router-dom'
// const User=()=>{
//     const {fname,lname} = useParams()
//     return(
//     <>
//     <h1>My {fname} {lname} Page </h1>
//     </>
//     )
// }
// export default User