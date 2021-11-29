import React from "react";
function Card(props){
  return(
<div className="cards">
  <div className="card">
<img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
<div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.className}</p>
  <a href={props.link} className="btn btn-dark">Watch Now</a>
</div>
</div>
</div>
  )
}
export default Card
// import React from "react"
// function  Cards(props) {
//     return(
        
//     <div class="card">
//   <img class="card-img-top" src={props.img}/>
//   <div class="card-body">
//     <h5 class="card-title">{props.title}</h5>
//     <p class="card-text">{props.text}</p>
//     <a href={props.link} class="btn btn-primary">Watch Now</a>
//   </div>

// </div>
//     )
// }
// export default Cards



// import React from "react";
// function Cards(props){
//     return(
//     <div className="Cards">
//   <div className="card">
//     <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
//     <div className="card-body">
//       <h5 className="card-title">{props.name}</h5>
//       <p className="card-text">{props.title}</p>
//       <a href={props.link} className="btn btn-primary">Watch Here</a>
//     </div>
//   </div>
//   </div>
//     )
//   }
// export default Cards





// import React from "react";

// function Card(props){
//     return(
//        <>
//         <div className="Cards">
//     <div className="card">
//     <img  className="card-img-top" src={props.imgsrc}/>
//     <div className="card-body">
//       <span className={props.sname}></span>
//       <h3 className={props.title}></h3>
//       <a href={props.link} className="primary">Watch Now</a>
//     </div>
//     </div>
//     </div>
//    </>
//       )
// }
// export default Card