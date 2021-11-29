import React from "react"
var year = new Date().getFullYear()

const Footer=()=>{
    return(
        <div class="footer text-center">
        
       
        <div class="card-footer text-muted">
  Copyright  ©     {year}
        </div>
      </div>
    )
}
export default Footer