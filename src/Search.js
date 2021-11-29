import React, { useState } from 'react'
import Img from "./Img"

export const Search = () => {
    const [fields, setFields] = useState()
    return (
        <>
            <div className="search">
                <div className="search-inp">
                    <input type="text" placeholder="Search" className="mt-3"
                        onChange={(e) => setFields(e.target.value)}
                        value={fields} />
                </div>
                <Img fields={fields} />
            </div>
        </>
    )
}
export default Search
// import React, { useState } from 'react'
// import Img from './Img'
// const Search=()=>{
//     const [fields,setFields]=useState()
//     return(
//         <>
//     <div>
//     <input type="text" placeholder="Search Anything"
//     onChange={(e)=>setFields(e.target.value)}
//     value={fields}/>
//     </div>
//     {fields==="" ? null : <Img text={fields}/>}
//     </>
//     )
// }
// export default Search
// import React, { useState } from 'react'
// import Img from "./Img"
// const Search=()=>{
//     const [fields,setFields]=useState()
//     return(
//     <>
//     <div style={{marginTop:"20px",display:"flex", justifyContent:"center",
//     flexDirection:"column", alignItems:"center"}}>
//     <input type="text" placeholder="Search Anything"
//     style={{display:"flex", justifyContent:"center"}}
//     onChange={(e)=>setFields(e.target.value)}
//     value={fields}/>
//     {fields==="" ? null : <Img name={fields}/>}
//     </div>
//     </>
//     )
// }
// export default Search
// import React, { useState } from 'react'
// import Img from './Img'
// const Search=()=>{
//     const [fields,setFields]=useState()
//     return(
//     <>
//     <div style={{marginTop:"20px", display:"flex", justifyContent:"center"}}>
//     <input type="text" placeholder="Search Anything"
//     onChange={(e)=>setFields(e.target.value)}
//     value={fields}/>
//     </div>
//     { fields=== "" ? null : <Img name={fields}/> }
//     </>
//     )
// }
// export default Search
// import React, { useState } from 'react'
// import Img from './Img'
// const Search=()=>{
//     const [fields,setFields]=useState()
//     return(
//     <>
    // <div style={{marginTop:"20px", display:"flex", justifyContent:"center"}}>
    // <input type="text" placeholder="Search Anything" 
//     onChange={(e)=>setFields(e.target.value)}
//     value={fields}/>
//     </div>
//     {fields == "" ? null : <Img name={fields}/>}
//     </>
//     )
// }
// export default Search
// import React from 'react'
// import { useState } from 'react'
// const Search=()=>{
//     const IMG=({name})=>{
//     const img=(`https://source.unsplash.com/600x300?${name}`)
//     return(
//         <>
//         <img src={img} alt="Hello"/>
//         </>
//     )
//     }

//     const [fields,setFields]=useState("")
//     return(
//     <>
//     <div style={{marginTop:"20px", display:"flex", justifyContent:"center"}}>
//     <input type="text" placeholder="Search Anything"
//     onChange={(e)=>setFields(e.target.value)}
//     value={fields}/>
//     </div>
//     <IMG name={fields}/>
//     </>
//     )
//     }
// export default Search