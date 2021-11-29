import React from 'react'
import GalleryReact from './GalleryReact'
export const Common = ({ a, b, c, d, e, f }) => {
    return (
        <>

            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4" key={f}>
                <div className="row item-inside mt-4 mr-2">
                    <div className="col-12 col-md-2 col-lg-4 img-div">
                        <img src={a} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                            <h1>{b}</h1>
                            <h2>{c}</h2>

                        </div>
                        <div className="price">
                            <div className="price-divide d-flex justify-content-around align-items-center">
                                <h2>{d}</h2>

                                <a href=""
                                    onClick={(e) => {
                                        e.preventDefault()
                                        alert("Added To Cart")
                                    }}>
                                    <button className="btn-primary">Order Now</button>
                                </a>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Common