import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Note from "./Note";
import { Expand, SettingsCell, SettingsSystemDaydream } from "@mui/icons-material";
import capitalize from "@mui/utils/capitalize";
import { render } from "react-dom";
const CreateNote=({render,setOne,setTwo})=>{
    const [fields,setFields]=useState({
        title:"",note:""
    })
    const [text,setText]=useState()
    const addItems=()=>{
        setFields({
            title:"",note:""
        })
        render(fields)
    }
    const onSearch=()=>{
    const updatedData=[...setOne].filter((item)=>item.title==text)
    setTwo(updatedData)
    }
    return(
        <>
        <div className="search-center">
        <div className="search-div">    
        <input type="search" placeholder="Search Via Title"
        onChange={(e)=>setText(e.target.value)}/>



        <button className="btn" style={{margin:"0%"}}
        onClick={onSearch}>
        <SearchIcon style={{background:"transparent"}}/>
        </button>

        </div>
        </div>


        <div className="first-div">
        <form className="first-form">

        
        <input type="text"
        placeholder="Title" autoComplete="off"
        onChange={(e)=>setFields({...fields,title:e.target.value})}
        value={fields.title}/>
        

        
        <textarea rows="" cols="" placeholder="Write A Note..."
        onChange={(e)=>setFields({...fields,note:e.target.value})}
        value={fields.note}/>
        
        
        
        
        <button className="btn" style={{display:"flex", justifyContent:"center",
        padding:"10px"}}
        onClick={addItems}>
        <AddIcon className="add-icon"/>
        </button>
     
     
     <button className="btn">Delete All</button>
    
        
        </form>
        
        </div>
        
        </>
    )
}
export default CreateNote
// const CreateNote=({render,setOne,setTwo,selectAll})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(e)=>{
//         e.preventDefault()
//     setFields({
//         title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const Open=()=>{
//     setExpand(true)
//     }
//     const Close=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon style={{background:"transparent"}}/>
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={Close}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={Open}/>
        

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
        
//         {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//      :""}
//      {expand?
//      <button className="btn"
//      onClick={(e)=>{
//          e.preventDefault()
//          selectAll()
//      }}>Delete All</button>
//     :""}
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo,selectAll,select,id})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//         event.preventDefault()
//     setFields({
//         title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const Open=()=>{
//     setExpand(true)
//     }
//     const Close=()=>{
//         setExpand(false)
//         }
    // return(
    //     <>
    //     <div className="search-center">
    //     <div className="search-div">    
    //     <input type="search" placeholder="Search Via Title"
    //     onChange={(e)=>setText(e.target.value)}/>



    //     <button className="btn" style={{margin:"0%"}}
    //     onClick={onSearch}>
    //     <SearchIcon style={{background:"transparent"}}/>
    //     </button>

    //     </div>
    //     </div>


    //     <div className="first-div"
    //     onDoubleClick={Close}>
    //     <form className="first-form">

        
    //     <input type="text"
    //     placeholder="Title" autoComplete="off"
    //     onChange={(e)=>setFields({...fields,title:e.target.value})}
    //     value={fields.title}
    //     onClick={Open}/>
        

    //     {expand?
    //     <textarea rows="" cols="" placeholder="Write A Note..."
    //     onChange={(e)=>setFields({...fields,note:e.target.value})}
    //     value={fields.note}/>
    //     :""}
        
        
    //     {expand?
    //     <button className="btn" style={{display:"flex", justifyContent:"center",
    //     padding:"10px"}}
    //     onClick={addItems}>
    //     <AddIcon className="add-icon"/>
    //     </button>
    //     :""}
    //  {expand?
    //  <button className="btn"
    // onClick={(event)=>{
    //     event.preventDefault()
    //     selectAll(id)
    // }}>Delete All</button>
    //  :""}
        
    //     </form>
        
    //     </div>
        
    //     </>
    // )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//         event.preventDefault()
//     setFields({
//     title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item,index)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//         setExpand(false)
//         }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
        
//         {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//      :""}
     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(e)=>{
//         e.preventDefault()
//         setFields({
//             title:"",note:""
//         })
//         render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title===text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         : ""}
        
        
//         {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//      : ""}
     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//         title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//         {expand?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
        
//         {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//          :""}
     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({title:"",note:""})
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//         setExpand(false)
//         }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div"
//         onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//    {     expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
// :""}
        
        
// {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
// :""}
     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//     title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div">
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}/>
        

        
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>

        
        

//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>

     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//         title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//         event.preventDefault()
//         setFields({
//             title:"",note:""
//         })
//         render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
        
//         {expand?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//         :""}
     
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({render,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//     title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>
        

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
        
//         {expand ?
//         <button className="btn" style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </button>
//         :""}
        
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const [expand,setExpand]=useState(false)
//     const addItems=()=>{
//     setFields({
//     title:"",note:""
//     })
//     render(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//         setExpand(false)
//         }
    // return(
    //     <>
    //     <div className="search-center">
    //     <div className="search-div">    
    //     <input type="search" placeholder="Search Via Title"
    //     onChange={(e)=>setText(e.target.value)}/>



    //     <button className="btn" style={{margin:"0%"}}
    //     onClick={onSearch}>
    //     <SearchIcon />
    //     </button>

    //     </div>
    //     </div>


    //     <div className="first-div" onDoubleClick={bandHoja}>
    //     <form className="first-form">

        
    //     <input type="text"
    //     placeholder="Title" autoComplete="off"
    //     onChange={(e)=>setFields({...fields,title:e.target.value})}
    //     value={fields.title}
    //     onClick={khulJa}/>
        

    //     {expand ?
    //     <textarea rows="" cols="" placeholder="Write A Note..."
    //     onChange={(e)=>setFields({...fields,note:e.target.value})}
    //     value={fields.note}/>
    //     : ""}
        
        
    //     {expand ?
    //     <span style={{display:"flex", justifyContent:"center",
    //     padding:"10px"}}
    //     onClick={addItems}>
    //     <AddIcon className="add-icon"/>
    //     </span>
    //     : ""}
        
    //     </form>
        
    //     </div>
        
    //     </>
    // )
// }
// export default CreateNote
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [expand,setExpand]=useState(false)
//     const [text,setText]=useState()
//     const addItems=()=>{
//     setFields({
//         title:"",note:""
//     })
//     passNote(fields)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//         setExpand(false)
//         }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>



//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>

//         </div>
//         </div>


//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>

//         {expand?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
//         {expand?
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         :""}
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({passNote,setOne,setTwo})=>{
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [text,setText]=useState()
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//         title:"",note:""
//     })
//     passNote(fields)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>


//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>
//         </div>
//         </div>


//         <div className="first-div">
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}/>

        
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
        
        
        
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
     
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
//     const [fields,setFields]=useState({
//     title:"",note:""
//     })
//     const [expand,setExpand]=useState(false)
//     const [text,setText]=useState()
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//         title:"",note:""
//     })
//     passNote(fields)
//     }
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     const onSearch=()=>{
//     const updatedData=[...setOne].filter((item)=>item.title==text)
//     setTwo(updatedData)
//     }
//     return(
//         <>
//         <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>


//         <button className="btn" style={{margin:"0%"}}
//         onClick={onSearch}>
//         <SearchIcon />
//         </button>
//         </div>
//         </div>


//         <div className="first-div"
//         onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})}
//         value={fields.note}/>
//         :""}
        
//         {expand ?
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         :""}
        
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
//     const [fields,setFields]=useState({       
//     title:"",note:""
//     })
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//     title:"",note:""
//     })
//     passNote(fields)
//     }
//     const [expand,setExpand]=useState(false)
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     const [text,setText]=useState()
    
//         const selectTwo=()=>{
//         const updatedData=[...setTwo].filter((item)=>item.title==text)
//         set(updatedData)
//         }
//     return(
//         <>
// <div className="search-center">
//         <div className="search-div">    
//         <input type="search" placeholder="Search Via Title"
//         onChange={(e)=>setText(e.target.value)}/>
//         <button className="btn" style={{margin:"0%"}}
//         onClick={()=>{
//             selectTwo()
//         }}>
//         <SearchIcon />
//         </button>
//         </div>
//         </div>

//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,title:e.target.value})}
//         value={fields.title}
//         onClick={khulJa}/>

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,note:e.target.value})} 
//         value={fields.note}/>
//         :""}
        
//         {expand ?
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         :""}
//         </form>
        
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({passNote})=>{
//     const [fields,setFields]=useState({
//     name:"",email:""
//     })
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//     name:"",email:""
//     })
//     passNote(fields)
//     }
//     const [expand,setExpand]=useState(false)
//     const khulJa=()=>{
//     setExpand(true)
//     }
//     const bandHoja=()=>{
//     setExpand(false)
//     }
//     return(
//         <>
//         <div className="first-div" onDoubleClick={bandHoja}>
//         <form className="first-form">

        
//         <input type="text"
//         placeholder="Title" autoComplete="off"
//         onChange={(e)=>setFields({...fields,name:e.target.value})}
//         value={fields.name}
//         onClick={khulJa}/>

//         {expand ?
//         <textarea rows="" cols="" placeholder="Write A Note..."
//         onChange={(e)=>setFields({...fields,email:e.target.value})}
//         value={fields.email}
//         onClick={khulJa}></textarea>
//         :""}
        
//         {expand ?
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         :""}
//         </form>
//         </div>
        
//         </>
//     )
// }
// export default CreateNote
// const CreateNote=({passNote})=>{
//     const [fields,setFields]=useState({
//     name:"",email:""
//     })
//     const [expand,setExpand]=useState(false)
//     const addItems=(event)=>{
//     event.preventDefault()
//     setFields({
//     name:"",email:""
//     })
//     passNote(fields)
//     }
//     const expandIt=()=>{
//     setExpand(true)
//     }
//     const bTN=()=>{
//         setExpand(false)
//         }
//     return(
//         <>
//         <div className="first-div" onDoubleClick={bTN}>
//         <form className="first-form">

        
//         <input type="text"
//         onChange={(e)=>setFields({...fields,name:e.target.value})}
//         value={fields.name}
//         placeholder="Title" autoComplete="off"
//         onClick={expandIt}/>

//         {expand ?
//         <textarea
//         onChange={(e)=>setFields({...fields,email:e.target.value})}
//         rows="" cols=""
//         value={fields.email}
//         onClick={expandIt}
        
//         placeholder="Write A Note..."></textarea>
//         : ""}
        
//         {expand ?
//         <span style={{display:"flex", justifyContent:"center",
//         padding:"10px"}}
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         : ""}
//         </form>
//         </div>
        
//         </>
//     )
// }
// export default CreateNote