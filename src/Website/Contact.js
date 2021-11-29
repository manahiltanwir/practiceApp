import React from "react";
import StoredData from "./StoredData"
import { useState } from "react";
export default function Contact(){
  const [fields,setFields]=useState({
    name:"",lname:"",email:"",password:"",contact:""
  })
  const [data,setData]=useState([])
  const addItems=(e)=>{
    e.preventDefault()
    if (fields.name.length>0 && fields.lname.length>0 && fields.email.length>0 && fields.password.length>0 && fields.contact.length>0){
      setFields({
        name:"",lname:"",email:"",password:"",contact:""
      })
      setData((val)=>{
        return([...val,fields])
      })
    }
    else{
      alert("Please Enter All The Fields")
    }
  }
  const deleteItem=(id)=>{
    return(
      setData((val)=>{
        return(
          val.filter((item,index)=>{
            return(index!==id)
          })
        )
      })
    )
  }
  const deleteAll=(id)=>{
    return(
      setData((val)=>{
        return(
          val.filter((item,index)=>{
            return(item==id)
          })
        )
      })
    )
  }
  const edit=(i,item)=>{
    const updatedData=[...data]
    updatedData.splice(i,1,item)
    setData(updatedData)
  }
  return(
  <>
  <div className="my-3">
  <h1 className="text-center">Contact Us</h1>
  </div>
  <div className="container contact-div">
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form className="mt-3">
    <div className="form-group">
    <label for="exampleInputPassword1">First Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="First Name"
    onChange={(e)=>setFields({...fields,name:e.target.value})}
    value={fields.name}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Last Name"
    onChange={(e)=>setFields({...fields,lname:e.target.value})}
    value={fields.lname}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e)=>setFields({...fields,email:e.target.value})}
    value={fields.email}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e)=>setFields({...fields,password:e.target.value})}
    value={fields.password}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Contact</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile Number"
    onChange={(e)=>setFields({...fields,contact:e.target.value})}
    value={fields.contact}/>
  </div>
  
  <button type="submit" className="btn btn-primary"
  onClick={addItems}>Submit</button>
</form>
{data.map((item,index)=>{
        return(
          <StoredData
          a={item.name}
          b={item.lname}
          c={item.email}
          d={item.password}
          e={item.contact}
          selectAll={deleteAll}
          select={deleteItem}
          editItem={edit}
          id={index}
          key={index}/>
            )   
      })
  }
  
    </div>
  </div>
  </div>
  
  </>
  )
}

// import React, { useState } from 'react'
// import StoredData from './StoredData'
// const Contact=()=>{
//     const [fields,setFields]=useState({
//         name:"",lastName:"",email:"",phone:"",text:""
//     })
//     const [data,setData]=useState([])
//     const [on,setOn]=useState(false)
//     const addItems=(event)=>{
//         event.preventDefault()
//         setFields({
//         name:"",lastName:"",email:"",phone:"",text:""
//         })
//         setData((val)=>{
//         return([...val,fields])
//         })
//     }
//     const deleteItem=(id)=>{
//     return(
//     setData((val)=>{
//     return(
//     val.filter((item,index)=>{
//     return(
//         index!==id
//     )
//     })
//     )
//     })
//     )
//     }
//     const deleteAll=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//             item==id
//         )
//         })
//         )
//         })
//         )
//         }
//     const edit=(i,item)=>{
//     const updatedData=[...data]
//     updatedData.splice(i,1,item)
//     setData(updatedData)
//     }
//     const open=()=>{
//     setOn(true)
//     }
//     return(
//         <>
//         <div className="my-5">
//             <h1 className="text-center">Contact Us</h1>
//         </div>
//         <div className="container contact_div">
//         <div className="row">
//         <div className="col-md-6 col-10 mx-auto">

//         <form type="submit" 
//         onClick={open}>
//   <div className="form-group">
//     <label for="exampleFormControlInput1">Enter Your Name</label>
//     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"
//     onChange={(e)=>setFields({...fields,name:e.target.value})}/>
//   </div>

//   <div className="form-group">
//     <label for="exampleFormControlInput1">Enter Your Last Name</label>
//     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name"
//     onChange={(e)=>setFields({...fields,lastName:e.target.value})}/>
//   </div>

//   <div className="form-group">
//     <label for="exampleFormControlInput1">Enter Your Email address</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
//     onChange={(e)=>setFields({...fields,email:e.target.value})}/>
//   </div>


//   <div className="form-group">
//     <label for="exampleFormControlInput1">Enter Your Phone Number</label>
//     <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"
//     onChange={(e)=>setFields({...fields,phone:e.target.value})}/>
//   </div>
 
//   <div className="form-group">
//     <label for="exampleFormControlTextarea1">Example textarea</label>
//     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
//     onChange={(e)=>setFields({...fields,text:e.target.value})}></textarea>
//   </div>
//   <div className="col-12 mr-auto">
//   <button className="btn btn-outline-primary " type="submit"
//   onClick={addItems}>Submit form</button>
//   </div>
// </form>

// {on ?
// <div className="delete-all">
// <button className="btn btn-outline-primary" type="submit"
// onClick={deleteAll}>Delete All</button>
// </div>
// : null}

// {data.map((item,index)=>{
// return(
// <StoredData
// a={item.name}
// b={item.lastName}
// c={item.email}
// d={item.phone}
// e={item.text}
// id={index}
// key={index}
// select={deleteItem}
// selectAll={deleteAll}
// editItem={edit}/>
// )
// })}

//         </div>
//         </div>
//         </div>
//         </>
//     )
// }
// export default Contact