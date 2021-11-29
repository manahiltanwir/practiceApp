import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import Home from "./Website/Home";
// import Common from "./Restaurant/Common"
import Common from "./Common";
import GalleryReact from "./Restaurant/GalleryReact"
import Contact from "./Contact";
// import About from "./Website/About"
// import Contact from "./Website/Contact"
import Services from "./Website/Services"
import Menu from "./Menu";
import User from "./User";
// import axios from "axios";
import Error from "./Error"
// import Header from "./GoogleKeep/Header"
import About from "./About"
// import Footer from "./GoogleKeep/Footer"
// import CreateNote from "./GoogleKeep/CreateNote"
// import Note from "./GoogleKeep/Note"
import ToDoList from "./ToDoList"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Search from "./Search";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./Website/Navbar";
import Footer from "./Website/Footer"
import axios from "axios";
const App = () => {
        return (
                <form>
                        <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        )
}
export default App
//         const [fields, setFields] = useState()
//         const [data, setData] = useState([])
//         const onSubmit = () => {
//                 fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karchi&appid=fa5f9a3eb9e74b9a1a31bcef5700bed3`).then((res) => {
//                         setData(res)
//                 })
//         }
//         return (
//                 <>
//                         <input type="text" placeholder="Search"
//                                 onChange={(e) => setFields(e.target.value)} />
//                         <button className="btn" onClick={onSubmit}
//                         >Get Data</button>
//                         {data.map((item, index) => {
//                                 return (
//                                         <div>
//                                                 <h1>{item.type}</h1>
//                                         </div>
//                                 )
//                         })}
//                 </>
//         )
// }
// export default App
//         const Name = () => {
//                 return (
//                         <h1>I Am A Name Page</h1>
//                 )
//         }
//         const Home = () => {
//                 return (
//                         <h1>Welcome To Home Page</h1>
//                 )
//         }
//         return (
//                 <>
//                         <Menu />
//                         <Routes>
//                                 <Route path="/" element={<Home />} />
//                                 <Route path="/about" element={<About />} />
//                                 <Route path="/contact" element={<Contact />} />
//                                 <Route path="/search" element={<Search />} />
//                                 <Route path="/contact/name" element={<Name />} />
//                                 <Route path="/user" element={<User />} />
//                                 <Route path="/user/:fname/:lname" element={<User />} />
//                                 {/* <Route path="*" element={<Error />} /> */}
//                                 <Route path="*" element={<Home />} />
//                         </Routes>
//                 </>
//         )
// }
// export default App
//         const [data, setData] = useState([])
//         const [show, setShow] = useState(false)
//         const onSearch = () => {
//                 setShow(false)
//                 axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//                         setData(res.data)
//                         setShow(true)
//                 })
//         }
//         return (
//                 <>
//                         {!show ? (
//                                 <div className="col-10 mx-auto">
//                                         <button className="btn"
//                                                 onClick={onSearch}>Get Data</button>

//                                         <div className="col-10 mx-auto">
//                                                 <h1>Nothing Found</h1>
//                                         </div>

//                                 </div>
//                         ) : (
//                                 <div className="col-10 mx-auto">
//                                         <button className="btn"
//                                                 onClick={() => setShow(false)}>Fetched Data</button>
//                                         {data.map((i, ind) => {
//                                                 return (
//                                                         <div className="col-10 mx-auto">
//                                                                 <h1>{i.id}</h1>
//                                                                 <h3>{i.title}</h3>
//                                                         </div>
//                                                 )
//                                         })}
//                                 </div>
//                         )}

//                 </>
//         )
// }
// export default App
//         const [data, setData] = useState([])
//         useEffect(() => {
//                 axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//                         setData(res.data)
//                 })
//         })
//         return (
//                 <div className="col-10 mx-auto">
//                         {data.map((item, index) => {
//                                 return (
//                                         <div className="col-10 mx-auto">
//                                                 <h1>{item.id}</h1>
//                                                 <h3>{item.title}</h3>
//                                         </div>
//                                 )
//                         })}
//                 </div>
//         )
// }
// export default App
//         const [data, setData] = useState([])

//         useEffect(() => {
//                 axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//                         setData(res.data)
//                         console.log(res.data)
//                 })
//         })
//         return (
//                 <div className="col-10 mx-auto">
//                         {data.map((item, index) => {
//                                 return (
//                                         <div className="col-10 mx-auto">
//                                                 <h1>{item.id}</h1>
//                                                 <h2>{item.title}</h2>

//                                         </div>
//                                 )
//                         })}
//                 </div>
//         )
// }
// export default App
//         const [data, setData] = useState([])
//         const [show, setShow] = useState(false)
//         const onSearch = () => {
//                 setShow(false)
//                 axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
//                         setData(res.data)
//                         setShow(true)
//                 })
//         }
//         return (
//                 <>
//                         {!show ? (
//                                 <div className="col-10 mx-auto">
//                                         <button className="btn"
//                                                 onClick={onSearch}>Click Me</button>

//                                         <div className="col-10 mx-auto">
//                                                 <h1>Nothing FOund</h1>
//                                                 {/* <h3>{item.title}</h3>
//                                                                 {item.url} */}
//                                         </div>

//                                 </div>
//                         ) : (
//                                 <div className="col-10 mx-auto">
//                                         <button className="btn"
//                                                 onClick={() => setShow(false)}>Fetched</button>

//                                         {data.map((item, index) => {
//                                                 return (
//                                                         <div className="col-10 mx-auto">
//                                                                 <h1>{item.id}</h1>
//                                                                 <h3>{item.title}</h3>
//                                                                 {item.url}
//                                                         </div>
//                                                 )
//                                         })}
//                                 </div>
//                         )}
//                 </>
//         )
// }
// export default App
//         const [data, setData] = useState([])
//         const onSearch = () => {
//         }
//         useEffect(() => {
//                 axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
//                         setData(res.data)
//                 })
//         })
//         return (
//                 <>
//                         {/* <button className="btn"
//                                 onClick={onSearch}>Need Data ?</button> */}
//                         {
//                                 data.map((item, index) => {
//                                         return (
//                                                 <div className="col-10 mx-auto">
//                                                         <h1>{item.id}</h1>
//                                                         <h3 className="text-center">{item.title}</h3>
//                                                         <img src={item.url} />
//                                                 </div>
//                                         )
//                                 })
//                         }
//                 </>
//         )
// }
// export default App
//         const [time, setTime] = useState(0)
//         const [ctime, setCtime] = useState(0)
//         const hello = () => {
//                 setTime(time + 1)
//         }
//         const helloTwo = () => {
//                 setCtime(ctime + 1)
//         }
//         useEffect(() => {
//                 document.title = (`Wah${ctime}`)
//         }, [ctime])
//         // useEffect(() => {
//         //         alert("Ponka")
//         // }, [ctime])
//         return (
//                 <>
//                         <button className="btn mr-5"
//                                 onClick={hello}>You Clicked Me {time} Times</button>
//                         <button className="btn"
//                                 onClick={helloTwo}>You Clicked Me {ctime} Times</button>
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState({
//                 title: "", note: ""
//         })
//         const [data, setData] = useState([])
//         const [expand, setExpand] = useState(false)
//         const [text, setText] = useState()
//         const addItems = () => {
//                 setFields({
//                         title: "", note: ""
//                 })
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//         }
//         const open = () => {
//                 setExpand(true)
//         }
//         const deleteItem = (id) => {
//                 return (
//                         setData((val) => {
//                                 return (
//                                         val.filter((item, index) => {
//                                                 return (
//                                                         index !== id
//                                                 )
//                                         })
//                                 )
//                         })
//                 )
//         }
//         const deleteAll = () => {
//                 return (
//                         setData(() => {
//                                 return ([])
//                         })
//                 )
//         }
//         const onSearch = () => {
//                 const updatedData = [...data].filter((item) => item.title == text)
//                 setData(updatedData)
//                 setText()
//         }
//         const edit = (i, item) => {
//                 const updatedData = [...data]
//                 updatedData.splice(i, 1, item)
//                 setData(updatedData)
//         }
//         return (
//                 <>
//                         <div className="google-app" onDoubleClick={() => setExpand(false)}>
//                                 <div className="first">
//                                         <div className="first-div">
//                                                 <input type="text" placeholder="Search"
//                                                         onChange={(e) => setText(e.target.value)} />
//                                                 <button className="btn"
//                                                         onClick={onSearch}>Search</button>
//                                         </div>
//                                 </div>
//                                 <div className="first">
//                                         <div className="first-div">
//                                                 <input type="text" placeholder="Title"
//                                                         onChange={(e) => setFields({ ...fields, title: e.target.value })}
//                                                         value={fields.title}
//                                                         onClick={open} />
//                                                 {expand ?
//                                                         <input type="text" placeholder="Note"
//                                                                 onChange={(e) => setFields({ ...fields, note: e.target.value })}
//                                                                 value={fields.note} />
//                                                         : null}
//                                                 {expand ?
//                                                         <button className="btn"
//                                                                 onClick={addItems}>Add Item</button>
//                                                         : null}
//                                                 <button className="btn"
//                                                         onClick={deleteAll}>Delete All</button>
//                                         </div>
//                                 </div>
//                                 {data.map((item, index) => {
//                                         return (
//                                                 <ToDoList
//                                                         a={item.title}
//                                                         b={item.note}
//                                                         deleteItem={deleteItem}
//                                                         id={index}
//                                                         editItem={edit} />
//                                         )
//                                 })}
//                         </div>
//                 </>
//         )
// }
// export default App
//         const [count, setCount] = useState(0)
//         const incNum = () => {
//                 setCount(count + 1)
//         }
//         const decNum = () => {
//                 count <= 0 ? alert("Zero Limit Reached") : setCount(count - 1)
//         }
//         return (
//                 <>
//                         <div className="first">
//                                 <div className="first-div">
//                                         <h1> {count} </h1>
//                                         <button className="btn btn-success"
//                                                 onClick={incNum}>Inc</button>
//                                         <button className="btn btn-danger"
//                                                 onClick={decNum}>Dec</button>
//                                 </div>
//                         </div>
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState()
//         const [data, setData] = useState([])
//         const [text, setText] = useState()
//         const addItems = () => {
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//                 setFields("")
//                 setText("")
//         }
//         const deleteItem = (id) => {
//                 return (
//                         setData((val) => {
//                                 return (
//                                         val.filter((item, index) => {
//                                                 return (
//                                                         index !== id
//                                                 )
//                                         })
//                                 )
//                         })
//                 )
//         }
//         const deleteAll = () => {
//                 return (
//                         setData((val) => {
//                                 return ([])
//                         })
//                 )
//         }
//         const edit = (i, item) => {
//                 const updatedData = [...data]
//                 updatedData.splice(i, 1, item)
//                 setData(updatedData)
//         }
//         const onSearch = () => {
//                 const updatedData = [...data].filter((item) => item == text)
//                 setData(updatedData)
//                 setText("")
//         }
//         return (
//                 <>
//                         <div className="first">
//                                 <div className="first-div h-100">
//                                         <input type="text" placeholder="Search"
//                                                 onChange={(e) => setText(e.target.value)} />
//                                         <button
//                                                 onClick={onSearch}>Search</button>
//                                 </div>
//                         </div>
//                         <div className="first">
//                                 <div className="first-div">
//                                         <h1>Todo List</h1>
//                                         <br />
//                                         <input type="text" placeholder="Add Items"
//                                                 onChange={(e) => setFields(e.target.value)}
//                                                 value={fields} />
//                                         <br />
//                                         <button className="btn"
//                                                 onClick={addItems}>Add</button>
//                                         <br />
//                                         <button className="btn"
//                                                 onClick={deleteAll}>Delete All</button>
//                                         <ol>

//                                                 {
//                                                         data.map((item, index) => {
//                                                                 return (
//                                                                         <>
//                                                                                 <ToDoList
//                                                                                         item={item}
//                                                                                         deleteItem={deleteItem}
//                                                                                         id={index}
//                                                                                         key={index}
//                                                                                         editItem={edit} />
//                                                                         </>
//                                                                 )
//                                                         })
//                                                 }
//                                         </ol>
//                                 </div>
//                         </div>
//                 </>
//         )
// }
// export default App
//         const time = new Date().toLocaleTimeString()
//         const [data, setData] = useState()
//         const update = () => {
//                 const time = new Date().toLocaleTimeString()
//                 setData(time)
//         }
//         setInterval(update, 1000)
//         return (
//                 <>
//                         <h1>{time}</h1>
//                 </>
//         )
// }
// export default App
//         const time = new Date().toLocaleTimeString()
//         const [data, setData] = useState()
//         const getTime = () => {
//                 const time = new Date().toLocaleTimeString()
//                 setData(time)
//         }
//         return (
//                 <>
//                         <h1>{time}</h1>
//                         <button className="btn"
//                                 onClick={getTime}>Get Time</button>
//                 </>
//         )
// }
// export default App

//         const [fields, setFields] = useState({
//                 title: "", note: ""
//         })
//         const [data, setData] = useState([])
//         const [text, setText] = useState()
//         const addItems = () => {
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//                 setFields("")
//         }
//         const deleteItem = (id) => {
//                 return (
//                         setData((val) => {
//                                 return (
//                                         val.filter((item, index) => {
//                                                 return (
//                                                         index !== id
//                                                 )
//                                         })
//                                 )
//                         })
//                 )
//         }
//         const edit = (i, item) => {
//                 const updatedData = [...data]
//                 updatedData.splice(i, 1, item)
//                 setData(updatedData)
//         }
//         const deleteAll = (id) => {
//                 return (
//                         setData((val) => {
//                                 return ([])
//                         })
//                 )
//         }
//         const onSearch = () => {
//                 const updatedData = [...data].filter((item) => item.title == text)
//                 setData(updatedData)
//         }
//         return (
//                 <>
//                         <div className="Search">
//                                 <div className="Search-div">
//                                         <input type="text" placeholder="Search"
//                                                 onChange={(e) => setText(e.target.value)} />
//                                         <button className="add-btn"
//                                                 onClick={onSearch}>Search</button>
//                                 </div>
//                         </div>
//                         <div className="first">
//                                 <div className="first-div">
//                                         <h1>Add Notes</h1>
//                                         <br />
//                                         <input type="text" placeholder="Title"
//                                                 onChange={(e) => setFields({ ...fields, title: e.target.value })}
//                                                 value={fields.title}
//                                         />
//                                         <input type="text" placeholder="Note"
//                                                 onChange={(e) => setFields({ ...fields, note: e.target.value })}
//                                                 value={fields.note}
//                                         />
//                                         <button className="add-btn"
//                                                 onClick={addItems}>Add</button>
//                                         <button className="add-btn"
//                                                 onClick={deleteAll}>Delete All</button>
//                                 </div>
//                         </div>
//                         {
//                                 data.map((item, index) => {
//                                         return (
//                                                 <ToDoList
//                                                         a={item.title}
//                                                         b={item.note}
//                                                         deleteItem={deleteItem}
//                                                         editItem={edit}
//                                                         id={index}
//                                                         key={index} />
//                                         )
//                                 })
//                         }
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState()
//         const [data, setData] = useState([])
//         const [text, setText] = useState()
//         const addItems = () => {
//                 setFields()
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//                 setFields("")
//         }
//         const deleteItem = (id) => {
//                 return (
//                         setData((val) => {
//                                 return (
//                                         val.filter((item, index) => {
//                                                 return (
//                                                         index !== id
//                                                 )
//                                         })
//                                 )
//                         })
//                 )
//         }
//         const deleteAll = (id) => {
//                 return (
//                         setData((val) => {
//                                 return ([])
//                         })
//                 )
//         }
//         const edit = (i, item) => {
//                 const updatedData = [...data]
//                 updatedData.splice(i, 1, item)
//                 setData(updatedData)
//         }
//         const onSearch = () => {
//                 const updatedData = [...data].filter((item) => item == text)
//                 setData(updatedData)
//         }
//         return (
//                 <>
//                         <div className="col-10 mx-auto">
//                                 <input type="text"
//                                         placeholder="Search"
//                                         onChange={(e) => setText(e.target.value)} />
//                                 <button className="btn-success"
//                                         onClick={onSearch}>Search</button>
//                                 <input type="text"
//                                         onChange={(e) => setFields(
//                                                 e.target.value
//                                         )}
//                                         value={fields} />
//                                 <button className="btn-primary"
//                                         onClick={addItems}>Add Items</button>
//                                 <ol>
//                                         <button className="btn danger"
//                                                 onClick={deleteAll}>Delete All</button>
//                                         {data.map((item, index) => {
//                                                 return (

//                                                         <>
//                                                                 <ToDoList
//                                                                         item={item}
//                                                                         // deleteAll={deleteAll}
//                                                                         deleteItem={deleteItem}
//                                                                         id={index}
//                                                                         key={index}
//                                                                         editItem={edit} />
//                                                                 {/* {index}
//                                                                 <li> {item}
//                                                                         <button className="btn danger"
//                                                                                 onClick={deleteItem()}>Delete</button>
//                                                                 </li> */}
//                                                         </>
//                                                 )
//                                         })}
//                                 </ol>
//                         </div>
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState({
//                 name: "", email: "", password: ""
//         })
//         const [data, setData] = useState([])
//         const addItems = () => {
//                 setFields({
//                         name: "", email: "", password: ""
//                 })
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//         }
//         const render = () => {
//                 return (
//                         data.map((item, index) => {
//                                 return (
//                                         <ol>
//                                                 <li> {item.name} </li>
//                                                 <li> {item.email} </li>
//                                                 <li> {item.password} </li>
//                                         </ol>
//                                 )
//                         })
//                 )
//         }
//         return (
//                 <>
//                         <input
//                                 onChange={(e) => setFields({ ...fields, name: e.target.value })} />
//                         <input
//                                 onChange={(e) => setFields({ ...fields, email: e.target.value })} />
//                         <input
//                                 onChange={(e) => setFields({ ...fields, password: e.target.value })} />
//                         <button
//                                 onClick={addItems}>Add</button>
//                         <tr>{render()}</tr>
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState()
//         const [data, setData] = useState([])
//         const [text, setText] = useState()
//         const addItems = () => {
//                 if (fields.length > 0) {
//                         setFields("")
//                         setData((val) => {
//                                 return ([...val, fields])
//                         })
//                 }
//                 else return (
//                         alert("Empty Fields Not Allowed")
//                 )
//         }
//         const deleteItem = (id) => {
//                 return (
//                         setData((val) => {
//                                 return (
//                                         val.filter((item, index) => {
//                                                 return (
//                                                         index !== id
//                                                 )
//                                         })
//                                 )
//                         })
//                 )
//         }
//         const deleteAll = (id) => {
//                 return (
//                         setData((val) => {
//                                 return ([])
//                         })
//                 )
//         }
//         const edit = (i, item) => {
//                 const updatedData = [...data]
//                 updatedData.splice(i, 1, item)
//                 setData(updatedData)
//         }
//         const searchItems = () => {
//                 const updatedData = [...data].filter((item) => item == text)
//                 setData(updatedData)
//         }
//         return (
//                 <>
//                         <input placeholder="Search"
//                                 onChange={(e) => setText(e.target.value)} />
//                         <button className="btn-success"
//                                 onClick={searchItems}>Search</button>
//                         <input
//                                 onChange={(e) => setFields(e.target.value)}
//                                 value={fields} />
//                         <button className="btn-success"
//                                 onClick={addItems}>Add</button>
//                         {data.map((item, index) => {
//                                 return (
//                                         <>
//                                                 <ToDoList
//                                                         text={item}
//                                                         select={deleteItem}
//                                                         selectAll={deleteAll}
//                                                         key={index}
//                                                         id={index}
//                                                         editItem={edit} />
//                                         </>)
//                         })}
//                 </>
//         )
// }
// export default App
//         const [fields, setFields] = useState()
//         const [data, setData] = useState([])
//         const addItems = () => {
//                 setFields()
//                 setData((val) => {
//                         return ([...val, fields])
//                 })
//         }

//         return (
//                 <>
//                         <input type="text" placeholder="Add Items"
//                                 onChange={(e) => setFields(e.target.value)} />
//                         <button className="btn"
//                                 onClick={addItems}>Add</button>
//                         <ol>
//                                 {data.map((item, index) => {
//                                         return (
//                                                 <li> {item} </li>
//                                         )
//                                 })}
//                         </ol>
//                 </>
//         )
// }
// export default App
//         return(
//         <>
//         <Navbar/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="*" element={<Home/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/services" element={<Services/>}/>
//         </Routes>
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
//         return(
//         <>
//         <select
//         onChange={(e)=>setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="25">25</option>
//         </select>
//         <h1> You Choose {num} Value </h1>
//         <h1> My Name Is {name} </h1>
//         <h1> I Have {moves} Moves </h1>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=(`${count} Times You CLicked Me`)
//         // alert("Hello")
//         })
//         return(
//         <>
//         <button className="btn-danger" style={{transition:"0.5s"}}
//         onClick={()=>{
//                 setCount( count +1)
//         }}>You Clicked Me {count} Time</button>
//         <button className="btn-danger" style={{transition:"0.5s"}}
//         onClick={()=>{
//                 setCounts( counts +1 )
//         }}>You Clicked Me {counts} Time</button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState({
//                 title:"",note:""
//             })
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const deleteAll=(id)=>{
//                 return(
//                 setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                 return(
//                         item==id
//                 )
//                 })
//                 )
//                 })
//                 )
//                 }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
//         return(
//         <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={(e)=>setText(e.target.value)}/>
//                 <span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={(e)=>setFields(e.target.value)}/>
//                 <span
//                 onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <span
//                 onClick={deleteAll}>
//                 <DeleteIcon/>
//                 </span>
//                 <ol> {data.map((item,index)=>{
//                         return(
//                         <ToDoList
//                         text={item}
//                         select={deleteItem}
//                         id={index}
//                         key={index}
//                         editItem={edit}/>
//                         )
//                 })} </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const navigate=useNavigate()
//         return(
//         <>
//         <Navbar/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/services" element={<Services/>}/>
//         <Route path="*" element={<Home/>}/>
//         </Routes>
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const Home=()=>{
//         return(
//         <h1>Welcome To HomePage</h1>
//         )
//         }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/u0ser/:fname/:lname" element={<User/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/search" element={<Search/>}/>
//         <Route path="*" element={<Home/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         return(
//         <>
//         <h1>You Choose {num} Value</h1>
//         <h1>My Name Is {name}</h1>
//         <h1>I Have {moves} Moves</h1>
//         <select
//         onChange={(e)=>setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//         <option value="25">25</option>
//         </select>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//                 // alert("Hello")
//         document.title=(`${counts} Times You Clicked Me`)
//         })
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{
//                 setCount(count+1)
//         }}> You Clicked Me {count} Times </button>
//         <button className="btn"
//         onClick={()=>{
//                 setCounts(counts +1)
//         }}> You Clicked Me {counts} Times </button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState({
//                 title:"",note:""
//             })
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//                 return(
//                     setData((val)=>{
//                         return(
//                             val.filter((item,index)=>{
//                                 return(
//                                     index!==id
//                                 )
//                             })
//                         )
//                     })
//                 )
//                 }
//                 const edit=(i,item)=>{
//                     const updatedData=[...data]
//                     updatedData.splice(i,1,item)
//                     setData(updatedData)
//                 }
//                 const deleteAll=(id)=>{
//                         return(
//                             setData((val)=>{
//                                 return(
//                                     val.filter((item,index)=>{
//                                         return(
//                                             item==id
//                                         )
//                                     })
//                                 )
//                             })
//                         )
//                         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}
//         selectAll={deleteAll}/>
//         {data.map((item,index)=>{
//         return(
//         <Note 
//         a={item.title}
//         b={item.note}
//         select={deleteItem}
//         editItem={edit}
//         id={index}
//         key={index}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const deleteAll=(id)=>{
//                 return(
//                 setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                 return(
//                         item==id
//                 )
//                 })
//                 )
//                 })
//                 )
//                 }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//                 <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Search Items"/>
// <span>
// <SearchIcon className="search-icon"/>
// </span>
// <br/>
// <br/>
// <br/>
// <input type="text" placeholder="Add Any Items"
// onChange={(e)=>setFields(e.target.value)}
// value={fields}/>
// <span
// onClick={addItems}>
// <AddIcon className="add-icon"/>
// </span>
// <span
// onClick={()=>{
//         deleteAll()
// }}>
// <DeleteIcon/>
// </span>
// <ol>
// {data.map((item,index)=>{
// return(
// <ToDoList
// text={item}
// select={deleteItem}
// editItem={edit}
// selectAll={deleteAll}
// id={index}
// key={index}/>
// )
// })}
// </ol>
// </div>
// </div>
// </>        
// )
// }
// export default App
//         const Home=()=>{
//         return(
//         <h1 className="text-center">Welcome To HomePage</h1>
//         )
//         }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route exact path="/user/:fname/:lname" element={<User/>}/>
//         <Route path="/search" element={<Search/>}/>
//         {/* <Route path="*" element={<Error/>}/> */}
//         {/* <Route path="*" element={<Navigate to="/"/>}/> */}
//         <Route path="*" element={<Navigate to="/"/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
//         return(
//         <>
//         <h1> You Choose {num} Value </h1>
//         <h1> My Name Is {name} </h1>
//         <h1> I Have {moves} Moves </h1>
//         <select onChange={(e)=>setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="25">25</option>
//         </select>
//         </>
//         )
// }
// export default App
// `https://pokeapi.co/api/v2/pokemon/
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         // alert("You Clicked Me")
//         document.title=(`${counts} Times You Clicked Me`)
//         })
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{
//                 setCount(count+1)
//         }}>You Click Me {count} Times </button>
//         <button className="btn"
//         onClick={()=>{
//                 setCounts(counts+1)
//         }}>You Click Me {counts} Times </button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState({
//                 title:"",note:""
//             })
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const deleteAll=(id)=>{
//                 return(
//                 setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                 return(
//                 item==id
//                 )
//                 })
//                 )
//                 })
//                 )
//                 }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}
//         select={deleteItem}
//         selectAll={deleteAll}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}
//         selectAll={deleteAll}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteAll=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const deleteItem=(id)=>{
//                 return(
//                 setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//                 )
//                 })
//                 )
//                 }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span
//         onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         <span
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <span
//         onClick={deleteAll}>
//         <DeleteIcon/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//         <ToDoList 
//         text={item}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const Home=()=>{
//         return(
//                 <h1>Welcome To HomePage</h1>
//         )
//         }

//          // const Search=()=>{
//         //         const [fields,setFields]=useState("")
//         //         return(
//         //         <>
//         //         <div style={{display:"flex", justifyContent:"center", alignItems:"center",
//         //         marginTop:"50px"}}>
//         //         <input type="text" placeholder="Search Anything"
//         //         onChange={(e)=>setFields(e.target.value)}
//         //         value={fields}/>
//         //         </div>
//         //         {fields === "" ? null : <IMG name={fields}/>}
//         //         </>
//         //         )
//         //         }
//         // const IMG=({name})=>{
//         // const img = (`https://source.unsplash.com/600x300?${name}`)
//         // return(
//         // <>
//         // <img src={img} alt="RukoZaraSabarKaro"/>
//         // </>
//         // )
//         // }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/menu" element={<Menu/>}/>
//         <Route path="/user/:fname/:lname" element={<User/>}/>
//         <Route path="/search" element={<Search/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
// const [num,setNum]=useState()
// const [name,setName]=useState()
// const [moves,setMoves]=useState()
// useEffect(()=>{
// async function getData(){
// const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
// setName(res.data.name)
// setMoves(res.data.moves.length)
// }
// getData()
// })
// return(
// <>
// <h1> You Choose {num} Value </h1>
// <h1> My Name Is {name} </h1>
// <h1> I Have {moves} Moves </h1>
// <select
// onChange={(e)=>setNum(e.target.value)}>
// <option value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option>
// <option value="7">7</option>
// <option value="8">8</option>
// <option value="9">9</option>
// <option value="25">25</option>
// </select>
// </>
// )
// }
// `https://pokeapi.co/api/v2/pokemon/
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         // alert("Hello Hello")
//         document.title=`${counts} Time You Clicked Me`
//         })
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>setCount(count +1)}>You Clicked Me {count} Times</button>
//         <button className="btn"
//         onClick={()=>setCounts(counts +1)}>You Clicked Me {counts} Times</button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         editItem={edit}
//         select={deleteItem}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item,index)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span
//         onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         <span
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//         <ToDoList 
//         text={item}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}
//         />
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const Home=()=>{
//         return(
//         <h1>Welcome To Home Page</h1>
//         )
//         }
// const Search=()=>{
//         const [fields,setFields]=useState("")
//         return(
//         <>
//         <div style={{display:"flex", justifyContent:"center", alignItems:"center",
//         marginTop:"50px"}}>
//         <input type="text" placeholder="Search Anything"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         </div>
//         {fields === "" ? null : <IMG name={fields}/>}
//         </>
//         )
//         }
// const IMG=({name})=>{
// const img = (`https://source.unsplash.com/600x300?${name}`)
// return(
// <>
// <img src={img} alt="RukoZaraSabarKaro"/>
// </>
// )
// }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/header" element={<Header/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/search" element={<Search/>}/>
//         <Route exact path="/user" element={<User/>}/>
//         <Route path="/user/:fname/:lname" element={<User/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
//         return(
//         <>
//         <h1> You Choose {num} Value </h1>
//         <h1> My Name Is {name} </h1>
//         <h1> I Have {moves} Moves </h1>
//         <select
//         onChange={(e)=>setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="25">25</option>
//         </select>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=(`${count}Times You Clicked Me`)
//         // alert("Hello")
//         })
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{
//                 setCount(count +1)
//         }}>You Clicked Me {count} Times</button>
//         <button className="btn"
//         onClick={()=>{
//                 setCounts(counts +1)
//         }}>You Clicked Me {counts} Times</button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState({
//                 title:"",note:""
//         })
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <Header/>
//                 <CreateNote
//                 render={renderDiv}
//                 setOne={data}
//                 setTwo={setData}/>
//                 {data.map((item,index)=>{
//                 return(
//                 <Note
//                 a={item.title}
//                 b={item.note}
//                 select={deleteItem}
//                 editItem={edit}
//                 id={index}
//                 key={index}/>
//                 )
//                 })}
//                 <Footer/>
//                 </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//                 setData((val)=>{
//                         return([...val,fields])
//                         })
//                 setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span
//         onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         <span
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//         //         <>
//         // <li> {item} </li>
//         // <span
//         // onClick={()=>{
//         //         deleteItem()
//         // }}><DeleteIcon/></span>
//         // </>
//         <ToDoList
//         select={deleteItem}
//         id={index}
//         key={index}
//         text={item}
//         editItem={edit}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const Home=()=>{
//         return(<h1> Hello From 🏡 Page </h1>)
//         }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/header" element={<Header/>}/>
//         <Route path="/footer" element={<Footer/>}/>
//         <Route path="/user/:fname/:lname" element={<User/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
//         const Home=()=>{
//         return(
//                 <h1>Hello This Is A HomePage 🏡</h1>
//         )
//         }
// return(
// <>
// <Menu/>
// <Routes>
// <Route path="/" element={<Home/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/contact" element={<Contact/>}/>
// <Route path="/user/:fname/:lname" element={<User/>}/>
// <Route path="/header" element={<Header/>}/>
// <Route path="/footer" element={<Footer/>}/>
// <Route element={<Error/>}/>
// </Routes>
// </>
// )
// }
// export default App
//         const Home=()=>{
//         return(
//                 <h1>This Is A Home Page</h1>
//         )
//         }
//         const Menu=()=>{
//         return(
//                 <>
//         <div className="practice">
//         <NavLink to="/" ClassName="active-class">Home</NavLink>
//         <NavLink to="/header" ClassName="active-class" style={{padding:"0px"}}>Header</NavLink>
//         <NavLink to="/footer"  ClassName="active-class">Footer</NavLink>
//         <NavLink exact to="/about" ClassName="active-class">About</NavLink>
//         <NavLink to="/about/contact"  ClassName="active-class">Contact</NavLink>
//         <NavLink to="/"  ClassName="active-class">Error</NavLink>
//         </div>
//         </>
//         )
//         }
// return(
// <>
// <Menu/>
// <Routes>
// <Route path="/" element={<Home/>}/>
// <Route path="/header" element={<Header/>}/>
// <Route path="/footer" element={<Footer/>}/>
// <Route exact path="/about" element={<About/>}/>
// <Route path="/about/contact" element={<Contact/>}/>
// <Route path="none" element={<Error/>}/>
// </Routes>
// </>
// )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
// return(
// <>
// <h1>You Choose {num} Value </h1>
// <h1>My Name Is {name} </h1>
// <h1>I Have {moves} Moves</h1>
// <select
// onChange={(e)=>setNum(e.target.value)}>
// <option value="1">1</option>
// <option value="25">25</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option>
// <option value="7">7</option>
// <option value="8">8</option>
// <option value="9">9</option>
// <option value="10">10</option>
// </select>
// </>
// )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=`${count} Times You Clicked Me`
//         // alert("Helllo")
//         })
// return(
//         <>
//         <button
//         className="btn"
//         onClick={()=>{
//                 setCount(count +1)
//         }}> You Clicked Me {count} Times </button>
//         <button
//         className="btn"
//         onClick={()=>{
//                 setCounts(counts +1)
//         }}> You Clicked Me {counts} Times </button>
//         </>
// )
// }
// export default App
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const [data,setData]=useState([])
//         const dikha=(fields)=>{
//         return(
//         setData((val)=>{
//         return([...val,fields])
//         })
//         )
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={dikha}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         select={deleteItem}
//         editItem={edit}
//         id={index}
//         key={index}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//                 setData((val)=>{
//                         return([...val,fields])
//                         })
//                         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span
//         onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         <span
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//         // <li> {item} </li>
//         <ToDoList
//         text={item}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const Menu=()=>{
//         return(
//         <>
//         <div className="nav">
//         <NavLink exact className="active-class" to="/">About</NavLink>
//         <NavLink exact className="active-class"  to="/contact">Contact</NavLink>
//         <NavLink exact className="active-class"  to="/contact/name">Name</NavLink>
//         </div>
//         </>
//         )
//         }
//         const Name=()=>{
//         return(
//                 <h1>Hello This Is A Name Page</h1>
//         )
//         }
//         return(
//         <>
//         <Menu/>
//         <Routes>
//         <Route exact path='/' element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/contact/name" element={<Name/>}/>
//         <Route element={<Error/>}/>
//         </Routes>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
// return(
// <>
// <h1> You Choose {num} Value </h1>
// <h1> My Name Is {name} </h1>
// <h1> I Have {moves} Moves </h1>
// <select
// onChange={(e)=>setNum(e.target.value)}>
// <option value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option>
// <option value="7">7</option>
// <option value="8">8</option>
// <option value="9">9</option>
// <option value="10">10</option>
// <option value="11">11</option>
// </select>
// </>
// )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         // useEffect(()=>{
//         // alert("Hellow")
//         // },[counts])
//         useEffect(()=>{
//         document.title=`You Clicked Me ${count} Times`
//         })
// return(
// <>
// <button className="btn"
// onClick={()=>setCount(count +1)}> You Clicked Me {count} </button>
// <button className="btn"
// onClick={()=>setCounts(counts+1)}> You Clicked Me {counts} </button>


// </>
// )
// }
// export default App
//         const [data,setData]=useState([])
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//                 <Note
//                 a={item.title}
//                 b={item.note}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
//         return(
//                 <>
//                 <h1> You Choose {num} Value </h1>
//                 <h1> My Name Is {name} </h1>
//                 <h1> I Have {moves} Moves </h1>
//                 <select
//                 onChange={(e)=>setNum(e.target.value)}>
//                 <option value="1">1</option>
//                 <option value="25">25</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="0">0</option>
//                 </select>
//                 </>
//                 )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
//         return(
//         <>
//         <h1> You Choose {num} Value </h1>
//         <h1> My Name Is {name} </h1>
//         <h1> I Have {moves} Moves </h1>
//         <select
//         onChange={(e)=>setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="0">0</option>
//         </select>
//         </>
//         )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,s]=useState()
//         const [num,setNum]=useState()
// return(
// <>
// <h1> You Choose   Value </h1>
// <h1> My Name Is  </h1>
// <h1> I Have   Moves  </h1>
// <select
// onChange={(e)=>setNum(e.target.value)}>
// <option></option>
// </select>
// </>
// )
// }
// export default App
// const App=()=>{
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         // alert("Hello")
//         document.title=`You Clicked Me ${count} Times`
//         },)
// return(
//         <>

//         <button className="btn"
//         onClick={()=>{
//         setCount(count+1)
//         }}> Click Me {count} </button>
//         <button className="btn"
//         onClick={()=>{
//                 setCounts(counts+1)
//         }}> Click Me {counts} </button>

//         </>
// )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//                 title:"",note:""
//                 })
//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
// const App=()=>{
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{

//                 setData((val)=>{
//                         return([...val,fields])
//                         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span
//         onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={(e)=>setFields(e.target.value)}
//         value={fields}/>
//         <span
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//                 // <li> {item} </li>
//         <ToDoList
//         text={item}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={(e)=>setText(e.target.value)}/>
//                 <span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={(e)=>setFields(e.target.value)}/>
//                 <span
//                 onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                         <>
//                 <ToDoList
//                 select={deleteItem}
//                 text={item}
//                 id={index}
//                 key={index}
//                 editItem={edit}/>
// </>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
// useEffect(()=>{
//         async function getData(){
//         const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
// })
// return(
// <>
// <h1>You Choose {num} Value</h1>
// <h1>My Name Is {name} </h1>
// <h1>I Have {moves} Moves</h1>
// <select
// onChange={(e)=>setNum(e.target.value)}>
// <option value="1"> 1 </option>
// <option value="2"> 2 </option>
// <option value="25"> 25 </option>
// <option value="4"> 4 </option>
// <option value="10"> 10 </option>
// </select>
// </>
// )
// }
// export default App
//         const [num,setNum]=useState()
//         const [name,setName]=useState()
//         const [moves,setMoves]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves[0].name)
//         console.log(res)
//         }
//         getData()
//         })
// return(
// <>
// <h2> You Chose {num} Value </h2>
// <h2> My Name Is {name} </h2>
// <h2> I Have {moves} Moves </h2>
// <select
// onChange={(e)=>setNum(e.target.value)}
// >
// <option value="1"> 1 </option>
// <option value="25"> 25 </option>
// <option value="3"> 3 </option>
// <option value="4"> 4 </option>
// <option value="5"> 5 </option>
// </select>
// </>
// )
// }
// export default App
//         const [num,setNum]=useState()
//         const [moves,setMoves]=useState()
//         const [name,setName]=useState()
//         useEffect(()=>{
//         async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         setName(res.data.name)
//         setMoves(res.data.moves.length)
//         }
//         getData()
//         })
// return(
// <>
// <h1> You Choose <span style={{color:"red", background:"transparent"}}> {num} </span> Value </h1>
// <h1> My Name Is <span style={{color:"red", background:"transparent"}}> {name} </span> </h1>
// <h1> I Have <span style={{color:"red", background:"transparent"}}> {moves} </span> Moves  </h1>
// <select 
// value={num}
// onChange={(e)=>setNum(e.target.value)}>
// <option value="1">1</option>
// <option value="25">25</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option>
// <option value="5">7</option>
// <option value="5">8</option>
// <option value="5">9</option>
// <option value="5">10</option>
// <option value="5">11</option>
// <option value="5">12</option>
// <option value="5">13</option>
// <option value="5">14</option>
// <option value="5">15</option>
// <option value="5">16</option>
// <option value="5">17</option>
// <option value="18">18</option>
// <option value="19">19</option>
// <option value="20">20</option>
// <option value="21">21</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// <option value="5">5</option>
// </select>
// </>
// )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=`You Clicked Me ${counts} Times`
//         // alert("Hellow")
//         },[counts])
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{setCount(count+1)}}>Click Me {count} Times </button>
//         <button className="btn"
//         onClick={()=>{setCounts(counts+1)}}>Click Me {counts} Times </button>
//         </>
//         )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const renderDiv=(fields)=>{
//         return(
//         setData((val)=>{
//         return([...val,fields])
//         })
//         )
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderDiv}
//         setOne={data}
//         setTwo={setData}/>


//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}


//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const [expand,setExpand]=useState(false)
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
//         const khulJa=()=>{
//         setExpand(true)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 {expand ?
//                 <><input type="text" placeholder="Search Items"
//                 onChange={(e) => setText(e.target.value)} /><span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon" />
//                 </span></>
//                 :""}
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}
//                 onClick={khulJa}/>
//                 <span
//                 onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>

//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}/>
//                 )
//                 })}
//                 </ol>

//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=`You Clicked Me ${count} Times`
//         })
//         return(
//                 <>
//         <button className="btn"
//         onClick={()=>{
//                 setCount(count +1)
//         }}> Click Me {count} </button>
//         <button className="btn"
//         onClick={()=>{
//                 setCounts(counts+1)
//         }}> Click Me {counts} </button>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"/>
//         <span>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvents}
//         value={fields}/>
//         <span 
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//         {data.map((item,index)=>{
//         return(
//         <li> {item} </li>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [data,setData]=useState([])

//         const renderDiv=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
// return(
// <>
// <Header/>
// <CreateNote
// render={renderDiv}
// setOne={data}
// setTwo={setData}/>

// {data.map((item,index)=>{
// return(
// <Note
// a={item.title}
// b={item.note}
// id={index}
// key={index}
// select={deleteItem}
// editItem={edit}/>
// )
// })}

{/* <Footer/>
</>
)
}
export default App */}
// const App=()=>{
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         document.title=`You Clicked Me Bsdk ${count} Times`
//         })
//         useEffect(()=>{
//         alert("Now You Have Clicked Me")
//         },[counts])
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{
//         setCount(count+1)
//         }}>Click Me {count} </button>
//         <button className="btn"
//         onClick={()=>{
//         setCounts(counts +1)
//         }}>Click Me {counts} </button>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
// useEffect(()=>{
// alert("Hellow World")
// },[counts])
// return(
// <>
// <button className="btn"
// onClick={()=>{
//         setCount(count +1)
// }}> Click Me {count} </button>
// <button className="btn"
// onClick={()=>{
//         setCounts(counts +1)
// }}> Click Me {counts} </button>
// </>
// )
// }
// export default App
//         const [count,setCount]=useState(0)
//         useEffect(()=>{
//         document.title=`You Clicked Me ${count} Times`
//         })
//         return(
//         <>
//         <button className="btn"
//         onClick={()=>{
//         setCount(count+1)
//         }}> Click Me {count} </button>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         alert("Hellow")
//         },[count])
//         return(
//         <>
//         <button
//         onClick={()=>{
//         setCount(count +1)
//         }}
//         className="btn">Click Me {count} </button>
//         <button
//         onClick={()=>{
//         setCounts(counts +1)
//         }}
//         className="btn">Click Me {counts} </button>
//         </>
//         )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const [counts,setCounts]=useState(0)
//         useEffect(()=>{
//         alert("I Am CLicked Buddy")
//         console.log("I Am Clicked Bhadway")
//         },[counts])
//         return(
//         <>
//         <button
//         onClick={()=>{
//         setCount(count+1)
//         }}
//         className="btn">Click Me {count} </button>
//         <button
//         onClick={()=>{
//         setCounts(counts+1)
//         }}
//         className="btn">Click Me {counts} </button>
//         </>
//         )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//                 title:"",note:""
//         })
//         const renderNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         render={renderNote}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
// return(
// <>
// <Header/>
// <CreateNote
// passNote={addNote}
// setOne={data}
// setTwo={setData}/>

// {data.map((item,index)=>{
// return(
// <Note
// a={item.title}
// b={item.note}
// id={index}
// key={index}
// select={deleteItem}
// editItem={edit}/>
// )
// })}


// <Footer/>
// </>
// )
// }
// export default App
// const App=()=>{
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [textt,setText]=useState()
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==textt)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={(e)=>setText(e.target.value)}/>
//                 <span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <span
//                 onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                 // <li> {item} </li>
//                 <Note
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//         <>
//         <Header/>
//         <CreateNote
//         passNote={addNote}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//       return(  <>
//         <Header/>
//         <CreateNote
//         passNote={addNote}
//         setOne={data}
//         setTwo={setData}/>
//         {data.map((item,index)=>{
//         return(
//         <Note 
//         a={item.title}
//         b={item.note}
//         id={index}
//         key={index}
//         select={deleteItem}
//         editItem={edit}/>
//         )
//         })}
//         <Footer/>
//         </>
//       )
// }
// export default App
//         const [fields,setFields]=useState({
//         title:"",note:""
//         })
//         const [data,setData]=useState([])
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }

//         return(
//                 <>
//                 <Header/>
//                 <CreateNote
//                 passNote={addNote}
//                 set={setData}
//                 setTwo={data}
//                 />
//                 {data.map((item,index)=>{
//                 return(
//                 <Note
//                 a={item.title}
//                 b={item.note}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}/>
//                 )
//                 })}
//                 <Footer/>
//                 </>
//         )
// }
// export default App
//         const [data,setData]=useState([])
//         const [fields,setFields]=useState({
//         name:"",email:""
//         })
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         }
//         const deleteItem=(id)=>{
//                 return(
//                 setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                 return(
//                 index!==id
//                 )
//                 })
//                 )
//                 })
//                 )
//                 }
// return(
//         <>
//         <Header/>
//         <CreateNote
//         passNote={addNote}/>
//         {data.map((item,index)=>{
//         return(
//         <Note
//         a={item.name}
//         b={item.email}
//         id={index}
//         key={index}
//         select={deleteItem}/>
//         )
//         })}
//         <Footer/>
//         </>
// )
// }
// export default App
// const App=()=>{
// const [data,setData]=useState([])
//         const addNote=(fields)=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         console.log(fields)
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//         <>
//         <Header />
//         <CreateNote 
//         passNote={addNote}/>

//         {data.map((item,index)=>{
//         return(
//         <Note 
//         key={index}
//         id={index}
//         a={item.name}
//         b={item.email}
//         select={deleteItem}/>
//         )
//         })}
//         <Footer/>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         }))
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Search Items"
//         onChange={(e)=>setText(e.target.value)}/>
//         <span onClick={onSearch}>
//         <SearchIcon className="search-icon"/>
//         </span>
//         <br/>
//         <br/>
//         <br/>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvents} value={fields}/>
//         <span 
//         onClick={addItems}>
//         <AddIcon className="add-icon"/>
//         </span>
//         <ol>
//                 {data.map((item,index)=>{
//                 return(
//         <ToDoList
//         id={index}
//         key={index}
//         text={item}
//         select={deleteItem}
//         editItem={edit}
//         />
//                 )
//                 })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//                 return(
//                         [...val,fields]
//                 )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                         return(
//                         index!==id
//                         )
//                 })
//                 )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={(e)=>setText(e.target.value)}/>
//                 <span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <span onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                         {/* <li> {fields} </li> */}
//                 {data.map((item,index)=>{
//                 return(
//                         // <li> {item} </li>
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}
//                 />
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         return(
//                 setData((val)=>{
//                         return([...val,fields])
//                 })
//         )
//         }

//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={inputEvents}/>
//                 <span>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"/>
//                 <span onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                 {data.map((item)=>{
//                 return(
//                         <li> {item} </li>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const [text,setText]=useState()
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                         return(
//                                 [...val,fields]
//                         )
//                         })
//                         setFields("")
//         }
//         else{
//                 alert("Invalid Crendentials")
//         }
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//                 return(
//                 val.filter((item,index)=>{
//                         return(
//                         index!==id
//                         )
//                 })
//                 )
//         })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         const onSearch=()=>{
//         const updatedData=[...data].filter((item)=>item==text)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Search Items"
//                 onChange={(e)=>setText(e.target.value)}/>
//                 <span
//                 onClick={onSearch}>
//                 <SearchIcon className="search-icon"/>
//                 </span>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <span onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                         {/* <li> {fields} </li> */}
//                 {data.map((item,index)=>{
//                 return(
//                 // <li> {item} </li>
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}
//                 />
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                 return([...val,fields])
//                 })
//                 setFields("")
//         }
//         else{
//         return(
//                 alert("Invalid Credentials")
//         )
//         }
//         }
//         const deleteItem=(id)=>{
//         return(
//                 setData((val)=>{
//                 return(
//                         val.filter((item,index)=>{
//                         return(
//                                 index!==id
//                         )
//                         })
//                 )
//                 })
//         )
//         }
//         const edit=(i,item)=>{
//         const updatedData=[...data]
//         updatedData.splice(i,1,item)
//         setData(updatedData)
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <br/>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <span onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                         {/* <li> {fields} </li> */}
//                 {data.map((item,index)=>{
//                 return(
//                         // <li> {item} </li>
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}
//                 editItem={edit}
//                 />
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//                 setFields(event.target.value)
//         }
//         const addItems=()=>{
//                 setData((val)=>{
//                 return([...val,fields])
//                 })
//         setFields("")
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <span onClick={addItems}>
//                 <AddIcon className="add-icon"/>
//                 </span>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((item)=>{
//                 return(
//                 <li> {item} </li>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                         return(
//                                 ([...val,fields])
//                         )
//                         })
//                         setFields("")
//         }
//         else{
//         return(
//                 alert("Invalid Credentials")
//         )
//         }
//         }
//         const deleteItem=(id)=>{
//         return(
//                 setData((val)=>{
//                 return(
//                         val.filter((item,index)=>{
//                         return(
//                                 index!==id
//                         )
//                         })
//                 )
//                 })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <button
//                 onClick={addItems}>+</button>
//                 <ol>
//                 {/* <li> {fields} </li> */}
//                 {data.map((item,index)=>{
//                 return(
//                         // <li> {item} </li>
//                 <ToDoList
//                 id={index}
//                 key={index}
//                 text={item}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//                 setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                         return([...val,fields])
//                         })
//                         setFields("")
//         }
//         else{
//                 return(
//                         alert("Invalid Credentials")
//                 )
//         }
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//                 return(
//                         val.filter((item,index)=>{
//                         return(
//                                 index!==id
//                         )
//                         })
//                 )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <button
//                 onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                 // <li> {item} </li>
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
// const inputEvents=(event)=>{
//         setFields(event.target.value)
// }
// const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
//         setFields("")
// }
// // const deleteItem=(id)=>{
// // return(
// // setData((val)=>{
// //         return(
// //                 val.filter((item,index)=>{
// //                         return(
// //                         index!==id
// //                         )
// //                 })
// //         )
// // })
// // )
// // }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents} value={fields}/>
//                 <button
//                 onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList 
//                 id={index}
//                 key={index}
//                 text={item}
//                 />
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//         setCount(count +1)
//         }
//         const decNum=()=>{
//         if (count>0){
//                 setCount( count -1 )
//         }
//         else{
//                 return(
//                         alert("Sorry, Zero Limit Reached")
//                 )
//         }
//         }
// return(
//         <div className="main-div">
//         <div className="center-div">
//         <h1> {count} </h1>
//         <div className="btn-div">
//         <button
//         onClick={incNum}>INCREMENT</button>
//         <button
//         onClick={decNum}>DECREMENT</button>
//         </div>
//         </div>
//         </div>
// )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//                 setCount(count +1)
//         }
//         const decNum=()=>{
//         if (count>0){
//                 setCount(count -1)
//         }
//         else(
//                 alert("Sorry Zero Limit Reached")
//         )
//         }
//         return(
//         <div className="main-div">
//         <div className="center-div">
//         <h1> {count} </h1>
//         <div className="btn-div">
//         <button
//         onClick={incNum}>Increment</button>
//         <button
//         onClick={decNum}>Decrement</button>
//         </div>
//         </div>
//         </div>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                         return(
//                         ([...val,fields])
//                         )
//                         })
//                         setFields("")
//         }
//         else{
//         alert("Invalid Credentials")
//         }
//         }
//         const deleteItem=(id)=>{
//         return(
//                 setData((val)=>{
//                         return(
//                         val.filter((item,index)=>{
//                         return(
//                         index!==id
//                         )
//                         })
//                         )
//                 })
//         )
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvents} value={fields}/>
//         <button
//         onClick={addItems}>+</button>
//         <ol>
//                 {/* <li>{fields}</li> */}
//         {data.map((item,index)=>{
//         return(
//         <ToDoList 
//         id={index}
//         key={index}
//         text={item}
//         select={deleteItem}/>
//         // <li>{item}</li>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         if (fields.length>0){
//                 setData((val)=>{
//                 return(
//                 ([...val,fields])
//                 )
//                 })
//                 setFields("")
//         }
//         else(
//                 alert("Nothing Found")
//         )
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={fields}/>
//                 <button
//                 onClick={addItems}>+</button>
//                 <ol>
//                 {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList 
//                 id={index}
//                 key={index}
//                 text={item}
//                 select={deleteItem}/>
//                 // <li>{item}</li>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//                 setCount(count +1)
//         }
//         const decNum=()=>{
//         if (count>0){
//                 setCount(count -1)
//         }
//         else{
//                 alert("Sorry, Zero Limit Reached")
//         }
//         }
//         return(
//         <div className="main-div">
//         <div className="center-div">
//         <h1>{count}</h1>
//         <div className="btn-div">
//         <button
//         onClick={incNum}> Increment </button>
//         <button
//         onClick={decNum}> Decrement </button>
//         </div>
//         </div>
//         </div>
//         )
// }
// export default  App
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//         setCount(count +1)
//         }
//         const decNum=()=>{
//         if (count>0){
//                 setCount(count -1)
//         }
//         else{
//                 alert("Sorry, Zero Limit Reached")
//         }
//         }
//         return(
//         <div className="main-div">
//         <div className="center-div">
//         <h1>{count}</h1>
//         <div className="btn-div">
//         <button
//         onClick={incNum}>INCREMENT</button>
//         <button
//         onClick={decNum}>DECREMENT</button>
//         </div>
//         </div>
//         </div>
//         )
// }
// export default App
// const App = () => {
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//                 setCount(count +1)
//         }
//         const decNum=()=>{
//         if (count>0){
//                 setCount(count -1)
//         }
//         else{
//                 setCount(0)
//                 alert("Sorry, Zero Limit Reached")
//         }
//         }
//         return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <h1>{count}</h1>
//         <div className="btn-div">
//         <button onClick={incNum}>Increment</button>
//         <button
//         onClick={decNum}>Decrement</button>
//         </div>
//         </div>
//         </div>
//         </>
//         )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(event)=>{
//         setFields(event.target.value)
//         }
// const addItems=()=>{
// setData((val)=>{
// return([...val,fields])
// })
// setFields("")
// }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//         )
//         })
//         )
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvent}
//         value={fields}/>
//         <button onClick={addItems}>+</button>
//         <ol>
//                 {/* <li>{fields}</li> */}
//         {data.map((item,index)=>{
//         return(
//         <ToDoList
//         id={index}
//         key={index}
//         text={item}
//         select={deleteItem}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         ([...val,fields])
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                 // <li>{item}</li>
//                 <ToDoList 
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//                 ([...val,fields])
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                 {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                         // <li>{item}</li>
//                         <ToDoList
//                         text={item}
//                         key={index}
//                         id={index}
//                         select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(e)=>{
//         setFields(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,fields]
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                <ToDoList
//                text={item}
//                id={index}
//                key={index}
//                select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
// const [fields,setFields]=useState()
// const [data,setData]=useState([])
// const inputEvent=(e)=>{
// setFields(e.target.value)
// }
// const addItems=()=>{
// setData((val)=>{
// return([...val,fields])
// })
// setFields("")
// }
// const deleteItem=(id)=>{
// return(
// setData((val)=>{
// return(
// val.filter((i,index)=>{
// return(
// index!==id
// )
// })
// )
// })
// )
// }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList 
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }

//         const addItems=()=>{
//                 setData((val)=>{
//                         return(
//                                 [...val,fields]
//                         )
//                         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//         val.filter((i,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                         {/* <li>{fields}</li> */}

//         {data.map((item,index)=>{
//         return(
//         <ToDoList
//         text={item}
//         id={index}
//         key={index}
//         select={deleteItem}/>
//         // <li>{item}</li>
//         )
//         })}

//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//                 [...val,fields]
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                 index!==id
//                 )
//                 })
//         )
//         })
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((item,index)=>{
//                 return(
//                   <ToDoList
//                   text={item}
//                   id={index}
//                   key={index}
//                   select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default  App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputItems=(e)=>{
//         setFields(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//                 ([...val,fields])
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         return(
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                         index!==id
//                 )
//                 })
//         )
//         })
//         )
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputItems}
//                 value={fields}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                         {/* <li>{fields}</li> */}
//                 {data.map((i,index)=>{
//                 return(
//                     <ToDoList 
//                     text={i}
//                     id={index}
//                     key={index}
//                     select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(event)=>{
//         setFields(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,fields]
//         )
//         })
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}
//                 value={fields}/>
//                 <button 
//                 onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList
//                 text={item}
//                 key={index}
//                 id={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [fields,setFields]=useState()

//         const [data,setData]=useState([])

// const inputEvents=(event)=>{
//         setFields(event.target.value)
// }
// const addItems=()=>{
//         setData((val)=>{
//         return([...val,fields])
//         })
// }
// const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
// }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvents}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((item,index)=>{
//                 return(
//                 <ToDoList
//                 text={item}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [events,setEvents]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(e)=>{
//         setEvents(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,events]
//         )
//         })
//         setEvents("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((i,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvents}
//         value={events}/>
//         <button onClick={addItems}>+</button>
//         <ol>
// {data.map((i,index)=>{
// return(
// <ToDoList 
// text={i}
// key={index}
// id={index}
// select={deleteItem}/>
// )
// })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [events,setEvents]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(e)=>{
//         setEvents(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,events]
//         )
//         })
//         setEvents("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//                 val.filter((item,index)=>{
//                 return(
//                 index!==id
//                 )
//                 })
//         )
//         })
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={events}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                 {data.map((i,index)=>{
//                 return(
//                 <ToDoList 
//                 text={i}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [input,setInput]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(e)=>{
//         setInput(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,input]
//         )
//         })
//         setInput("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//                 index!==id
//         )
//         })
//         )
//         })
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={input}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>
//                  {/* <li>{input}</li> */}
//                  {data.map((i,index)=>{
//                         return(
//                 <ToDoList 
//                 text={i}
//                 select={deleteItem}
//                 id={index}
//                 key={index}/>
//                         )
//                  })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )
// }
// export default App
//         const [input,setInput]=useState()
//         const [data,setData]=useState([])
//         const inputEvent=(e)=>{
//         setInput(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//                 [...val,input]
//         )        
//         })
//         setInput("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         }
//         return(
//                 <>
//                 <div className="main-div">
//                 <div className="center-div">
//                 <br/>
//                 <h1>ToDo List</h1>
//                 <input type="text" placeholder="Add Any Items"
//                 onChange={inputEvent}
//                 value={input}/>
//                 <button onClick={addItems}>+</button>
//                 <ol>

//                 {data.map((i,index)=>{
//                 return(
//                 <ToDoList 
//                 text={i}
//                 id={index}
//                 key={index}
//                 select={deleteItem}/>
//                 )
//                 })}
//                 </ol>
//                 </div>
//                 </div>
//                 </>        
//                 )

// }
// export default App
//         const [input,setInput]=useState()
//         const [data,setData]=useState([])
// const inputItems=(e)=>{
// setInput(e.target.value)
// }
// const addItems=()=>{
// setData((val)=>{
// return(
//         [...val,input]
// )        
// })
// setInput("")
// }
// const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((i,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
// }
// return(
//         <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputItems}
//         value={input}/>
//         <button onClick={addItems}>+</button>
//         <ol>
//         {data.map((i,index)=>{
//         return(
//         <ToDoList 
//         id={index}
//         key={index}
//         select={deleteItem}
//         text={i}/>
//         )
//         })}       
//                 {/* <li>{input}</li> */}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )


// }
// export default App
//         const [fields,setFields]=useState()
//         const [data,setData]=useState([])
//         const inputEvents=(e)=>{
//         setFields(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,fields]
//         )
//         }
//         )
//         setFields("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         }
//         return(
//         <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={inputEvents}
// value={fields}/>
// <button
// onClick={addItems}>+</button>
// <ol>
//  {/* <li>{fields}</li> */}
//  {data.map((item,index)=>{
// return(
// <ToDoList 
// a={item}
// key={index}
// id={index}
// select={deleteItem}/>
// )
//  })}
// </ol>
// </div>
// </div>
// </>        
// )
// }
// export default App
//         const [input,setInput]=useState()
//         const [data,setData]=useState([])
//         const itemEvent=(event)=>{
//         setInput(event.target.value)
//         }
// const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,input]
//         )
//         }
//         )
//         setInput("")
// }
// const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
// }
// return(
//         <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={itemEvent}
// value={input}/>
// <button
// onClick={addItems}>+</button>
// <ol>
//         {/* <li>{input}</li> */}
// {data.map((item,index)=>{
// return(
// <ToDoList 
// a={item}
// key={index}
// id={index}
// onSelect={deleteItem}/>
// )
// })}
// </ol>
// </div>
// </div>
// </>        
// )

// }
// export default App
// const [events,setEvents]=useState()
// const [data,setData]=useState([])

//         const inputEvent=(event)=>{
//         setEvents(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,events]
//         )
//         }
//         )
//         setEvents("")
//         }
//         const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((i,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
//         }
//         return(
//                 <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvent}
//         value={events}/>
//         <button
//         onClick={addItems}>+</button>
//         <ol>

// {data.map((item,index)=>{
// return(
//         <ToDoList 
//         text={item}
//         onSelect={deleteItem}
//         id={index}
//         key={index}/>

// )
// })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [input,setInput]=useState()
//         const [data,setData]=useState([])

//         const inputEvent=(e)=>{
//         setInput(e.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,input]
//         )
//         }
//         )
//         setInput("")
//         }
// const deleteItem=(id)=>{
//         setData((val)=>{
//         return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//         )
//         })
// }
//         return(
//                 <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         value={input}
//         onChange={inputEvent}
//         />
//         <button onClick={addItems}>+</button>
//         <ol>

//         {data.map((item,index)=>{
//         return(
//         <ToDoList 
//         text={item}
//         key={index}
//         id={index}
//         onSelect={deleteItem}/>
//         )
//         })}
//         </ol>
//         </div>
//         </div>
//         </>        
//         )
// }
// export default App
//         const [events,setEvents]=useState()
//         const [data,setData]=useState([])

// const inputEvent=(e)=>{
//         setEvents(e.target.value)
// }
// const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,events]
//         )
//         })
//         setEvents("")
// }
// const deleteItems=(id)=>{
//         setData((val)=>{
//                 return(
//         val.filter((item,index)=>{
//         return(
//         index!==id
//         )
//         })
//                 )
//         })
//     }
//         return(
//                 <>
//         <div className="main-div">
//         <div className="center-div">
//         <br/>
//         <h1>ToDo List</h1>
//         <input type="text" placeholder="Add Any Items"
//         onChange={inputEvent}
//         value={events}/>
//         <button onClick={addItems}>+</button>
//         <ol>
//         {data.map((item,index)=>{
//                 return(
//         <ToDoList 
//         key={index} 
//         id={index} 
//         text={item} 
//         onSelect={deleteItems}
//         />
// )        })}        {/*  */}
//         </ol>
//         </div>
//         </div>
//         </>
//                                 )
// }
// export default App
//         const [events,setEvents]=useState()
//         const [data,setData]=useState([])

// const inputEvent=(event)=>{
// setEvents(event.target.value)
// }
// const addItems=()=>{
// setData((val)=>{
// return(
//         [...val,events]
// )
// }
// )
// setEvents("")
// }
//         return(
//         <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={inputEvent}
// value={events}/>
// <button onClick={addItems}>+</button>
// <ol>
//         {/* <li>{events}</li> */}
// {data.map((item)=>{
// return(
//         <li>{item}</li>
// )
// })}


// </ol>
// </div>
// </div>
// </>
//                                 )
// }
//  export default  App       
// const [events,setEvents]=useState()
// const [data,setData]=useState([])

//         const inputEvent=(event)=>{ 
//         setEvents(event.target.value)       
// }


// const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,events]
//         )
//         }
//         )
//         setEvents("") 
// }
// return(
//         <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// value={events}
// onChange={inputEvent}/>
// <button onClick={addItems}>+</button>
// <ol>
//         {/* <li>{events}</li> */}
// {data.map((item)=>{
// return(
// <li>{item}</li>
// )
// })}
// </ol>
// </div>
// </div>
// </>
//                         )
// }
// export default App
// const App=()=>{
//         const [item,setItem]=useState()
//         const [data,setData]=useState([])
//         const itemEvents=(event)=>{
//         setItem(event.target.value)
//         }
//         const addItems=()=>{
//         setData((val)=>{
//         return(
//         [...val,item]
//         )        
//         }
//         )
//         }
//         return(
//         <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={itemEvents}/>
// <button onClick={addItems}>+</button>
// <ol>

// {/* <li>{item}</li> */}
//        {data.map((items)=>{
//        return(
//         <li>{items}</li>
//        )
//        })}
// </ol>
// </div>
// </div>
// </>
//                         )                
// }
// export default App
// const [items,setItems] =  useState()
// const [data,setData] = useState([])
// const itemEvent=(event)=>{
//       setItems(event.target.value)
// }
// const addItems=()=>{
//         setData((val)=>{
//         return(
//         ([...val,items])
//         )
//         })
// }
//         return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items" onChange={itemEvent}/>
// <button onClick={addItems}>+</button>
// <ol>
//         {/* <li>{items}</li> */}
//         {data.map((item)=>{
//         return(
//                 <li>{item}</li>
//         )
//         })}
// </ol>
// </div>
// </div>
// </>
//         )                
// }
// export default  App
//         const [items,setItems]=useState()
//         const [data,setData]=useState([])
// const itemEvent=(event)=>{
// setItems(event.target.value)
// }
// const addItems=()=>{
// setData((val)=>{
//         return(
//         ([...val,items])
//         )
// })
// }
//         return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={itemEvent}/>
// <button onClick={addItems}>+</button>
// <ol>
//         {/*  */}
//         {data.map((item)=>{
//         return(
//         <li>{item}</li>
//         )
//         })}
// </ol>
// </div>
// </div>
// </>
// )    
// }
// export default App
// const [list,setList]=useState()
// const [items,setItems]=useState([])
// const itemEvent=(event)=>{
// setList(event.target.value)
// }
// const addItems=()=>{
// setItems((val)=>{
// return(
// ([...val,list])
// )
// })
// }
//         return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={itemEvent}/>
// <button onClick={addItems}>+</button>
// <ol>

// {/*  */}
// {items.map((item)=>{
// return(
// <li>{item}</li>
// )
// })}

// </ol>
// </div>
// </div>
// </>
// )
// }
// export default  App
// const [inputList,setInputList]=useState()
// const [data,setData]=useState([])
// const itemEvent=(event)=>{
// setInputList(event.target.value)
// }
// const addItems=()=>{
// setData((oldItems)=>{
//         return(
// ([...oldItems,inputList])
//         )
// })
// }
// return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <input type="text" placeholder="Add Any Items"
// onChange={itemEvent}/>
// <button onClick={addItems}>+</button>
// <ol>
// {/* <li>{inputList}</li> */}
// {data.map((item)=>{
// return(
// <li>{item}</li>
// )
// })}
// </ol>
// </div>
// </div>
// </>
// )
// }
// export default App
//         const [inputItem,setInputItem]=useState()
//         const [items,setItems]=useState([])
// const listOfItems=()=>{
// setItems((oldItems)=>{
// return(
//         [...oldItems, inputItem]
// )
// })
// }
// const itemEvent=(event)=>{
// setInputItem(event.target.value)
// }
// return(
// <>
// <div className="main-div">
// <div className="center-div"><br/>
// <h1>ToDo List</h1><br/>
// <input type="text" placeholder="Add Any Item"
// onChange={itemEvent}/>
// <button onClick={listOfItems}>+</button>

// <ol>



// {items.map((itemVal)=>{
//         return(
// <>
// <li> {itemVal} </li>
// </>
// )

// })}


// </ol>
// </div>
// </div>
// </>
// )
// }
// export default App
// const App=()=>{
// const [inputEvent,setInputEvent]=useState()
// const [item,setItem]=useState([])
// const itemEvent=(event)=>{
// setInputEvent(event.target.value)
// }
// const listOfItems=()=>{
// setItem((preVal)=>{
//         return(
//         [...preVal, inputEvent]
//         )
// })
// }
// return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br/>
// <h1>ToDo List</h1>
// <br/>
// <input type="text" placeholder="Add Any Item"
// onChange={itemEvent}/>
// <button onClick={listOfItems}> + </button>
// <br/>
// <ol>
// {/* <li> {inputEvent} </li> */}
// {item.map((a)=>{
//         return(
//         <li> {a} </li>
//         )
// })}
// </ol>
// </div>
// </div>
// </>
// )
// }
// export default App
// const App=()=>{
// const[inputList,setInputList]=useState()
// const [items,setItems]=useState([])
// const itemEvent=(event)=>{
// setInputList(event.target.value)
// }
// const listOfItems=(event)=>{
// setItems((oldItems)=>{
//         return [...oldItems,inputList]
// })
// }
// return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br />
// <h1>ToDo List</h1>
// <br/>
// <input type="text" placeholder="Add Any Item"
// onChange={itemEvent}/>
// <button onClick={listOfItems}> + </button>
// <ol>
//  {/* <li> {inputList} </li>  */}
// {items.map((itemVal)=>{
//        return(
//         <li> {itemVal} </li>
//        )
// })} 
// </ol>
// </div>
// </div>
// </>
// )
// }
// export default App
// const App=()=>{

// const [inputList, setInputList] =useState("")
// const [items,setItems]=useState([])


// const itemEvent=(event)=>{
// setInputList(event.target.value);
// }

// const listOfItems=()=>{
//         setItems((oldItems)=>{
//         return(
//         [...oldItems, inputList]
//         )
//         })
// }

//         return(
// <>
// <div className="main-div">
// <div className="center-div">
// <br />
// <h1>ToDo List</h1>
// <br/>
// <input type="text" placeholder="Add Any Item"
// onChange={itemEvent}/>
// <button onClick={listOfItems}> + </button>
// <ol>
// {/* <li> {inputList} </li> */}


// {items.map( (itemVal)=>{
// return(
// <li> {itemVal} </li>
// )
// } )}

// </ol>
// </div>
// </div>
// </>)
// }

// export default App
// const App=()=>{
// const[fullName,setFullName]=useState({
// fName:"",lName:"",age:"",email:"",contact:""
// })
// const inputEvent=(event)=>{
// const{name,value}=event.target
// setFullName((preValue)=>{
// return{
// ...preValue, [name]:value
// }
// })
// }
// const onSubmits=(event)=>{
// event.preventDefault()
// alert("Successfully Submitted")
// }
// return(
// <div>
// <form onSubmit={onSubmits}>
// <h1>{fullName.fName}</h1><h1>{fullName.lName}</h1>
// <h1>{fullName.age}</h1><h1>{fullName.email}</h1>
// <h1>{fullName.contact}</h1>
// <input type="text" placeholder="Enter Your Name"
// value={fullName.fName} onChange={inputEvent} name="fName"/>
// <input type="text" placeholder="Enter Your Last Name"
// value={fullName.lName} onChange={inputEvent} name="lName"/>
// <input type="number" placeholder="Enter Your age"
// value={fullName.age} onChange={inputEvent} name="age"/>
// <input type="email" placeholder="Enter Your Email Address"
// value={fullName.email} onChange={inputEvent} name="email"/>
// <input type="number" placeholder="Enter Your Contact Number"
// value={fullName.contact} onChange={inputEvent} name="contact"/>
// <button type="submit">Submit</button>
// </form>
// </div>
// )
// }
// export default App
// const App=()=>{
// const[fullName,setFullName]=useState({
// fName:"",lName:"",email:"",contact:""
// })
// const inputEvent=(event)=>{
// const {value,name}=event.target
// setFullName((preValue)=>{
//         return{
//         ...preValue,
//         [name]: value
//         }
// // if (name=="fName"){
// // return{
// // fName:value,lName:preValue.lName,email:preValue.email,
// // contact:preValue.contact
// // }
// // }
// // else if (name=="contact"){
// //         return{
// //         fName:preValue.fName,lName:preValue.lName,email:preValue.email,
// //         contact:value
// //         }
// //         }
// //         else if (name=="lName"){
// //                 return{
// //                 fName:preValue.fName,lName:value,email:preValue.email,
// //                 contact:preValue.contact
// //                 }
// //                 }
// //                 else if (name=="email"){
// //                         return{
// //                         fName:value,lName:preValue.lName,email:value,
// //                         contact:preValue.contact
// //                         }
// //                         }
// })
// }
// const onSubmits=(event)=>{
// event.preventDefault()
// alert("Successfully Submitted")
// }
// return(
// <div>
// <form onSubmit={onSubmits}>
// <h1>{fullName.fName}</h1><h1>{fullName.lName}</h1>
// <h1>{fullName.email}</h1><h1>{fullName.contact}</h1>
// <input type="text" placeholder="Enter Your Name"
// onChange={inputEvent} value={fullName.fName} name="fName"/>
// <input type="text" placeholder="Enter Your Last Name"
// onChange={inputEvent} value={fullName.lName} name="lName"/>
// <input type="email" placeholder="Enter Your Email Address"
// onChange={inputEvent} value={fullName.email} name="email"/>
// <input type="number" placeholder="Enter Your Contact Number"
// onChange={inputEvent} value={fullName.contact} name="contact"/>
// <button type="submit">Submit</button>
// </form>
// </div>
// )
// }
// export default App
// const App=()=>{
// const [fullName,setFullName]=useState({
// fName:"",lName:"",age:"",gender:"",email:"",contact:""
// })
// const inputEvent=(event)=>{
// const {value,name}=event.target
// setFullName((preValue)=>{
// if (name==="fName")
//         return{
// fName:value,lName:preValue.lName,age:preValue.age,gender:preValue.gender,
// email:preValue.email,contact:preValue.contact  
// }
// else if(name=="lName"){
// return{
// fName:preValue.fName,lName:value,age:preValue.age,gender:preValue.gender,
// email:preValue.email,contact:preValue.contact  
// }
// }
// else if(name=="age"){
// return{
// fName:preValue.fName,lName:preValue.lName,age:value,gender:preValue.gender,
// email:preValue.email,contact:preValue.contact  
// }
// }
// else if(name=="gender"){
// return{
// fName:preValue.fName,lName:preValue.lName,age:preValue.age,gender:value,
// email:preValue.email,contact:preValue.contact  
// }
// }
// else if(name=="email"){
// return{
// fName:preValue.fName,lName:preValue.lName,age:preValue.age,gender:preValue.gender,
// email:value,contact:preValue.contact  
// }
// }
// else if(name=="contact"){
// return{
// fName:preValue.fName,lName:preValue.lName,age:preValue.age,gender:preValue.gender,
// email:preValue.email,contact:value  
// }}
// })
// }
// const onSubmits=(event)=>{
// event.preventDefault()
// alert("Submitted Successfully")
// }
// return(
// <div>
// <form onSubmit={onSubmits}>
// <h1>{fullName.fName}</h1><h1>{fullName.lName}</h1>
// <h1>{fullName.age}</h1><h1>{fullName.gender}</h1>
// <h1>{fullName.email}</h1><h1>{fullName.contact}</h1>
// <input type="text" placeholder="Enter Your Name"
// name="fName" onChange={inputEvent} value={fullName.fName}/>
// <input type="text" placeholder="Enter Your Last Name"
// name="lName" value={fullName.lName} onChange={inputEvent} />
// <input type="number" placeholder="Enter Your Age"
// name="age" value={fullName.age} onChange={inputEvent} />
// <input type="text" placeholder="Enter Your gender"
// name="gender" value={fullName.gender} onChange={inputEvent} />
// <input type="email" placeholder="Enter Your Email Address"
// name="email" value={fullName.email} onChange={inputEvent} />
// <input type="number" placeholder="Enter Your Contact Number"
// name="contact" value={fullName.contact} onChange={inputEvent} />
// <button typle="submit">Submit</button>
// </form>
// </div>
// )
// }
// export default App
// const App=()=>{
//         const [fullName,setFullName]=useState({
// fName:"",lName:"",age:"",email:"",contact:""
//         })
//         const inputEvent=(event)=>{
//         const {value,name}=event.target
//         setFullName((preValue)=>{
//         if(name==="fName"){
//         return{
// fName:value,lName:preValue.lName,age:preValue.age,
// email:preValue.email,contact:preValue.contact
//         }
//         }
//         else if(name==="lName"){
//                 return{
//         fName:preValue.fName,lName:value,age:preValue.age,
//         email:preValue.email,contact:preValue.contact
//                 }
//                 }
//         else if(name==="age"){
//                 return{
//         fName:preValue.fName,lName:preValue.lName,age:value,
//         email:preValue.email,contact:preValue.contact
//                 }
//                 }
//         else if(name==="email"){
//                 return{
//         fName:preValue.fName,lName:preValue.lName,age:preValue.age,
//         email:value,contact:preValue.contact
//                 }
//                 }
//         else if(name==="contact"){
//                 return{
//         fName:preValue.fName,lName:preValue.lName,age:preValue.age,
//         email:preValue.email,contact:value
//                 }
//                 }
//         })
//         }
// const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Successfully Submitted")
// }
// return(
// <div>
// <form onSubmit={onSubmits}>
// <h1>{fullName.fName}</h1>
// <h1>{fullName.lName}</h1>
// <h1>{fullName.age}</h1>
// <h1>{fullName.email}</h1>
// <h1>{fullName.contact}</h1>
// <input type="text" placeholder="Enter Your First Name"
// onChange={inputEvent} value={fullName.fName} name="fName"/>
// <input type="text" placeholder="Enter Your Last Name"
// onChange={inputEvent} value={fullName.lName} name="lName"/>
// <input type="number" placeholder="Enter Your Age"
// onChange={inputEvent} value={fullName.age} name="age"/>
// <input type="email" placeholder="Enter Your Email"
// onChange={inputEvent} value={fullName.email} name="email"/>
// <input type="number" placeholder="Enter Your contact"
// onChange={inputEvent} value={fullName.contact} name="contact"/>
// <button type="submit">Submit Now</button>
// </form>
// </div>        
// )
// }
// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=(event)=>{
//                 event.preventDefault()
//         setFullName(name)
//         }
//         return(
//         <div> 
//                 <form>       
//         <h1>{fullName}</h1>
//         <input type="text" placeholder="Write Your Name"
//         onChange={Events} />
//         <button onClick={Change}>Submit</button>
//         </form>
//         </div>
//         )
// }
// export default App

// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Enter Your Name"
//                 onChange={Events}/>
//                 <button onClick={Change}>Submit</button></div>
//         )
// }
// export default App

// export default App

// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Enter Your Name"
//                 value={fullName} onChange={Events}/>
//                 <button onClick={Change}>Submit</button></div>
//         )
// }
// export default App
// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()

//         const Event=(event)=>{
//         setName(event.target.value)
//         }

//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div>
//                 <h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Event}/>
//                 <button
//                 onClick={Change}>Submit</button>
//                 </div>
//         )
// }
// export default App




//  S L O T      M A C H I N E      G A M E


// const App=()=>{return(<div><h1>Welcome To 🎰 <span>Slot Matchine Game</span>🎰 </h1><Emojis /></div>)}




// export default App






///      D I G I T A L       C L O C K






// const App=()=>{
//         let time=new Date().toLocaleTimeString()
//         const[cTime,setCTime]=useState(time)
//         const UpdateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCTime(time)
//         }
//         // setInterval(UpdateTime)
//         return(
//                 <div><h1>{cTime}</h1>
//                 <button onClick={UpdateTime}>Get Current Time ⏲</button></div>
//         )
// }

// export default App







//       I N C          N U M B E R







// const App=()=>{
//         const[count,setCount]=useState(1000)
//         const IncNum=()=>{
//         setCount(count+10)
//         }
//         return(
//                 <div>
//                 <h1>{count}</h1>
//                 <button
//                 onClick={IncNum}>Hit Me</button>
//                 </div>
//         )
// }


// export default App









///      R     C        C




// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//         studentsInfo:[
//                 {
//         name:"Manahil",age:23
//                 },{
//         name:"Sahil",age:12
//                 },{
//         name:"Talha",age:26
//                 },{
//         name:"Zubair",age:20
//                 }
//         ]
// }
// deleteItem=(index)=>{
//         this.state.studentsInfo.splice(index,1)
//         this.setState({studentsInfo:this.state.studentsInfo})
// }
//         render() {
//                 return (
//                         <div>
// {this.state.studentsInfo.map((item,i)=>{
// return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button onClick={()=>this.deleteItem(i)}>Delete Me</button>
//         </div>
// )
// })}                                
//                         </div>
//                 )
//         }
// }








//   F U L L   F O R M    U S I N G      S T A T E





// const App=()=>{
//         const[fullName,setFullName]=useState({
// fName:"",lName:"",age:"",email:"",contact:""
//         })
//         const inputEvent=(event)=>{
//         const {value,name}=event.target
//         setFullName((preValue)=>{
//         if(name==="fName"){
//         return{
//         fName:value,
//         lName:preValue.lName,
//         age:preValue.age,
//         email:preValue.email,
//         contact:preValue.contact
//         }
//         } else
//         if(name==="lName"){
//                 return{
//                 fName:preValue.fName,
//                 lName:value,
//                 age:preValue.age,
//                 email:preValue.email,
//                 contact:preValue.contact
//                 }
//                 }
//         else if(name==="age"){
//                 return{
//                 fName:preValue.fName,
//                 lName:preValue.lName,
//                 age:value,
//                 email:preValue.email,
//                 contact:preValue.contact
//                 }
//                 }
//         else if(name==="email"){
//                         return{
//                         fName:preValue.fName,
//                         lName:preValue.lName,
//                         age:preValue.age,
//                         email:value,
//                         contact:preValue.contact
//                         }
//                         }
//         else if(name==="contact"){
//                 return{
//                 fName:preValue.fName,
//                 lName:preValue.lName,
//                 age:preValue.age,
//                 email:preValue.email,
//                 contact:value
//                 }
//                 }
//         })
//         }
//         const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Successfully Submitted")
//         }
//         return(
//         <div><form onSubmit={onSubmits}>
//         <h1>{fullName.fName}</h1>
//         <h1>{fullName.lName}</h1>
//         <h1>{fullName.age}</h1>
//         <h1>{fullName.email}</h1>
//         <h1>{fullName.contact}</h1>
//         <input type="text" placeholder="Enter Your First Name"
//         name="fName" onChange={inputEvent} value={fullName.fName}/>
//         <input type="text" placeholder="Enter Your Last Name"
//         name="lName" onChange={inputEvent} value={fullName.lName}/>
//         <input type="number" placeholder="Enter Your Age"
//         name="age" onChange={inputEvent} value={fullName.age}/>
//         <input type="email" placeholder="Enter Your Email Address"
//         name="email" onChange={inputEvent} value={fullName.email}/>
//         <input type="number" placeholder="Enter Your Contact Number"
//         name="contact" onChange={inputEvent} value={fullName.contact}/>
//         <button type="submit">Submit</button>
//         </form></div>
//         )
// }
// export default App
// const App=()=>{
//         const [fullName,setFullName]=useState({
// fName:"",lName:"",age:"",email:"",contact:""
//         })
//         const inputEvent=(event)=>{
//         const {value,name}=event.target
//         setFullName((preValue)=>{
//         if(name==="fName"){
//         return{
//         fName:value,lName:preValue.lName,age:preValue.age,
//         email:preValue.email,contact:preValue.contact
//         }
//         } 
//         else if(name==="lName"){
//         return{
//                 fName:preValue.fName,lName:value,age:preValue.age,
//                 email:preValue.email,contact:preValue.contact
//                 }
//                 }
//         else if(name==="age"){
//         return{
//                 fName:preValue.fName,lName:preValue.lName,age:value,
//                 email:preValue.email,contact:preValue.contact
//                 }
//                 }
//         else if(name==="email"){
//         return{
//                 fName:preValue.fName,lName:preValue.lName,age:preValue.age,
//                 email:value,contact:preValue.contact
//                 }
//                 }
//         else if(name==="contact"){
//         return{
//                 fName:preValue.fName,lName:preValue.lName,age:preValue.age,
//                 email:preValue.email,contact:value
//                 }
//                 }
//         })
//         }
//         const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Submitted")
//         }
//         return(
//         <div>
//         <form onSubmit={onSubmits}>
//         <h1>{fullName.fName}</h1>
//         <h1>{fullName.lName}</h1>
//         <h1>{fullName.age}</h1>
//         <h1>{fullName.email}</h1>
//         <h1>{fullName.contact}</h1>
//         <input type="text" placeholder="Enter Your First Name"
//         value={fullName.fName} name="fName" onChange={inputEvent}/>
//         <input type="text" placeholder="Enter Your Last Name"
//         value={fullName.lName} name="lName" onChange={inputEvent}/>
//         <input type="number" placeholder="Enter Your Age"
//         value={fullName.age} name="age" onChange={inputEvent}/>
//         <input type="email" placeholder="Enter Your Email Address"
//         value={fullName.email} name="email" onChange={inputEvent}/>
//         <input type="number" placeholder="Enter Your Contact Number"
//         value={fullName.contact} name="contact" onChange={inputEvent}/>
//         <button type="submit">Submit</button>
//         </form>
//         </div>
//         )
// }
// export default App
// const App=()=>{
//         const[fullName,setFullName]=useState({
//         fName:"",lName:"",email:"",contact:""
//         })
//         const inputEvent=(event)=>{
//         const{name,value}=event.target
//         setFullName((preValue)=>{
//         if(name==="fName"){
//         return{
//         fName:value,lName:preValue.lName,email:preValue.email,
//         contact:preValue.contact
//         }
//         }
//         else if(name==="lName"){
//         return{
//         fName:preValue.fName,lName:value,email:preValue.email,
//         contact:preValue.contact
//         }
//         }
//         else if(name==="email"){
//         return{
//         fName:preValue.fName,lName:preValue.lName,email:value,
//         contact:preValue.contact
//         }
//         }
//         else if(name==="contact"){
//         return{
//         fName:preValue.fName,lName:preValue.lName,email:preValue.email,
//         contact:value
//         }
//                 }
//         })
//         }
// const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Successfully Submitted")
// }
// return(
// <div>
// <form onSubmit={onSubmits}>
// <div>
// <h1>{fullName.fName}</h1>
// <h1>{fullName.lName}</h1>
// <h1>{fullName.email}</h1>
// <h1>{fullName.contact}</h1>
// <input type="text" placeholder="Write Your Name"
// name="fName" onChange={inputEvent} value={fullName.fName}/>
// <input type="text" placeholder="Write Your Last Name"
// name="lName" onChange={inputEvent} value={fullName.lName}/>
// <input type="email" placeholder="Write Your Email Address"
// name="email" onChange={inputEvent} value={fullName.email}/>
// <input type="number" placeholder="Write Your Phone Number"
// name="contact" onChange={inputEvent} value={fullName.contact}/>
// <button type="submit">Submit</button>
// </div>
// </form>
// </div>
// )
// }
// export default App
// const App=()=>{
//         const [fullName,setFullName]=useState({
//         fName:"",lName:"",email:"",phone:""
//         })
//         const inputEvent=(event)=>{
//         const{name,value}=event.target
//         setFullName((preValue)=>{
//         if(name==="fName"){
//                 return{
//         fName:value,lName:preValue.lName,email:preValue.email,
//         phone:preValue.phone
//                 }
//         }else if(name==="lName"){
//                 return{
//         fName:preValue.fName,lName:value,email:preValue.email,
//         phone:preValue.phone
//                 }
//         } else if(name==="email"){
//                 return{
//         fName:preValue.fName,lName:preValue.lName,email:value,
//         phone:preValue.phone
//                 }
//         }else if(name==="phone"){
//                 return{
//         fName:preValue.fName,lName:preValue.lName,email:preValue.email,
//         phone:value
//                 }
//         }
//         })
// }
// const onSubmit=(event)=>{
//         event.preventDefault()
//         alert("Hogaya Submit Ab Niklo")
// }
// return(
//         <div><form onSubmit={onSubmit}>
//         <h1>{fullName.fName}</h1><h1>{fullName.lName}</h1>
//         <h1>{fullName.email}</h1><h1>{fullName.phone}</h1>
//         <input type="text"placeholder="Write Your Name"
//         name="fName" onChange={inputEvent} value={fullName.fName}/>
//         <input type="text"placeholder="Write Your Last Name"
//         name="lName" onChange={inputEvent} value={fullName.lName}/>
//         <input type="email"placeholder="Write Your Email Address"
//         name="email" onChange={inputEvent} value={fullName.email}/>
//         <input type="number"placeholder="Write Your Phone Number"
//         name="phone" onChange={inputEvent} value={fullName.phone}/>
//         <button type="submit">Submit Now</button>
//         </form></div>
// )
// }
// export default App
// const App=()=>{
//         const[fullName,setFullName]=useState({
//         fName:"",
//         lName:"",
//         email:"",
//         phone:""
//         })
//         const inputEvent=(event)=>{
//         const{value,name}=event.target
//         setFullName((preValue)=>{
//         if (name==="fName"){
//                 return{
//                 fName:value,
//                 lName:preValue.lName,
//                 email:preValue.email,
//                 phone:preValue.phone
//                 }
//         }
//         else if (name==="lName"){
//                 return{
//                 fName:preValue.fName,
//                 lName:value,
//                 email:preValue.email,
//                 phone:preValue.phone
//                 }
//         }else if (name==="email"){
//                 return{
//                 fName:preValue.fName,
//                 lName:preValue.lName,
//                 email:value,
//                 phone:preValue.phone
//                 }
//         }else if (name==="phone"){
//                 return{
//                 fName:preValue.fName,
//                 lName:preValue.lName,
//                 email:preValue.email,
//                 phone:value
//                 }
//         }
//         })
//         }
//         const onSubmit=(event)=>{
//         event.preventDefault()
//         alert("Successfully Submitted")
//         }
//         return(
//         <div>
//         <form onSubmit={onSubmit}>
//         <h1>{fullName.fName}</h1>
//         <h1>{fullName.lName}</h1>
//         <h1>{fullName.email}</h1>
//         <h1>{fullName.phone}</h1>
//         <input type="text" placeholder="Write Your First Name"
//         name="fName" value={fullName.fName} onChange={inputEvent}/>
//         <input type="text" placeholder="Write Your First Last Name"
//         name="lName" value={fullName.lName} onChange={inputEvent}/>
//         <input type="email" placeholder="Write Your Email Address"
//         name="email" value={fullName.email} onChange={inputEvent}/>
//         <input type="number" placeholder="Write Your Phone Number"
//         name="phone" value={fullName.phone} onChange={inputEvent}/>
//         <button type="submit">Submit</button>
//         </form>
//         </div>
//         )
// }
// export default App
// const App=()=>{
//         const[fullName,setFullName]=useState({
//         fName:"",
//         lName:"",
//         email:"",
//         phone:""
//         })
//         const inputEvent=(event)=>{
//         const {value,name}=event.target
//         setFullName((preValue)=>{
//         if (name==="fName"){
//         return{
//         fName:value,
//         lName:preValue.lName,
//         email:preValue.email,
//         phone:preValue.phone
//         }
//         }
//         else  if (name==="lName"){
//                 return{
//                 fName:preValue.fName,
//                 lName:value,
//                 email:preValue.email,
//                 phone:preValue.phone
//         }
// }
// else  if (name==="email"){
//         return{
//         fName:preValue.fName,
//         lName:preValue.lName,
//         email:value,
//         phone:preValue.phone
// }
// }
// else  if (name==="phone"){
//         return{
//         fName:preValue.fName,
//         lName:preValue.lName,
//         email:preValue.email,
//         phone:value
// }
// }
//         })
// }
// const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Submitted")
// }
// return(
//         <div>
//         <form onSubmit={onSubmits}>
//         <h1>{fullName.fName}{fullName.lName}</h1>
//         <h1>{fullName.email}</h1><h1>{fullName.phone}</h1>
//         <input type="text" placeholder="Write Your Name"
//         name="fName" onChange={inputEvent} value={fullName.fName}
//         />
//         <input type="text" placeholder="Write Your Last Name"
//         name="lName" onChange={inputEvent} value={fullName.lName}
//         />
//         <input type="email" placeholder="Your Email"
//         name="email" onChange={inputEvent} value={fullName.email}
//         />
//         <input type="number" placeholder="Phone"
//         name="phone" onChange={inputEvent} value={fullName.phone}
//         />
//         <button type="submit">Submit</button>
//         </form>
//         </div>
// )
// }
// export default App
// const App=()=>{
//         const[fullName,setFullName]=useState({
//         fname:"",
//         lname:"",
//         email:"",
//         phone:"",
//         })
//         const inputEvent=(event)=>{
//                 console.log(event.target.value)
//                 console.log(event.target.name)
//         const{value,name}=event.target;
//         setFullName((preValue)=>{
//         if (name==="fName"){
//                 return{
//         fname:value,
//         lname:preValue.lname,
//         email:preValue.email,
//         phone:preValue.phone
//                 };
//         } else if(name==="lname"){
//                 return{
//         fname:preValue.fname,
//         lname:value,
//         email:preValue.email,
//         phone:preValue.phone
//                 }
//         }
//         else if(name==="email"){
//                 return{
//         fname:preValue.fname,
//         lname:preValue.lname,
//         email:value,
//         phone:preValue.phone
//                 }
//         }
//         else if(name==="phone"){
//                 return{
//         fname:preValue.fname,
//         lname:preValue.lname,
//         email:preValue.email,
//         phone:value
//                 }
//         }
//         })
//         }


// const onSubmits=(event)=>{
//         event.preventDefault()
//         alert("Successfully Submitted")
// }
// return(

//        <div> 
//         <form onSubmit={onSubmits}>

//         <h1>{fullName.fname}{fullName.lname}</h1>
//         <p>{fullName.email}</p> <p>{fullName.phone}</p>
//         <br/>

//         <input type="text" placeholder="Enter Your Name"
//         name="fName"
//         onChange={inputEvent}
//         value={fullName.fname} />
//         <br/>

//         <input type="text" placeholder="Enter Your Last Name"
//         name="lname"
//         onChange={inputEvent}
//         value={fullName.lname} />
//         <br/>

//        <input type="email" placeholder="Enter Your email"
//         name="email"
//         onChange={inputEvent}
//         value={fullName.email} />
//         <br/>

//         <input type="number" placeholder="Enter Your phone"
//         name="phone"
//         onChange={inputEvent}
//         value={fullName.phone} />
//         <br/>

//         <button type="submit">Submit</button>

//         </form>
//         </div>


// );
// }

// export default App














// const App=()=>{
//         const[name,setName]=useState()
//         const[lastName, setLastName]=useState()
//         const[fullName,setFullName]=useState()
//         const [lastNameNew,setLastNameNew]=useState()

//         const onSubmits=(event)=>{
//         event.preventDefault()
//         setFullName(name)
//         setLastNameNew(lastName)
//         }
//         const inputEventTwo=(event)=>{
//         setLastName(event.target.value)
//         }
//         const inputEvent=(event)=>{
//         setName(event.target.value)
//         }
//         return(
//                 <div>
//         <form onSubmit={onSubmits}>
//         <h1>{fullName} {lastNameNew}</h1>
//         <input type="text" placeholder="Write Your Name"
//         onChange={inputEvent} value={name}></input>
//         <input type="text" placeholder="Write Your Name"
//         onChange={inputEventTwo} value={lastName}></input>
//         <button type="submit">Submit</button>
//         </form>
//                 </div>
//         )
// }

// export default App

// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Events}/>
//                 <button
//                 onClick={Change}>Submit</button>
//                 </div>
//         )
// }
// export default App



// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName("Hello "+name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Events}/>
//                 <button
//                 onClick={Change}>Submit</button>
//                 </div>
//         )
// }
// export default App









//        F O  R M S        P A  R T      1








// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()

//         const Event=(event)=>{
//         setName(event.target.value)
//         }

//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div>
//                 <h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Event}/>
//                 <button
//                 onClick={Change}>Submit</button>
//                 </div>
//         )
// }
// export default App








//              S L O T      M A C H I N E







// import Emojis from "./Emojis";
// const App=()=>{
//         return(<div><h1>🎰 Welcome To<span>Slot Machine Game 🎰 </span></h1><Emojis /></div>)}

// export default App




//     D I G I T A L      C L O    C K  





// import { useState } from "react/cjs/react.development";

// const App=()=>{
//         let time=new Date().toLocaleTimeString()
//         const[cTime,setCtime]=useState(time)
//         const updateTime=()=>{
//                 var time=new Date().toLocaleTimeString()
//                 setCtime(time)
//         }
//         // setInterval(updateTime)
//         return(
//                 <div><h1>{cTime}</h1>
//                 <button
//                 onClick={updateTime}>Hit Me</button></div>
//         )
// }
// export default App





//    I N C        N U M






// const App=()=>{
//         const[count,setcount]=useState(0)
//         const IncNum=()=>{
//                 setcount(count+1)
//         }
//         return(
//                 <div><h1>{count}</h1>
//                 <button
//                 onClick={IncNum}>Hit Me</button></div>
//         )
// }
// export default App






//         R      C       C





// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//         studentsInfo:[
//                 {
//                         name:"Manahil",age:21
//                 },{
//                         name:"Sahil",age:12
//                 },{
//                         name:"Mannu",age:23
//                 }
//         ]
// }        
// deleteItem=(index)=>{
//         this.state.studentsInfo.splice(index,1)
//         this.setState({studentsInfo:this.state.studentsInfo})
// }
//         render() {
//                 return (
//                         <div>
// {this.state.studentsInfo.map((item,i)=>{
//         return(
//                 <div><h1>{item.name}</h1>
//                 <h1>{item.age}</h1>
//                 <button
//                 onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//         )
// })}                                
//                         </div>
//                 )
//         }
// }


// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Events=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Events}/>
//                 <button
//                 onClick={Change}>Submit</button></div>
//         )
// }
// export default App
// const App=()=>{
//         const[count,setCount]=useState(0)
//         const IncNUm=()=>{
//                 setCount(count+1)
//         }
//         return(
//                 <div><h1>{count}</h1>
//                 <button
//                 onMouseEnter={IncNUm}>Hit Me</button></div>
//         )
// }
// export default App
// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Event=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//                 <div><h1>{fullName}</h1>
//                 <input type="text" placeholder="Write Your Name"
//                 onChange={Event}></input>
//                 <button
//                 onClick={Change}>Submit</button></div>
//         )
// }
// export default App
// const App=()=>{
//         const [name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Event=(event)=>{
//         setName(event.target.value)
//         }
//         const change=()=>{
//         setFullName(name)
//         }
//         return(
//         <div><h1>{fullName}</h1>
//         <input type="text" placeholder="Write Your Name"
//         onChange={Event}/>
//         <button
//         onClick={change}>Submit</button></div>
//         )
// }
// export default App
// import React, { useState } from "react";
// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Event=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//         <div><h1>{fullName}</h1>
//         <input type="text" placeholder="Write Your Name" 
//         onChange={Event}/>
//         <button
//         onClick={Change}>Log In</button></div>
//         )
// }
// import React, {useState} from "react";
// const App=()=>{
//         let Time=new Date().toLocaleTimeString()
//         const [cTime,setCTime]=useState(Time)
//         const UpdateTime=()=>{
//                 let Time=new Date().toLocaleTimeString()
//                 setCTime(Time)
//         }
//         // setInterval(UpdateTime)
//         return(
//                 <div><h1>{cTime}</h1>
//                 <button
//                 onClick={UpdateTime}>Get Time</button></div>
//         )
// }

// const App=()=>{
//         const [count,setCount]=useState(0)
//         const IncNum=()=>{
//                 setCount(count+1)
//         }
//         return(
//                 <div><h1>{count}</h1>
//                 <button
//                 onClick={IncNum}>Hit Me</button></div>
//         )
// }


// const App=()=>{
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//             setCount(count+1)
//         }
//         return(
//             <div><h1>{count}</h1>
//             <button
//             onClick={incNum}>Hit Me</button></div>
//         )
//     }
//     export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//         studentsInfo:[
//         {
//         name:"Manahil",age:21
//         },{
//         name:"Sahil",age:12
//         },{
//         name:"Zubair",age:20
//         },{
//         name:"Talha",age:26
//         }
//         ]
// }
// deleteItem=(index)=>{
//         this.state.studentsInfo.splice(index,1)
//         this.setState({studentsInfo:this.state.studentsInfo})
// }
//         render() {
//                 return (
//                         <div>
// {this.state.studentsInfo.map((item,i)=>{
//         return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//         )
// })}                                
//                         </div>
//                 )
//         }
// }


// import React, { Component } from 'react'


// export default class App extends Component {
// state={
// studentsInfo:[
//         {
//                 name:"Manahil",age:21
//         },{
//                 name:"Sahil",age:12
//         },{
//                 name:"Syed Tanvir",age:45
//         },{
//                 name:"Maham",age:21
//         },{
//                 name:"Aifa",age:19
//         },{
//                 name:"Rija",age:16
//         }
// ]
// }        
// deleteItem=(index)=>{
//         this.state.studentsInfo.splice(index,1)
//         this.setState({studentsInfo:this.state.studentsInfo})
// }
//         render() {
//                 return (
//                         <div>
// {this.state.studentsInfo.map((item,i)=>{
//         return(
//                 <div><h1>{item.name}</h1>
//                 <h1>{item.age}</h1>
//                 <button
//                 onClick={()=>this.deleteItem(i)}>Delete ME</button></div>
//         )
// })}                                
//                         </div>
//                 )
//         }
// }





// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//         studentsInfo:[
//                 {
//         name:"Manahil",age:21
//                 },{
//         name:"Talha",age:26
//                 },{
//         name:"Sahil",age:12
//                 },{
//         name:"Zubair",age:20
//                 }
//         ]
// }        
// deleteItem=(index)=>{
//         this.state.studentsInfo.splice(index,1)
//         this.setState({studentsInfo:this.state.studentsInfo})
// }
//         render() {
//                 return (
//                         <div>
// {this.state.studentsInfo.map((item,i)=>{
//         return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//         )
// })}                                
//                         </div>
//                 )
//         }
// }



// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Event=(event)=>{
//         setName(event.target.value)
//         }
//         const Change=()=>{
//         setFullName(name)
//         }
//         return(
//         <div><h1>{fullName}</h1>
//         <input type="text" placeholder="Write Your Name"
//         onChange={Event}/>
//         <button
//         onClick={Change}>Submit</button></div>
//         )
// }
// const App=()=>{
//         const[name,setName]=useState()
//         const[fullName,setFullName]=useState()
//         const Event=(event)=>{
//         setName(event.target.value)
//         }
//         const onChange=()=>{
//         setFullName(name)
//         }
//         return(
//         <div><h1> Name {fullName}</h1>
//         <input type="text"placeholder="Write Your Name Sir"
//         onChange={Event}/>
//         <button
//         onClick={onChange}>SuBmit</button></div>
//         )
// }
// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Events=(event)=>{
//                 setName(event.target.value)
//         }
//         const onSubmit=()=>{
//                 setFullName(name)
//         }
//         return(
//                 <div><h1>Hello {fullName}</h1>
//                 <input type="text" placeholder="Please Enter Your Name"
//                 onChange={Events}></input>
//                 <button
//                 onClick={onSubmit}>Submit</button></div>
//         )
// }
// const App=()=>{
//         const [name,setName]=useState()
//         const [fullName,setFullName]=useState()
//         const Event=(event)=>{
//                 setName(event.target.value)
//         }
//         const onSubmit=()=>{
//                 setFullName(name)
//         }
//         return(
//                 <div><h1>Hello {fullName}</h1>
//                 <input type="text" placeholder="Please Enter Your Full Name"
//                 onChange={Event}/>
//                 <button
//                 onClick={onSubmit}>Submit</button></div>
//         )
// }
// const App=()=>{

// const [name,setName]=useState()
// const [fullName,setFullName] = useState()

// const inputEvent=(event)=>{
//         setName(event.target.value)
// }
// const onSubmit=()=>{
//         setFullName(name)
// }
//         return(
//                 <>
//         <div>
//         <h1> Hello {fullName} </h1>

//         <input type="text" placeholder="Enter Your Full Name" 
//         onChange={inputEvent}
//         />

//         <button
//         onClick={onSubmit}> Submit </button>
//         </div>
//         </>
//         )
// }

// export default App
// const App=()=>{
//         var color= "purple"
// const[name,setName]=useState("Cum To Me")
// const [bg,setBg]=useState(color)
//         const First=()=>{
//                 var color="yellow"
//         setBg(color)
//         setName("Hit Me")
//         }
//         const updateBg=()=>{
//         var color="orange"
//         setName("Get Out")
//         setBg(color)
//         }
//         return(
//         <div style={{background:bg}}><button
//         onMouseEnter={First} onClick={updateBg}>{name}</button></div>
//         )
// }
// export default App


// import Emojis from "./Emojis";
// const App=()=>{return(<div><h1 className="Heading">🎰 Welcome To <span>Slot Machine Game 🎰 </span></h1><Emojis /></div>)}

// export default App
// const App=()=>{
//         var color="black"
//         const [bg,setBg]=useState(color)
//         const[name,setName]=useState("Cum To Me")

//         const Firstbg=()=>{
//         var color="skyblue"
//         setBg(color)
//         setName("Hit Me")
//         }

//         const secBg=()=>{
//         var color="darkblue"
//         setBg(color)
//         setName("Fuck You Bitch")
//         }
//         return(
//                 <div style={{background:bg}}>
//                         <button
//                 onMouseEnter={Firstbg} onDoubleClick={secBg}>{name}</button>
//                 </div>
//         )
// }


// export default App

// import React from "react";
// import Emojis from "./Emojis";
// const App=()=>{
//         return(<div><h1 className="Heading">🎰 Welcome To <span>Slot Machine Game</span> 🎰 </h1><Emojis /></div> )}
// export default App

// import React from "react"
// import Emojis from "./Emojis"
// const App=()=>{return(<div><h1 className="Heading">🎰 Welcome To <span>🎰  Slot Machine Game 🎰 </span></h1><Emojis/></div>)}
// export default App
// import React, {useState} from "react";
// const App=()=>{
//         var color="black"
//         const[bg,setBg]=useState(color)
//         const[name,setName]=useState("Come To Me")

//         const Changebg=()=>{
//         var color="pink"
//         setBg(color)
//         setName("You Are Done")  
//         }
//         const Bgchange=()=>{
//         var color="skyblue"
//         setBg(color)
//         setName("Hit Again")
//         }
//         return(
//                 <div style={{background:bg}}>
//         <button
//         onClick={Changebg}
//         onMouseEnter={Bgchange}>{name}</button>
//                 </div>
//         )
// }

// const App=()=>{
//         var color="pink"
//         const [name,setName]=useState("Hover Me")
//         const [bg, setBg]=useState(color)

//         const Changebg=()=>{
//         var color="black"
//         setBg(color)
//         setName("Click Me")        
//         }

//         const bgChange=()=>{
//         var color="darkblue"
//         setBg(color)
//         setName("ouch!!")
//         }
//         return(
//         <div style={{background:bg}}>
//         <button
//         onDoubleClick={Changebg}
//         onMouseEnter={bgChange}>{name}</button>
//         </div>
//         )
// }
// const App=()=>{
//         var color="Black"
//         const[bg,setBg]=useState(color)
//         const[name,setName]=useState("Hover Me")

//         const changeBG=()=>{
//         var color="blue"
//         setBg(color)
//         setName("Click Me") 
//         }

//         const bgChange=()=>{
//         var color="pink"
//         setBg(color)
//         setName("Oouch!!")
//         }
//         return(
//         <div style={{background:bg}}>
//         <button
//         onClick={changeBG} onMouseEnter={bgChange}>{name}</button>
//         </div>
//         )
// }
// const App=()=>{
//         var color="Black"
//         const[bg,setBg]=useState(color)
//         const[name,setName]=useState("Click Me")

//         const bgChange=()=>{
//       var color="blue"
//       setBg(color)
//       setName("What")          
//         }
//         const changeBg=()=>{
//         var color="white"
//         setBg(color)
//         setName("Ouch!!")
//         }
//         return(
//                 <div style={{background:bg}}>
// <button onClick={bgChange} onMouseEnter={changeBg}>{name}</button>                        
//                 </div>
//         )
// }
// const App=()=>{
//         var color="Black"
//         const [name,setName]=useState("Click Me")
//         const [bG,setBg]=useState(color)

//         const changeBg=()=>{
//         var color="blue"
//         setBg(color)
//         setName("Ouch!!")
//         }
//         const ChangeBG=()=>{
//         var color="yellow"
//         setBg(color)
//         setName("What!!")
//         }
//         return(
//         <div style={{background:bG}}>
//                 <button
//         onClick={changeBg} onDoubleClick={ChangeBG}>{name}</button>
//         </div>
//         )
// }
// const App=()=>{
//         var color="#8e44ad";
//         const [name,setName]=useState("Click Me")
//         const [bg,setBg]=useState(color)

//         const changeBg=()=>{
//         let color="red"
//         setBg(color)
//         setName("Ouuch!!")
//         }
//         const Bg=()=>{
//         var color="pink"
//         setBg(color)
//         setName("What?")
//         }
//         return(
//         <div style={{background:bg}}>
//         <button onClick={changeBg} onMouseEnter={Bg}>{name}</button></div>
//         )
// }
// const App=()=>{
// var purple="#8e44ad";
// const [name,setName]=useState("Click Me")
// const [bg,setBg]=useState(purple)

// const ChangebG=()=>{
//         let newbg= "#34495e"
//         setBg(newbg)
//         setName("ouch!! 🤯")
// }
// const bG=()=>{
//         var color="orange"
//         setBg(color)
//         setName("It Worked")
// }

//         return(
//                 <div style={{backgroundColor:bg}}>
// <button 
// onClick={ChangebG} onMouseEnter={bG}>{name}</button>                        
//                 </div>
//         )
// }









// import React from "react";
// import Emojis from "./Emojis";


// const App=()=>{return(<><h1 className="Heading">🎰 Welcome To <span>🎰 Slot Machine Game 🎰 </span></h1><Emojis/></>)}
// export default App













// import React,{useState} from "react";
// const App=()=>{
// let time=new Date().toLocaleTimeString()
// const[cTime,setCtime]=useState(time)
// const updateTime=()=>{
//         time=new Date().toLocaleTimeString()
//         setCtime(time)

// }
// setInterval(updateTime)
// return(
//         <div><h1>{cTime}</h1></div>
// )
// }
// export default App
// import React,{useState} from "react";

// const App=()=>{
//         var time=new Date().toLocaleTimeString()
//         const[cTime,setCtime]=useState(time)
//         const updateTime=()=>{
//         var time=new Date().toLocaleTimeString()
//         setCtime(time)
//         }
//         return(
//                 <div><h1>{cTime}</h1>
//                 <button
//                 onClick={updateTime}>Get Time</button></div>
//         )
// }
// export default App

// import React, { useState } from "react";
// const App=()=>{
//         const [count,setCount]=useState(0)
//         const incNum=()=>{
//         setCount(count-1)
//         }
//         return(
//                 <div><h>{count}</h>
//                 <button
//                 onClick={incNum}>Hit Me</button></div>
//         )
// }
// export default App



// import React from "react";
// import "./index.css"
// import Emojis from "./Emojis";




// const App=()=>{
// return(<div><h1 className="Heading">🎰 Welcome To <span>🎰 Slot Machine Game</span>🎰</h1>
// <Emojis /></div>)
// }

// export default App



// import React from "react";
// import "./index.css"
// import SlotM from "./SlotM";


// const App=()=>{
//         return(
//         <>
// <div>

// <h1 className="Heading">🎰 Welcome To <span style={{fontWeight:"bold"}}>Slot Machine Game 🎰 </span></h1>
// </div>
{/* <SlotM x="😇"y="😇"z="😇" />
<SlotM x="🍎"y="🍌"z="🥭" />
<SlotM x="🛀" y="🛁"z="🛁"/>
<SlotM x="🦋" y="🦋" z="🦋"/> */}
// </>
//         )
// }


// export default App








//import React from "react";
// import "./index.css"


// const App=()=>{
// let x="😇"
// let y="😇"
// let z="😇"
// if ((x==y)&&(y==z)){
//         return(
// <div>
// <h1>🎰 Welcome To <span>Slot Machine Game 🎰 </span> </h1>
// </div>        
// )
// }
// }

// export default App





// import Amazon from "./Amazon";
// import Netflix from "./Netflix";

// const Favseries= "Amazon"

// const FavS= ()=>{
//         if (
// Favseries=="Netflix"
//         )
//         return(
//                 <Netflix />
//         )
//         else{
// return(
// <Amazon />                                          
//                 )
//         }
// }



// const App=()=>(
//     <>
//  {(Favseries=="Netflix")?<Netflix/>:<Amazon/>}
//     {/* <FavS /> */}
//     <h1 className="Heading">List Of Top 5 Netflix Series 2020</h1>
{/* {Sdata.map((val)=>{
        return(
<Card   
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        className={val.className}
        link={val.link}/>
        );
     })} */}
//      </>
// );
//        export default App





// import React ,{useState} from "react";
// const App=()=>{
//  var time=new Date().toLocaleTimeString()
//  const [cTime,setCtime]=useState(time)
//  const updateTime=()=>{
//      var time=new Date().toLocaleTimeString()
//      setCtime(time)
//  }
//  setInterval(updateTime)
//  return(
//      <div><h1>{cTime}</h1>
//      {/* <button
//      onClick={updateTime}>Get Time</button> */}
//      </div>
//  )
// }
// export default App

// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     studentsInfo:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Syed Tanvir",age:40
//         },{
//             name:"Talha",age:26
//         }
//     ]
// }    
// deleteItem=(index)=>{
//     this.state.studentsInfo.splice(index,3)
//     this.setState({studentsInfo:this.state.studentsInfo})
// }
//     render() {
//         return (
//             <div>
// {this.state.studentsInfo.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     // setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     students:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Talha",age:26
//         }
//     ]
// }    
// deleteItem=(index)=>{
//     this.state.students.splice(index,1)
//     this.setState({students:this.state.students})
// }
//     render() {
//         return (
//             <div>
// {this.state.students.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setcTime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default  App

// import React, {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const[cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>HIT ME</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     students:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Ahmed",age:23
//         },{
//             name:"Saleh",age:23
//         },{
//             name:"Bilawal",age:26
//         }
//     ]
// }    
// deleteItem=(index)=>{
//     this.state.students.splice(index,1)
//     this.setState({students:this.state.students})
// }
//     render() {
//         return (
//             <div>
// {this.state.students.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }



// import React , {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setcTime]= useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//     }
//     return (
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App

// import React,{useState} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     students:[
//         {
//             name:"Manahil",age:23
//         },{
//             name:"Ahmed",age:23
//         },{
//             name:"Saleh",age:22
//         },{
//             name:"Bilawal",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.students.splice(index,1)
//     this.setState({students:this.state.students})
// }
//     render() {
//         return (
//             <div>
// {this.state.students.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React ,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default  App

// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setcTime]= useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit ME</button></div>
//     )
// }
// export default  App

// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Ahmed",age:23
//         },{
//             name:"Saleh",age:23
//         },{
//             name:"Bilawal",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }



// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }

// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }

// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     shapatar:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Saleh",age:22
//         },{
//             name:"Ahmed",age:23
//         },{
//             name:"Bilawal",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.shapatar.splice(index,1)
//     this.setState({shapatar:this.state.shapatar})
// }
//     render() {
//         return (
//             <div>
// {this.state.shapatar.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React, {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default  App
// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:21
//             },{
//                 name:"Sahil",age:12
//             },{
//                 name:"Waseem",age:45
//             },{
//                 name:"Shapatar",age:22
//             }
//         ]
//     }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }    
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }



// import React ,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default  App
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Shapatar",age:23
//         },{
//             name:"Talha",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// const App=()=>{
//     const[count, setCount]=useState(10)
//     const incNum=()=>{
//         setCount(count-1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Shapatarr",age:22
//         },{
//             name:"Mannu",age:23
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }

// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default  App
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// import React,{useState} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:21
//             },{
//                 name:"Sahil",age:12
//             },{
//                 name:"Rija",age:15
//             },{
//                 name:"Maham",age:21
//             }
//         ]
//     }
//     deleteItem=(index)=>{
//         this.state.data.splice(index,1)
//         this.setState({data:this.state.data})
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.data.map((item,i)=>{
//                     return(
// <div><h1>{item.name}</h1>
// <h1>{item.age}</h1>
// <button
// onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// import React,{useState} from "react"
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }

// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]= useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }


// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]= useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }

// const App=()=>{
//     const [count,setCount]=useState(0)
//     const incNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:21
//             },{
//                 name:"Sahil",age:12
//             },{
//                 name:"Talha",age:25
//             },{
//                 name:"Mannu",age:23
//             }
//         ]
//     }
//     deleteItem=(index)=>{
//         this.state.data.splice(index,1)
//         this.setState({data:this.state.data})
//     }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }

// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime,1000)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// import React,{useState} from "react";
// const App=()=>{
// let time=new Date().toLocaleTimeString()
// const [cTime, setCtime]= useState(time)
// const updateTime=()=>{
//     time=new Date().toLocaleTimeString()
//     setCtime(time)
// }
// return(
//     <div><h1>{cTime}</h1>
//     <button
//     onClick={updateTime}>Get Time</button></div>
// )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]= useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:23
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Shapatar",age:45
//         },{
//             name:"Talha",age:27
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }    
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }

// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const[cTime,setCtime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setCtime(time)
//     }
//     setInterval(updateTime,1000)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//         setInterval(updateTime,1000)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Click Me And Get Time</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]= useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App

// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[{
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Talha",age:26
//         },{
//             name:"Shapaaatarr",age:23
//         }]
//     }
//     deleteItem=(index)=>{
//         this.state.data.splice(index,1)
//         this.setState({data:this.state.data})
//     }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name+" "+item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React, {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setCtime]= useState(time)
//     const updateTime=()=>{
//         time= new Date().toLocaleTimeString()
//         setCtime(time)

//     }
//     setInterval(updateTime,1000)
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// import React , {useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setcTime]=useState(time)
//     const updateTime=()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//         setInterval(updateTime,1000)
//     }    
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App

// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(time)
//     const updateTime = ()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//         setInterval(updateTime,1000)
//     }
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App
// import React ,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [ctime, setcTime]= useState(time)
//     const updateTime=()=>{
//         time=new Date().toLocaleTimeString()
//         setcTime(time)
//     }
//     return(
//         <div><h1>{ctime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]= useState(0)
//     const incNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:23
//             },{
//                 name:"Talha",age:25
//             },{
//                 name:"Sahil",age:12
//             },{
//                 name:"Zubair",age:21
//             }
//         ]
//     }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }    
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React,{useState} from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(time)
//     const updateTime = ()=>{
//         let time=new Date().toLocaleTimeString()
//         setcTime(time)
//         setInterval(updateTime,1000)
//     }
//     return(
//         <div><h1>{cTime}</h1></div>
//     )
// }
// export default App

// import React , {useState} from "react";
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime,setCtime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setCtime(newTime)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]= useState(0)
//     const incNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={incNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:21
//             },{
//                 name:"Sahil",age:12
//             },{
//                 name:"Shapatar", age:13
//             },{
//                 name:"Mannu",age:23
//             }
//         ]
//     }
//     deleteMe=(index)=>{
//         this.state.data.splice(index,1)
//         this.setState({data:this.state.data})
//     }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h2>{item.age}</h2>
//         <button
//         onClick={()=>this.deleteMe(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Shapatar",age:12
//         },{
//             name:"Mannu",age:23
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div>
//             <h1>{item.name}</h1>
//             <h1>{item.age}</h1>
//             <button
//             onClick={()=>this.deleteItem(i)}>Delete Me</button>
//         </div>
//     )
// })}
//             </div>
//         )
//     }
// }


// import React, {useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setcTime(newTime)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Hit Me</button></div>
//     )
// }

// const App=()=>{
//     const[count, setCount]=useState(0)
//     const updateTime=()=>{
//         setCount(count+1)
//     }
//     return(
//     <div><h1>{count}</h1>
//     <button
//     onClick={updateTime}>Hit Me</button></div>
//         )
// }

// import React,{useState} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// export default App



// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Mannu",age:23
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1><h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Shapatar",age:12
//         },{
//             name:"Mannu",age:23
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }



// import React,{useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setcTime(newTime)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }
// import React, {useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setCtime]=useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setCtime(newTime)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button></div>
//     )
// }

// import React, {useState} from "react"
// const App=()=>{
// let newTime=new Date().toLocaleTimeString()
// const [cTime, setcTime]= useState(newTime)
// const updateTime=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     setcTime(newTime)
// }
// return(
//     <div><h1>{cTime}</h1>
//     <button
//     onClick={updateTime}>Get Time</button></div>
// )
// }
// import React, { useState } from 'react'
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setcTime(newTime)
//     }
//     return (
//         <div>
//  <h1>{cTime}</h1>
//  <button
//  onClick={updateTime}>Get Time</button>           
//         </div>
//     )

// }




// import React, {useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
// const [cTime, setcTime]= useState(newTime)
// const updatedTime=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     setcTime(newTime)
// }
// return(
//     <div><h1>{cTime}</h1><button onClick={updatedTime}>Get Time</button></div>
// )
// }
// import React, {useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setCtime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setCtime(newTime)
//     }
//     return(
//         <div><h1>{cTime}</h1>
//         <button onClick={updateTime}>Get Time</button></div>
//     )
// }
// import React,{useState} from "react"
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [ctime, setcTime]= useState(newTime)
//     const updateTime=()=>{
//         let newTime=new Date().toLocaleTimeString()
//         setcTime(newTime)
//     }
//     return(
//         <div>
//             <h1>{ctime}</h1>
//             <button
//             onClick={updateTime}>Get Time</button>
//         </div>
//     )
// }
// import React, {useState} from "react"
// const App=()=>{
//     let newTime= new Date().toLocaleTimeString()
// const [cTime, setcTime]= useState(newTime)
// const updateTime=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     setcTime(newTime)
// }
// return(
//     <div>
//         <h1>{cTime}</h1>
//         <button
//         onClick={updateTime}>Get Time</button>
//     </div>
// )
// }

// import React,{useState} from "react";

// const App=()=>{
//     let newTime= new Date().toLocaleTimeString()
//     const [cTime, setcTime]= useState(newTime)
//     const updateTime=()=>{
//         newTime=new Date().toLocaleTimeString()
//         setcTime(newTime)
//     }
//     return(
//         <div>
//             <h1>{cTime}</h1>
//             <button
//             onClick={updateTime}>Get Time</button>
//         </div>
//     )
// }
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString()
//     const [cTime, setCtime]= useState(newTime)
//     const updateTime=()=>{
//         newTime=new Date().toLocaleTimeString()
//         setCtime(newTime)
//     }
//     return(
//         <div>
//             <h1>{cTime}</h1>
//             <button
//             onClick={updateTime}>Get Time</button>
//         </div>
//     )
// }

// const App=()=>{
//     var newTime=new Date().toLocaleTimeString()
//     const [cTime, setCtime]= useState(newTime)
//     const updateTime=()=>{
//         newTime=new Date().toLocaleTimeString()
//         setCtime(newTime)
//     }
//     return(
//         <div>
//             <h1>{cTime}</h1>
//             <button
//             onClick={updateTime}>Get Time</button>
//         </div>
//     )
// }
// export default App

// import React, {useState} from "react";
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Click Me</button></div>
//     )
// }
// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Mannu",age:23
//         },{
//             name:"Talha",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
// this.state.data.splice(index,1)
// this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1><h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button></div>
//     )
// })}                
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
// state={
//     data:[
//         {
//             name:"Manahil",age:21
//         },{
//             name:"Sahil",age:12
//         },{
//             name:"Mannu",age:23
//         },{
//             name:"Talha",age:26
//         }
//     ]
// }
// deleteItem=(index)=>{
//     this.state.data.splice(index,1)
//     this.setState({data:this.state.data})
// }
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div><h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//         <button
//         onClick={()=>this.deleteItem(i)}>Delete Me</button>
//         </div>
//     )
// })}
//             </div>
//         )
//     }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//     state={
//         data:[
//             {
//                 name:"Manahil",age:21
//             },{
//                 name:"Mannu",age:23
//             }
//         ]
//     }
//     deleteItem=(index)=>{
//         this.state.data.splice(index,1)
//         this.setState({data:this.state.data})
//     }    
//     render() {
//         return (
//             <div>
// {this.state.data.map((item,i)=>{
//     return(
//         <div>
// <h1>{item.name}</h1>
// <h1>{item.age}</h1>
// <button
// onClick={()=>this.deleteItem(i)}>Delete Item</button>
//         </div>
//     )
// })}                
//             </div>
//         )
//     }
// }


// import React, {useState} from "react"
// const App=()=>{
//     const[count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button onClick={IncNum}>Barha Isko Bhadway</button></div>
//     )
// }
// const App=()=>{
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button onClick={IncNum}>Fuck You</button></div>
//     )
// }
// const App=()=>{
//     const state= useState()
//     const [count,setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count-1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }

// const App=()=>{
// const state=useState()
// const [count,setCount]=useState(0)
// const IncNum=()=>{
//     setCount(count+1)
// }

//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }



// const App=()=>{
//     const state=useState()
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount (count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button onClick={IncNum}>Click Me</button></div>
//     )
// }


// const App=()=>{
//     const state=useState()
//     const[count,setCount]=useState(0)
//     const IncNum=()=>{
//         setCount (count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }

// const App=()=>{
//     const state=useState()
//     const [count,setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Click Me</button></div>
//     )
// }



// const App=()=>{
//     const state=useState()
//     const [count,setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button onClick={IncNum}>Hit Me</button></div>
//     )
// }
// const App=()=>{
//     const state= useState()
//     const[count,setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count-1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// const App=()=>{
//     const state=useState()
//     const[count, setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button
//             onClick={IncNum}>Hit Me</button>
//         </div>
//     )
// }
// const App=()=>{
//     const state=useState()
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount (count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// const App=()=>{
//     const state=useState()
//     const [count, setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }

// const App=()=>{
//     const state=useState()
//     const [count, setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count +1)
//     }
//     return(
//         <div><h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button></div>
//     )
// }
// export default App
// const App=()=>{
//     const state= useState()
//     const [count, setCount]=useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button
//             onClick={IncNum}>HiT Me</button>
//         </div>
//     )
// }
// export default App
// const App=()=>{
//     const state= useState()
//     const [count, setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h1> {count} </h1>
//             <button
//             onClick={IncNum}>Hit Me</button>
//         </div>
//     )
// }
// export default App

// import React, {useState} from "react";
// const App=()=>{
//     const state= useState()
//     const [count, setCount]= useState(0)
//     const IncNum=()=>{
//         setCount(count +1)
//     }
//         return(
//             <div>
//                 <h1> {count} </h1>
//                 <button
//                 onClick={IncNum}>Hit Me</button>
//             </div>
//         )
//     }
// export default App
// import React, {useState} from "react";
// const App=()=>{
//     const state= useState()
//     const [count, setCount]= useState(0)
// const IncNum=()=>{
//     setCount (count +1)
// }
//     return(
//     <div>
//         <h1> {count} </h1>
// <button onClick={IncNum}>Hit Me</button>
//     </div>)
// }
// export default App


// import React, {useState} from "react";
// const App=()=>{
//     const state= useState()
//     const [count, setCount]= useState(0)
// const IncNum=()=>{
//     setCount (count +1)
// }
// return(
//     <div>
//         <h1>{count}</h1>
//         <button
//         onClick={IncNum}>Hit Me</button>
//         </div>
// )
// }
// export default App
// import React, {useState} from "react";
// const App =()=>{
//     const state= useState()
//     const [count, setCount]= useState(0);
// const IncNum=()=>{
//     setCount (count +1)
// }
//         return(
//         <div>
//             <h1>{count}</h1>
//             <button
//             onClick={IncNum}>Hit ME</button>
//         </div>
//     )
// }
// export default App
// import React, {useState} from "react";
// const App =()=>{   
//         const state= useState()
//  const [count, setCount]= useState(0);
//     const IncNum=()=>{
//   setCount(count +1)
//     }
//     return(
//         <div>
//         <h1>{count}</h1>
//         <button
//         onClick={IncNum}>Click ME</button>
//         </div>
//     )
// }
// export default App
















// import React  from "react"
// function App(){

//         var date=new Date()
// var hours=date.getHours()
// var greeting={}
// const clr={}
// if (hours<7){
//   greeting="Good Night"
//   clr.color="grey"
// }
// else if(hours<12){
//   greeting="Good Morning"
//   clr.color="orange"
// }
// else if (hours<18){
//   greeting="Good Afternoon"
//   clr.color="yellow"
// }
// else{
//   clr.color="lightgreen"
//     greeting="Good Evening"
// }
// return (
//     <div className="Head">
//     <h1 className="heading">Hellow Sir,<span style={clr}>{greeting}</span></h1>
//     </div>
// )
//     }


// export default App


















// import React from "react";
// import {Sum, Sub, Mul, Div} from "./Calc"

// function App(){
//     return(
//    <ol>     
// <li>The sum of two numbers are{Sum(12,3)}</li>
// <li>The sub of two numbers are{Sub (12,3)}</li>
// <li>The mul of two numbers are{Mul(2,3)}</li>
// <li>The Div of two numbers are{Div(12,7)}</li>
// </ol>
//     )
// }
// export default App

// import React from "react";
// import {sum,sub,mul,div} from "./Calc"
// function App(){
//   return(
//   <ol>
//   <li>The Sum Of Two Numbers {sum(21,3)}</li>
//   <li>The Sub Of Two Numbers {sub(21,1)}</li>
//   <li>The Mul Of Two Numbers {mul(12,2)}</li>
//   <li>The Div Of Two Numbers {div(12,4)}</li>
// </ol>
//   )
// }
// export default App;







// import React from "react";
// import {sum, sub, mul, div} from "./Calc"

// function App(){
//   return (

//   <ol>
//   <li>The Sum Of Two Numbers Are{sum(12,3)}</li>
//   <li>The Sub Of Two Numbers Are{(sub(12,3))}</li>
//   <li>The Mul Of Two Numbers Are{mul(2,3)}</li>
//   <li>The Div Of Two Numbers Are{div(21,9)}</li>
// </ol>
//   )
// }

// export default App





// import {add, sub, mul, div} from "./Calc"


// function App(){
//   return(
//     <> 
//  <ul>
//     <li>The Sum Of Two Numbers is Is{add(12,3)}</li>
//     <li>The Sub Of Two Numbers is{sub(21,3)}</li>
//     <li>The Mul Of Two Numbers is{mul(2,3)}</li>
//     <li>The Div Of Two Numbers is{div(22,6)}</li>
//   </ul>
//   </>
//   )
// }
// export default App;





// import react from "react";


// function App(){
//   var date=new Date()
// var hours=date.getHours()
// var greeting=""
// var ccolor={}
// if (hours<7){
// greeting="Good Night"
// ccolor.color="darkblue"
// }
// else if(hours<12){
//   greeting="Good Morning"
//   ccolor.color="orange"
// }
// else if(hours<20){
//   greeting="Good AfterNoon"
//   ccolor.color="yellow"
// }
// else{
//   greeting="Good Evening"
//   ccolor.color="purple"
// }
// return(
//   <div className="heading">
//   <h1><span style={{color:"pink"}}> Hellow Sir,</span> <span style={ccolor}>{greeting}</span></h1>  
//   </div>
// )


// }
// export default App;






// import React from "react";
// import ReactDom from "react-dom";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List"

// function App(){
//  return (
//    <>
//    <Heading />
//    <Para />
//    <List />
//    </>
//  )
// }



// export default App;