import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Save } from "@mui/icons-material";
const ToDoList = ({ a, b, deleteItem, id, editItem }) => {
    const [fields, setFields] = useState({
        title: "", note: ""
    })
    const [edit, setEdit] = useState(false)
    const saveItem = () => {
        setEdit(false)
        editItem(id, fields)
    }
    return (
        <>
            <div className="first">
                <div className="first-div">
                    {edit ? (
                        <>
                            <input placeholder={a}
                                onChange={(e) => setFields({ ...fields, title: e.target.value })} />
                            <input placeholder={b}
                                onChange={(e) => setFields({ ...fields, note: e.target.value })} />
                        </>
                    ) : (
                        <>
                            <h1>{a}</h1>
                            <h1>{b}</h1>
                        </>
                    )}
                    {!edit ? (
                        <button className="btn"
                            onClick={() => setEdit(true)}>Edit</button>
                    ) : (
                        <button className="btn"
                            onClick={saveItem}>Save</button>
                    )}
                    <button className="btn mt-1"
                        onClick={() => {
                            deleteItem(id)
                        }}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default ToDoList
// const ToDoList = ({ deleteItem, item, id, editItem }) => {
//     const [fields, setFields] = useState()
//     const [edit, setEdit] = useState(false)
//     const saveItem = () => {
//         setEdit(false)
//         editItem(id, fields)
//     }
//     return (
//         <>
//             {edit ? (
//                 <li className="pt-2 ">
//                     <input type="text" placeholder={item}
//                         onChange={(e) => setFields(e.target.value)} />
//                 </li>
//             ) : (
//                 <li className="mt-3">{item}</li>
//             )}
//             {!edit ? (
//                 <><li className="pt-2 pb-2">
//                     <button className="btn"
//                         onClick={() => setEdit(true)}>Edit</button>
//                 </li>
//                 </>
//             ) : (
//                 <li className="pt-2 pb-2">
//                     <button className="btn"
//                         onClick={saveItem}>Save</button>
//                 </li>
//             )}
//             <li className="pt-2 pb-2">
//                 <button className="btn"
//                     onClick={() => {
//                         deleteItem(id)
//                     }}>Delete</button>
//             </li>
//         </>
//     )
// }
// export default ToDoList
// const ToDoList = ({ a, b, id, editItem, deleteItem }) => {
//     const [fields, setFields] = useState({
//         title: "", note: ""
//     })
//     const [edit, setEdit] = useState(false)
//     const saveItem = () => {
//         setEdit(false)
//         editItem(id, fields)
//     }
//     return (
//         <>
//             <div className="second">
//                 <div className="second-div">
//                     <br />

//                     {edit ? (
//                         <>
//                             <h1>
//                                 <input type="text" placeholder={a}
//                                     onChange={(e) => setFields({ ...fields, title: e.target.value })} />
//                             </h1>
//                             <h1>
//                                 <input type="text" placeholder={b}
//                                     onChange={(e) => setFields({ ...fields, note: e.target.value })} />
//                             </h1>
//                         </>
//                     ) : (
//                         <>
//                             <h1>{a}</h1>
//                             <h1>{b}</h1>
//                         </>
//                     )}
//                     <br />
//                     {
//                         !edit ? (
//                             <button className="btn"
//                                 onClick={() => setEdit(true)}>Edit</button>
//                         ) : (
//                             <button className="btn"
//                                 onClick={saveItem}>Save</button>
//                         )
//                     }
//                     <button className="btn mt-2"
//                         onClick={() => {
//                             deleteItem(id)
//                         }}>Delete</button>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default ToDoList
// const ToDoList = ({ deleteItem, deleteAll, editItem, id, item }) => {
//     const [fields, setFields] = useState()
//     const [edit, setEdit] = useState(false)
//     const saveItem = () => {
//         setEdit(false)
//         editItem(id, fields)
//     }
//     return (
//         <>
//             {edit ? (
//                 <li>
//                     <input placeholder={item}
//                         onChange={(e) => setFields(e.target.value)} />
//                 </li>
//             ) : (
//                 <li>{item}</li>
//             )}
//             {!edit ? (
//                 <button className="btn-success"
//                     onClick={() => setEdit(true)}>Edit</button>
//             ) : (
//                 <button className="btn-success"
//                     onClick={saveItem}>Save</button>
//             )}
//             <button className="btn-danger"
//                 onClick={() => {
//                     deleteItem(id)
//                 }}>Delete</button>
//         </>
//     )
// }
// export default ToDoList
// const ToDoList = ({ text, select, selectAll, id, editItem }) => {
//     const [fields, setFields] = useState()
//     const [edit, setEdit] = useState(false)
//     const saveItem = () => {
//         setEdit(false)
//         editItem(id, fields)
//     }
//     return (

//         <>
//             {edit ? (
//                 <li>
//                     <input onChange={(e) => setFields(e.target.value)} />
//                 </li>
//             ) : (
//                 <li> {text} </li>
//             )}
//             {!edit ? (
//                 <button className="btn-success"
//                     onClick={() => setEdit(true)}>Edit</button>
//             ) : (
//                 <button className="btn-success"
//                     onClick={saveItem}>Save</button>
//             )}
//             <button
//                 onClick={() => {
//                     selectAll()
//                 }}>DeleteAll</button>


//             <button className="btn-close"
//                 onClick={() => {
//                     select(id)
//                 }}>Delete</button>
//         </>
//     )
// }

// export default ToDoList

// const ToDoList=(xt,select,id,editItem})=>{
//     const [fields,setFields]=useState()
//     const [edit,s]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <div className="todo-style">
//     {edit?(
//     <li>
//     <input placeholder={text}
//     onChange={(e)=>setFields(e.target.value)}/>
//     </li>
//     ):(
//     <li> {text} </li>
//     )}
//     {!edit?(
//     <button className="btn" onClick={()=>setEdit(true)}>Edit</button>
//     ):(
//     <button className="btn" onClick={saveItem}>Save</button>
//     )}
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}>Delete</button>
//     </div>
//     )
// }
// export default ToDoList
// const ToDoList=({text,select,id,editItem})=>{
//     const [fields,setFields]=useState()
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <div className="todo-style">
//     <span onClick={()=>{
//         select(id)
//     }}><DeleteIcon/></span>
//     {!edit?(
//     <span onClick={()=>setEdit(true)}><EditIcon/></span>
//     ):(
//     <span onClick={saveItem}><SaveIcon/></span>
//     )}
//     {edit?(
//     <li>
//     <input type="text" placeholder={text}
//     onChange={(e)=>setFields(e.target.value)}/>
//     </li>
//     ):(
//     <li> {text} </li>
//     )}
//     </div>
//     )
// }
// export default ToDoList
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <>
//     <div className="todo-style">
//     <span
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </span>
//     {!edit?(
//     <span onClick={()=>setEdit(true)}><EditIcon/>
//     </span>
//     ):(
//     <span
//     onClick={saveItem}><SaveIcon/></span>
//     )}

//     {edit?(
//     <li>
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields(e.target.value)}/>
//     </li>
//     ):(
//     <li> {text} </li>
//     )}

//     </div>
//     </>
//     )
// }
// export default ToDoList
// const ToDoList=({text,select,editItem,id})=>{
//     const [fields,setFields]=useState()
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
// return(
//     <div className="todo-style">
//     <span
//     onClick={()=>{
//     select(id)
//     }}><DeleteIcon/></span>
//     {edit?(
//     <li>
//     <input type="text" placeholder="edit item"
//     onChange={(e)=>setFields(e.target.value)}/>
//     </li>
//     ):(
//     <li>{text}</li>
//     )}
//     {!edit?(
//     <span
//     onClick={()=>setEdit(true)}><EditIcon/></span>
//     ):(
//     <span
//     onClick={saveItem}><SaveIcon/></span>
//     )}
//     </div>
// )
// }
// export default ToDoList
// const ToDoList=({select,text,id,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
// return(
//     <div className="todo-style">
//     {edit?(
//     <li> <input placeholder="Edit Item"
//     onChange={(e)=>setFields(e.target.value)}/> </li>
//     ):(
//         <li> {text} </li>
//     )}
//     {!edit?(
//     <span
//     onClick={()=>setEdit(true)}><EditIcon/></span>
//     ):(
//     <span
//     onClick={saveItem}><SaveIcon/></span>
//     )}
//      <span
//     onClick={()=>{
//         select(id)
//     }}><DeleteIcon/></span> 
//     </div>
// )
// }
// const ToDoList=({text,select,editItem,id})=>{
//     const [fields,setFields]=useState()
//     const [edit,setEdit]=useState(false)
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <>
//     <div className="todo-style">
//     <button className="btn"
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </button>
//     {edit?(
//         <li>
//         <input placeholder="Edit Item"
//         onChange={(e)=>setFields(e.target.value)}/>
//         </li>
//     ):(
//         <li> {text} </li>
//     )}
//     {!edit?(
//         <button className="btn"
//         onClick={()=>setEdit(true)}>
//         <EditIcon/>
//         </button>
//     ):(
//         <button className="btn"
//         onClick={saveItem}>
//         <SaveIcon/>
//         </button>
//     )}
//     </div>
//     </>
//     )
// }
// export default ToDoList
// const ToDoList=({text,id,key,select,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <>
//    <div className="todo-style">
//    <span
//     onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </span>
//     {!edit?(
//     <span
//     onClick={()=>setEdit(true)}>
//         <EditIcon/>
//     </span>
//     ):(
//         <span
//         onClick={saveItem}>
//             <SaveIcon/>
//         </span>
//     )}
//     {edit?(
//     <li>
//     <input type="text" placeholder="Edit Item"
//     onChange={(e)=>setFields(e.target.value)}/>
//     </li>
//     ):(
//         <li> {text} </li>
//     )}

//    </div>
//     </>
//     )
// }
// export default ToDoList
// const ToDoList=({select,text,id,key,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
//     return(
//     <div className="todo-style">
//         <span
//     onClick={()=>{select(id)}}><DeleteIcon/></span>
//         {!edit?(
//         <span
//         onClick={()=>setEdit(true)}> <EditIcon/> </span>
//     ):(
//         <span
//         onClick={saveItem}> <SaveIcon/> </span>
//     )}
//     {edit?(
//         <li>
//             <input type="text" placeholder="Edit Item"
//             onChange={(e)=>setFields(e.target.value)}/>
//         </li>
//     ):(
//         <li> {text} </li>
//     )}

//     {/* 
//     <li> {text} </li> */}
//     </div>
//     )
// }
// export default ToDoList
// const ToDoList=({text,id,key,select,editItem})=>{
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
// return(
// <>
// <div className="todo-style">
// <span onClick={()=>{
//         select(id)
//     }}>
//     <DeleteIcon/>
//     </span>
// {!edit?(
//         <span
//         onClick={()=>setEdit(true)}>
//         <EditIcon/>
//         </span>
//     ):(
//         <span
//         onClick={saveItem}>
//         <SaveIcon/>
//         </span>
//     )}
//     {edit?(
//         <li>
//         <input type="text" placeholder="Edit Item"
//         onChange={(e)=>setFields(e.target.value)}/>
//         </li>
//     ):(
//         <li>{text}</li>
//     )}

//     {/* 
//     <span>
//     <EditIcon/>
//     </span>
//     <li> {text} </li> */}
// </div>
// </>
// )
// }
// export default ToDoList
// const ToDoList=({text,id,key,select,editItem})=>{
//     const [line,setLine]=useState(false)
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const cutIt=()=>{
//     setLine(true)
//     }
//     const saveItem=()=>{
//     setEdit(false)
//     editItem(id,fields)
//     }
// return(
// <>
// <div className="todo-style">
// <span onClick={cutIt}
// onDoubleClick={()=>{
//     select(id)
// }}>
// <DeleteIcon className="dlt-icon"/>
// </span>
// {!edit?(
//     <>
//     <span
//     onClick={()=>setEdit(true)}>
//     <EditIcon className="edit-icon"/>
//     </span>
//     </>
// ):(
//     <span onClick={saveItem}>
//         <SaveIcon className="save-icon"/>
//     </span>
// )}
// {edit?(
//     <li><input type="text" placeholder="Edit Any Item" onChange={(e)=>setFields(e.target.value)}/></li>
// ):(
//     <li style={{textDecoration:line?"line-through":"none"}}>{text}</li>
// )}

// {/* <li style={{textDecoration:line?"line-through":"none"}}>{text}</li> */}
// </div>
// </>
// )
// }
// export default ToDoList
//     const [fields,setFields]=useState()
//     const [line,setLine]=useState(false)
//     const [edit,setEdit]=useState(false)
//     const cutIt=()=>{
//     setLine(true)
//     }
//     const saveItem=()=>{
//     editItem(id,fields)
//     setEdit(false)
//     }
// return(
// <>
// <div className="todo-style">
// <span onClick={cutIt}
// onDoubleClick={()=>{
//     select(id)
// }}>
// <DeleteIcon/>
// </span>
// {!edit?(
//     <>
// <span
// onClick={()=>setEdit(true)}>
//     <EditIcon className="edit-icon"/>
// </span>
//     </>
// ):(
//     <span
//     onClick={saveItem}>
//         <SaveIcon className="save-icon"/>
//     </span>
// )}
// {edit?(
//     <>
//     <li><input onChange={(e)=>setFields(e.target.value)}/></li>
//     </>
// ):(
//     <>
//     <li style={{textDecoration:line?"line-through":"none"}}>{text}</li>
//     </>
// )}


// {/* <li style={{textDecoration:line? "line-through" :"none"}}> {text} </li> */}

// </div>
// </>
// )
// }
// export default ToDoList
//     const [line,setLine]=useState(false)
//     const [edit,setEdit]=useState(false)
//     const [fields,setFields]=useState()
//     const cutIt=()=>{
//     setLine(true)
//     }
//     const inputEvents=(event)=>{
//     setFields(event.target.value)
//     }
//     const saveItem=()=>{
//     editItem(id,fields)
//     setEdit(false)
//     }
//     return(
//     <div className="todo-style">
//     <span onDoubleClick={()=>{
//         select(id)
//     }}
//     onClick={cutIt}>
//     <DeleteIcon className="dlt-icon"/>
//     </span>
//     {/* <li style={{textDecoration: line ? "line-through" :"none"}}> {text} </li> */}
//     {!edit?(
//     <>
//     <span
//     onClick={()=>setEdit(true)}>
//     <EditIcon className="edit-icon"/>
//     </span>
//     </>
//     ):(
//     <span onClick={saveItem}>
//     <SaveIcon className="save-icon"/>
//     </span>  
//     )}
//     {edit?(
//     <li><input type="text" placeholder="Add Any Items"
//     onChange={inputEvents}/></li>
//     ):(
//     <li style={{textDecoration: line ? "line-through" :"none"}}> {text} </li> 
//     )}
//     </div>
//     )
// }
// export default ToDoList
// const ToDoList=({text,select,id,editItem})=>{
//     const [line,setLine]=useState(false)
//     const [fields,setFields]=useState()
//     const [edit,setEdit]=useState(false)
//     const inputEvents=(event)=>{
//         setFields(event.target.value)
//     }
//     const cutIt=()=>{
//         setLine(true)
//     }
//     const saveItem=()=>{
//         editItem(id,fields)
//         setEdit(false)
//     }
//     return(
//     <div className="todo-style">
//     <span onDoubleClick={()=>{
//         select(id)
//     }}
//     onClick={cutIt}>
//     <DeleteIcon />
//     </span>
//     {edit?(
//         // <li style={{textDecoration : line ? "line-through" : "none" }}> {text} </li>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvents}/>
//     ):(
//         <li style={{textDecoration : line?  "line-through" :"none"}}> {text} </li>
//     )}
//     {!edit?(
//         <>
//         <button className="btn-success"
//         onClick={()=>setEdit(true)}>Edit</button>
//         </>
//     ):(
//         <button className="btn-success"
//         onClick={saveItem}>Save</button>
//     )}
//     {/* <li style={{textDecoration : line ? "line-through" : "none" }}> {text} </li> */}
//     </div> 
//     )
// }
// export default ToDoList
// const ToDoList=({text,select,id,key})=>{
//     const [line,setLine]=useState(false)
//     const cutIt=()=>{
//         setLine(true)
//     }
//     return(
//     <div className="todo-style">
//      <span onClick={cutIt}
//      onDoubleClick={()=>{
//          select(id)
//      }}>
//     <DeleteIcon className="dlt-icon"/>
//     </span>
//     <li style={{textDecoration  : line ?  "line-through" : "none"}}> {text} </li>
//     </div> 
//     )
// }
// export default ToDoList
// const ToDoList=({text,id,key,select})=>{
//     const [line,setLine]=useState(false)
//     const cutIt=()=>{
//         setLine(true)
//     }
//     return(
//     <div className="todo-style">
//         <span onClick={cutIt}
//         onDoubleClick={()=>{
//             select(id)
//         }}>
//     <DeleteIcon className="dlt-icon" />
//     </span>
//     <li style={{textDecoration : line ?  "line-through" : "none" }}> {text} </li>
//     </div> 
//     )
// }
// export default ToDoList
// const ToDoList=({id,key,select,text})=>{
//     const [line,setLine]=useState(false)
//     const cutIt=()=>{
//         setLine(true)
//     }
//     return(
//     <>
//     <div className="todo-style">
//     <span onClick={cutIt}>
//     <DeleteIcon className="dlt-icon"/>
//     </span>
//     <li style={{textDecoration: line ?  "line-through" : "none" }}>{text}</li>
//     </div>
//     </>
//     )
// }
// export default ToDoList
//     return(
//     <div className="todo-style">
//     <li>{text}</li>
//     <button className="btn-close"
//     onClick={()=>{
//         select(id)
//     }}></button>
//     </div>
//     )
// }
// export default ToDoList
// const ToDoList=({id,key,select,text})=>{
//     return(
//     <div className="todo-style">
//     <button className="btn-close"
//     onClick={()=>{
//         select(id)
//     }}></button>
//     <li>{text}</li>
//     </div>
//     )
// }
// export default ToDoList
// const ToDoList=({id,key,select,text,editItem})=>{
// }
//     const [fields,setFields]=useState({
//         name:""
//     })
//     const [edit,setEdit]=useState(false)

//     const saveItem=()=>{
//         setEdit(false)
//         editItem(id,fields)
//     }
//     return(
//         <>
//         <div className="todo-style">
//     <button className="btn-close"
//     onClick={()=>{
//         select(id)
//     }}></button>
//     {/* <li>{text}</li> */}
//     {edit?(
//         <li><input onChange={(e)=>setFields({...fields,name:e.target.value})}/></li>
//     ):(
//         <li>{text}</li>
//     )}
//     {!edit?(
//         <>
//         <button className="btn-success"
//         onClick={()=>setEdit(true)}>Edit</button>
//         </>
//     ):(
//         <>
//         <button className="btn-success"
//         onClick={saveItem}>Save</button>
//         </>
//     )}    
//         </div>
//         </>
//     )
// }
// const ToDoList=({id,key,select,text})=>{
//     return(
//         <>
//         <div className="todo-style">
//         <button className="btn-success"
//         onClick={()=>{
//             select(id)
//         }}></button>
//         <li>{text}</li>
//         </div>
//         </>
//     )
// }
// export default ToDoList
//     return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)
//     }}></button>
//     <li>{props.text}</li>
//     </div>
//     </>
//     )
// }
// export default ToDoList
//     onClick={()=>{
//         props.select(props.id)
//     }}></button>    
//     <li>{props.text}</li>
//     </div>
//     </>
//     )
// }
// export default  ToDoList
//     return(
//         <>
//         <div className="todo-style">
//         <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//         onClick={()=>{
//             props.select(props.id)
//         }}></button>
//         <li>{props.text}</li>
//         </div>
//         </>
//     )
// }
// export default ToDoList
// import React from "react";
// const ToDoList=(props)=>{
//     return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//     onClick={()=>{
//     props.select(props.id)
//     }}></button>
//     <li>{props.text}</li>
//     </div>
//     </>
//     )
// }
// export default ToDoList
// import React from "react";
// const ToDoList=(props)=>{
//     return(
//         <div className="todo-style">
//     <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)    
//         }}></button>
//         <li>{props.text}</li>
//         </div> 
//     )
// }
// export default ToDoList
//     return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)
//     }}></button>
//     <li>{props.text}</li>
//     </div>
//     </>
//     )
// }
// export default ToDoList
//     return(
//         <>
//         <div className="todo-style">
//         <button style={{height:"35px"}}  type="button" class="red-button" aria-label="Close"
//         onClick={()=>{
//             props.select(props.id)
//         }}></button>
//         <li>{props.text}</li>
//         </div>
//         </>
//     )
// }
// export default ToDoList
// import React from "react";
// const ToDoList=(props)=>{
//     return(
//         <>
//         <div className="todo-style">
//         <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//         onClick={()=>{
//             props.select(props.id)
//         }}><span aria-hidden="true">&times;</span></button>
//         <li>{props.text}</li>
//         </div>
//         </>
//     )
// }
// export default ToDoList
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)
//     }}><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default ToDoList
// import React from "react";
// const ToDoList=(props)=>{
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//     props.select(props.id)
//     }}><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default ToDoList
// const ToDoList=(props)=>{
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)
//     }}><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default ToDoList
// const ToDoList=(props)=>{
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//         props.select(props.id)
//     }}><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default ToDoList
// const ToDoList=(props)=>{
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//     props.select(props.id)
//     }}><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default  ToDoList
// import React from "react";
// const ToDoList=(props)=>{
// return(
// <>
// <div className="todo-style">
// <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
// onClick={()=>{
//     props.select(props.id)
// }}>   <span aria-hidden="true">&times;</span></button>
// <li>{props.text}</li>
// </div>
// </>
// )
// }
// export default ToDoList
// import React from "react";
// const ToDoList=(props)=>{
//     return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}}  type="button" class="close" aria-label="Close"
//     onClick={()=>{
//     props.select(props.id)
//     }}>
//   <span aria-hidden="true">&times;</span>
// </button>
//     <li>{props.a}</li>
//     </div>
//     </>
//     )
// }
// export default ToDoList
// import React from "react"
// const ToDoList=(props)=>{
//     return(
//         <>
//         <div className="todo-style">
//         <button style={{height:"35px", color:"black"}} type="button" className="close" aria-label="Close"
//         onClick={()=>{
//             props.onSelect(props.id)
//         }}><span aria-hidden="true">&times;</span></button>    
//         <li>{props.a}</li>
//         </div>
//         </>
//     )
// }
// export default ToDoList
// import React from "react"
// const ToDoList=(props)=>{
// return(
//     <>
//     <div className="todo-style">
//     <button style={{height:"35px", color:"black"}} type="button" className="close" aria-label="Close"
//     onClick={()=>{
//     props.onSelect(props.id)
//     }} ><span aria-hidden="true">&times;</span></button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
    //     return(
//         <>
//         <div className="todo-style">
//         <button style={{height:"35px"}} type="button" className="close" aria-label="Close"
//         onClick={()=>{
//         props.onSelect(props.id)
//         }}>
//  <span aria-hidden="true">&times;</span>
//         </button>
//             <li>{props.text}</li>
//             </div>
//         </>
//     )

// export default ToDoList
// const ToDoList=(props)=>{

//     return(
//     <>
//     <div className="todo-style">
    // <button style={{height:"35px"}} type="button" className="close" aria-label="Close"
//     onClick={()=>{
//         props.onSelect(props.id)
//     }}>
//   <span aria-hidden="true">&times;</span>
// </button>
//     <li>{props.text}</li>
//     </div>
//     </>
// )
// }
// export default ToDoList