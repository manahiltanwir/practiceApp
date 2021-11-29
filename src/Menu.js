import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/user">User</NavLink>
                </div>
            </div>
        </>
    )
}
export default Menu
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
//     <>
//     <div className="menu" style={{display:"flex", justifyContent:"space-around",
//     fontSize:"30px", backgroundColor:"black"}}>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/about">About</NavLink>
//     <NavLink to="/user">User</NavLink>
//     <NavLink to="/search">Search</NavLink>
//     <NavLink to="/contact">Contact</NavLink>
//     <NavLink to="/error">Error</NavLink>
//     </div>
//     </>
//     )
// }
// export default Menu
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
    // <div className="menu" style={{display:"flex", justifyContent:"space-around",
    // fontSize:"30px", backgroundColor:"black"}}>
//     <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>
//     <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
//     <NavLink to="/user" style={{textDecoration:"none"}}>User</NavLink>
//     <NavLink to="/contact" style={{textDecoration:"none"}}>Contact</NavLink>
//     <NavLink to="/search" style={{textDecoration:"none"}}>Search</NavLink>
//     </div>
//     )
// }
// export default Menu
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
    // <div className="menu" style={{display:"flex", justifyContent:"space-around",
    // fontSize:"30px", backgroundColor:"black"}}>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/about">About</NavLink>
//     <NavLink to="/contact">Conatct</NavLink>
//     <NavLink to="/user">User</NavLink>
//     <NavLink to="/search">Search</NavLink>
//     </div>
//     )
// }
// export default Menu
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
//     <div className="menu" style={{display:"flex", justifyContent:"space-around",
//     fontSize:"30px", backgroundColor:"black"}}>
//     <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>
//     <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
//     <NavLink to="/contact" style={{textDecoration:"none"}}>Conatct</NavLink>
//     <NavLink to="/user" style={{textDecoration:"none"}}>User</NavLink>
//     <NavLink to="/search" style={{textDecoration:"none"}}>Search</NavLink>
//     </div>
//     )
// }
// export default Menu
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
//     <div className="menu" style={{fontSize:"30px",display:"flex",
//     justifyContent:"space-around"}}>
//     <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>
//     <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
//     <NavLink to="/search" style={{textDecoration:"none"}}>Search</NavLink>
//     <NavLink to="/contact" style={{textDecoration:"none"}}>Contact</NavLink>
//     <NavLink to="/header" style={{textDecoration:"none"}}>Header</NavLink>
//     <NavLink to="/user" style={{textDecoration:"none"}}>User</NavLink>
//     </div>
//     )
// }
// export default Menu
//     return(
//     <>
//     <div className="menu" style={{color:"white",backgroundColor:"black",
//     display:"flex", justifyContent:"space-around", fontSize:"30px"}}>
//     <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>
//     <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
//     <NavLink to="/header" style={{textDecoration:"none"}}>Header</NavLink>
//     <NavLink to="/footer" style={{textDecoration:"none"}}>Footer</NavLink>
//     <NavLink to="/user/:fname/:lname" style={{textDecoration:"none"}}>User</NavLink>
//     </div>
//     </>
//     )
// }
// export default Menu
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Menu=()=>{
//     return(
//         <>
//     <div className="menu" style={{display:"flex", justifyContent:"space-around",
//     fontSize:"30px",}}>
//     <NavLink activeClassName="active-Class" to="/"
//     style={{activeClassName:"red", textDecoration:"none"}}>Home</NavLink>
//     <NavLink activeClassName="active-Class" to="/about"
//     style={{textDecoration:"none"}}>About</NavLink>
//     <NavLink to="/user/" activeClassName="active-Class"
//     style={{textDecoration:"none"}}>User</NavLink>
//     <NavLink activeClassName="active-Class" to="/contact"
//     style={{textDecoration:"none"}}>Contact</NavLink>
//     <NavLink activeClassName="active-Class" to="/header"
//     style={{textDecoration:"none"}}>Header</NavLink>
//     <NavLink activeClassName="active-Class" to="/footer"
//     style={{textDecoration:"none"}}>Footer</NavLink>
//     </div>
//     </>
//     )
//     }
//     export default Menu