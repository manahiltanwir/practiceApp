import React, {useState} from "react"
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { InsertEmoticon } from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
const Note=({a,b,id,select,editItem})=>{
    const [fields,setFields]=useState({
        title:"",note:""
    })
    const [edit,setEdit]=useState(false)
    const saveItem=()=>{
    setEdit(false)
    editItem(id,fields)
    }
    return(
    <div className="main-note">
    <div className="note-div">
    {edit?(
    <>
    <h2>
    <input placeholder={a}
    onChange={(e)=>setFields({...fields,title:e.target.value})}/>
    </h2>
    <h2>
    <input placeholder={b}
    onChange={(e)=>setFields({...fields,note:e.target.value})}/>
    </h2>
    </>
    ):(
    <>
    <h2> {a} </h2>
    <h2> {b} </h2>
    </>
    )}
    {!edit?(
    <button className="btn"
    onClick={()=>setEdit(true)}>Edit</button>
    ):(
        <button className="btn"
        onClick={saveItem}>Save</button>
    )}
    <button className="btn-close"
    onClick={()=>{
        select(id)
    }}></button>
    </div>
    </div>
    )
}
export default Note
// const Note=({a,b,select,id,editItem})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//         setEdit(false)
//         editItem(id,fields)
//     }
// return(
//     <div className="main-note">
//     <div className="note-div">
//     {edit?(
//         <>
//     <h2>
//     <input type="text" placeholder={a}
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
//     <input type="text" placeholder={b}
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
//     ):(
//     <>
//     <h2> {a} </h2>
//     <h2> {b} </h2>
//     </>
//     )}
//     {!edit?(
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//         <EditIcon/>
//     </button>
//     ):(
//         <button className="btn"
//         onClick={saveItem}>
//             <SaveAltIcon/>
//         </button>
//     )}
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}><DeleteIcon/></button>
//     </div>
//     </div>
// )
// }
// export default Note
// const Note=({a,b,id,key,editItem,select})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <div className="main-note">
//     <div className="note-div">
//     {edit?(
//         <>
//     <h2>
        
//     <input type="text" placeholder={a}
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2> 
        
//     <input type="text" placeholder={b}
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
//     ):(
//         <>
//         <h2> {a} </h2>
//         <h2> {b} </h2>
//         </>
//     )}
//     {!edit?(
//     <button className="btn"
//     onClick={()=>setEdit(true)}><EditIcon style={{background:"transparent"}}/></button>
//     ):(
//     <button className="btn"
//     onClick={saveItem}>
//     <SaveAltIcon style={{background:"transparent"}}/>
//     </button>
//     )}
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}><DeleteIcon style={{background:"transparent"}}/></button>
//     </div>
//     </div>
//     )
// }
// export default Note
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <div className="main-note">
//     <div className="note-div">
//     {edit?(
//     <>
//     <h2>
//     <input placeholder="edit item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
//     <input placeholder="edit item"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
//     ):(
//     <>
//     <h2> {a} </h2>
//     <h2> {b} </h2>
//     </>
//     )}
//     {!edit?(
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </button>
//     ):(
//     <button className="btn"
//     onClick={saveItem}>
//     <SaveAltIcon/>
//     </button>
//     )}
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </button>
//     </div>
//     </div>
//     )
// }
// export default Note
// const Note=({a,b,editItem,select,id})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
//         {edit?(
//             <>
//         <h2>
//         <input type="text" placeholder="Edit Item"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//         </h2>
//         <h2>
//         <input type="text" placeholder="Edit Item"
//         onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//         </h2>
//         </>
//         ):(
//             <>
//         <h2> {a} </h2>
//         <h2> {b} </h2>
//         </>
//         )}
//         {!edit?(
//         <>
//         <button className="btn" onClick={()=>setEdit(true)}><EditIcon/></button>
//         </>
//         ):(
//         <button className="btn" onClick={saveItem}><SaveAltIcon/></button>
//         )}
//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}><DeleteIcon/></button>
//         </div>
//         </div>
//     )
// }
// export default Note
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
// return(
//     <>
//     <div className="main-note">
//         <div className="note-div">
//     {edit?(
//         <>
//         <h2>
//         <input placeholder="edit item"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//         </h2>
//         <h2>
//         <input placeholder="edit item"
//         onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//         </h2>
//         </>
//     ):(
//     <>
//     <h2> {a} </h2>
//     <h2> {b} </h2>
//     </>
//     )}
//     {!edit?(
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </button>
//     ):(
//     <button className="btn"
//     onClick={saveItem}>
//     <SaveAltIcon/>
//     </button>
//     )}
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </button>
//         </div>
//         </div>
//     </>
// )
// }
// export default Note
// const Note=({a,b,id,key,select,editItem})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//         })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        

//        <>
//     {edit?(
//         <>
//     <h2>
//     <input placeholder="edit item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
//     <input placeholder="edit item"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
//     ):(
//         <>
//     <h2> {a} </h2>  <h2> {b} </h2>
//     </>
//     )}
//        </>
// {!edit?(
//  <button className="btn"
//  onClick={()=>setEdit(true)}>
//  <EditIcon/>
//  </button>
// ):(
// <button className="btn"
// onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
// )}
//     <>

//     </>


   



// <button className="btn"
// onClick={()=>{
//     select(id)
// }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//         title:"",note:""
//         })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
// {edit?(
//        <>
//     <h2>
//     <input placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
//     <input placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//        </>
// ):(
//     <>
//     <h2> {a} </h2>  <h2> {b} </h2>
//     </>
// )}
// {!edit?(
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </button>
// ):(
// <button className="btn"
// onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
// )}
// <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
// const Note=({a,b,id,select,editItem})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     editItem(id,fields)
//     setEdit(false)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
// {edit?(
//     <>
//     <h2> 
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>    
//     </h2>
//     <h2> 
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>    
//     </h2>
//     </>
// ):(
//     <>
//     <h2> {a} </h2>
//     <h2> {b} </h2>
//     </>
// )}
    
// {!edit?(
//     <>
//  <button className="btn"
//  onClick={()=>setEdit(true)}>
//  <EditIcon/>
//  </button>
//  </>
// ):(
// <button className="btn"
// onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
// )}
 




//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
// const Note=({a,b,select,id,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//         title:"",note:""
//         })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
//     {edit?(
//         <>
//     <h2>
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>  
//     <h2>
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>  
//         </>
//     ):(
//         <>
//         <h2> {a} </h2> <h2> {b} </h2>
//         </>
//     )}
    
// {!edit?(
//  <>
//  <button className="btn"
//  onClick={()=>setEdit(true)}>
//  <EditIcon/>
//  </button>
//  </>
// ):(
// <button className="btn"
// onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
// )}

//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
// const Note=({a,b,id,key,select,editItem})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const [edit,setEdit]=useState(false)
//         const saveItem=()=>{
//         setEdit(false)
//         editItem(id,fields)
//         }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        

//     <>
    
//     {edit?(
//         <>
//     <h2>
//     <input placeholder="Edit Item"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>

// <h2>
// <input placeholder="Edit Item"
// onChange={(e)=>setFields({...fields,note:e.target.value})}/>
// </h2>
// </>
//     ):(
//         <>
//         <h2> {a} </h2>
//         <h2> {b} </h2>
//         </>
//     )}
        
//     {!edit?(
//     <>
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </button>
//     </>
//     ):(
//         <button className="btn"
//         onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
//     )}
    



    
    
        
    

//     </>

//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//         title:"",note:""
//         })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
   
//     return(
//         <div className="main-note">
//         <div className="note-div">
        

//     <>
    
//     {edit?(
//         <>
//     <h2>
//     <input placeholder="Edit Item?"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
//     <input placeholder="Edit Item?"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
//     ):(
//         <>
//         <h2> {a} </h2>  
//         <h2> {b} </h2>
//         </>
//     )}

//     {!edit?(
//     <>
//     <button className="btn"
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </button>
//     </>
//     ):(
//         <button className="btn"
//         onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
//     )}

//     </>

//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
// const Note=({text,select,id,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const [line,setLine]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     const cutIt=()=>{
//     setLine(true)
//     }
//     return(
//     <>
//     <div style={{display:"flex"}}>
//     <span
//     onDoubleClick={()=>{
//         select(id)
//     }}
//     onClick={cutIt}>
//     <DeleteIcon className="dlt-icon"/>
//     </span>
// {edit?(
// <li>
// <input onChange={(e)=>setFields(e.target.value)}/>
// </li>
// ):(
//     <li style={{textDecoration:line? "line-through":""}}>{text}</li>
// )}
// {!edit?(
//     <>
//     <span
//     onClick={()=>setEdit(true)}>
//     <EditIcon/>
//     </span>
//     </>
// ):(
//     <span
//     onClick={saveItem}>
//     <SaveAltIcon/>
//     </span>
// )}
    
    
//     </div>
//     </>
//     )
// }
// export default Note
// const Note=({a,b,id,key,select,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
// //     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
// {edit?(
//     <>
//     <h2>
    
//     <input type="text" placeholder="Edit Item?"
//     onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//     </h2>
//     <h2>
    
//     <input type="text" placeholder="Edit Item?"
//     onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//     </h2>
//     </>
// ):(
//     <>
//     <h2> {a} </h2>
//     <h2> {b} </h2>
//     </>
// )}
            
//        {!edit?(
//          <>
//          <button className="btn"
//          onClick={()=>setEdit(true)}>
//          <EditIcon/>
//          </button>
//          </>
//        ):(
// <button className="btn"
// onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
//        )} 
        
//         <button className="btn"
//         onClick={()=>{
//         select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
//         {edit?(
//             <>
//             <h2>{a}
//             <input type="text" placeholder="Edit Item?"
//             onChange={(e)=>setFields({...fields,title:e.target.value})}/>
//             </h2>
//             <h2>{b}
//             <input type="text" placeholder="Save Item?"
//             onChange={(e)=>setFields({...fields,note:e.target.value})}/>
//             </h2>
//             </>
//         ):(
//             <>
//             <h2> {a} </h2>
//             <h2> {b} </h2>
//             </>
//         )}
        
//         {!edit?(
//             <>
//             <button className="btn"
//             onClick={()=>setEdit(true)}>
//             <EditIcon/>
//             </button>
//             </>
//         ):(
//             <button className="btn"
//             onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
//         )}
        
        
            
        
            
        
//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//         <div className="main-note">
//         <div className="note-div">
        
//         {edit?(
//             <>
//         <h2> {a}
//         <input type="text" placeholder="Edit Item"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}/>  
//         </h2>
//         <h2> {b}
//         <input type="text" placeholder="Edit Item"
//         onChange={(e)=>setFields({...fields,note:e.target.value})}/>  
//         </h2>
//         </>
//         ):(
//         <>
//         <h2>{a}</h2>
//         <h2>{b}</h2>
//         </>
//         )}
//         {!edit?(
//             <>
//             <button className="btn"
//             onClick={()=>setEdit(true)}>
//             <EditIcon/>
//             </button>
//             </>
//         ):(
//             <button className="btn"
//             onClick={saveItem}>
//             <SaveAltIcon/>
//             </button>
//         )}
//         <button className="btn"
//         onClick={()=>{
//             select(id)
//         }}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
//         </div>
//         )
// }
// export default Note
// const Note=({a,b,id,select})=>{
//     return(
//     <div className="main-note">
//     <div className="note-div">
//     <br/>
//     <h2>{a}</h2>
//     <h2> {b} </h2>
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon className="dlt-icon"/>
//     </button>
//     </div>
//     </div>
//     )
//     }
// export default Note
{/* //     const [data,setData]=useState()
//     const deleteItem=(id)=>{
//     return(
//     setData((val)=>{
//     return(
//         val.filter((item,index)=>{
//         return(
//             index!==id
//         )
//         })
//     )
//     })
//     )
//     }
//     return(
//     <>
//     <div className="main-note">
//         <div className="note-div">
//             <br/>
//         <h2> {a} </h2>
        
//         <p> {b} </p>
//         <button className="btn"
//         onClick={deleteItem()}>
//         <DeleteIcon className="dlt-icon"/>
//         </button>
//         </div>
        {/* <div className="note-div">
    <input type="text" placeholder="Title" autoComplete="off"
    style={{marginTop:"20%"}}/>
        <textarea rows="" cols="">Write A Note....</textarea>
        <span style={{display:"flex", justifyContent:"center",
    padding:"10px"}}>
        <AddIcon className="add-icon"/>
        </span>
    </div> */}
    
    {/* </> */}
{/* //     )
// }
// export default Note */} 