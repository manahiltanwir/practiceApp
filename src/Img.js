import React from 'react'

export const Img = ({ fields }) => {
    const img = (`https://source.unsplash.com/600x300?${fields}`)
    return (
        <>
            <div className="images mt-5">
                {
                    fields == "" ? null : <img src={img} />
                }
            </div>
        </>
    )
}
export default Img
// import React from 'react'
// const Img=({text})=>{
//     const img=(`https://source.unsplash.com/600x300?${text}`)
//     return(
//     <>
//     <img src={img}/>
//     </>
//     )
// }
// export default Img
// const Img=({name})=>{
//     const img = (`https://source.unsplash.com/600x300?${name}`)
//     return(
//     <>
//     <img  src={img} />
//     </>
//     )
// }
// export default Img
// import React from 'react'
// const Img=({name})=>{
//     const img = (`https://source.unsplash.com/600x300?${name}`)
//     return(
//     <>
//     <img src={img}/>
//     </>
//     )
// }
// export default Img
// import React from 'react'
// const Img=({name})=>{
//     const img=(`https://source.unsplash.com/600x300?${name}`)
//     return(
//         <>
//     <img src={img} alt="BarayGanduHoJigar"/>
//     </>
//     )
// }
// export default Img