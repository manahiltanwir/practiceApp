import React, { useState } from 'react'
const StoredData=({a,b,c,d,e,id,select,selectAll,editItem})=>{
  const [fields,setFields]=useState({
    name:"",lname:"",email:"",password:"",contact:""
  })
  const [edit,setEdit]=useState(false)
  const saveItem=()=>{
    setEdit(false)
    editItem(id,fields)
  }
  return(
    
    
      <>
      {edit ?(
        <ul class="list-group">
  <li class="list-group-item">
    <input placeholder={a}
    onChange={(e)=>setFields({...fields,name:e.target.value})}/>
  </li>
  <li class="list-group-item">
    <input placeholder={b}
    onChange={(e)=>setFields({...fields,lname:e.target.value})}/>
  </li>
  <li class="list-group-item">
    <input placeholder={c}
    onChange={(e)=>setFields({...fields,email:e.target.value})}/>
  </li>
  <li class="list-group-item">
    <input placeholder={d}
    onChange={(e)=>setFields({...fields,password:e.target.value})}/>
  </li>
  <li class="list-group-item">
    <input placeholder={e}
    onChange={(e)=>setFields({...fields,contact:e.target.value})}/>
  </li>
</ul>    
      
    ):(
     
     <>
  
    <ul class="list-group">
    <li class="list-group-item">{a}</li>
    <li class="list-group-item">{b}</li>
    <li class="list-group-item">{c}</li>
    <li class="list-group-item">{d}</li>
    <li class="list-group-item">{e}</li>    
    </ul>
  
   </>
    )}
    {!edit?(
    <>
    <button className="btn"
    onClick={()=>setEdit(true)}>Edit</button>
    </>
    ):(
      <button className="btn"
      onClick={saveItem}>Save</button>
    )}
    <button className="btn"
    onClick={()=>{
      select(id)
    }}>Delete</button>
    </>
    
  )
}
export default StoredData
// import React, { useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const StoredData=({a,b,c,d,e,editItem,id,select,selectAll})=>{
//     const [fields,setFields]=useState({
//         name:"",lastName:"",email:"",phone:"",text:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//       editItem(id,fields)
//       setEdit(false)
//     }
//     return(
//         <>
        
//         <div className="card" style={{marginTop:"20px"}}>
//   <div className="">
//     <h3 className="text-center">Saved Successfully</h3>

//   </div>
//   <ul className="list-group list-group-flush">
//       {edit?(
//     <>
//     <li className="list-group-item">
//     <input type="text" placeholder={a}
//     onChange={(e)=>setFields({...fields,name:e.target.value})}/>
//     </li>
//     <li className="list-group-item">
//     <input type="text" placeholder={b}
//     onChange={(e)=>setFields({...fields,lastName:e.target.value})}/>
//     </li>
//     <li className="list-group-item">
//     <input type="text" placeholder={c}
//     onChange={(e)=>setFields({...fields,email:e.target.value})}/>
//     </li>
//     <li className="list-group-item">
//     <input type="text" placeholder={d}
//     onChange={(e)=>setFields({...fields,phone:e.target.value})}/>
//     </li>
//     <li className="list-group-item">
//     <input type="text" placeholder={e}
//     onChange={(e)=>setFields({...fields,text:e.target.value})}/>
//     </li>
//     </>
//       ):(
// <>
// <li className="list-group-item">{a}</li>
//     <li className="list-group-item">{b}</li>
//     <li className="list-group-item">{c}</li>
//     <li className="list-group-item">{d}</li>
//     <li className="list-group-item">{e}</li>
// </>
//       )}
//       {!edit?(
//         <button
//         onClick={()=>setEdit(true)}><EditIcon/></button>
//       ):(
//           <button className="btn-success"
//           onClick={saveItem}>Save</button>
//       )}
//     <button
//     onClick={()=>{
//         select(id)
//     }}><DeleteIcon/></button>
//   </ul>
// </div>
//         </>
//     )
// }
// export default StoredData