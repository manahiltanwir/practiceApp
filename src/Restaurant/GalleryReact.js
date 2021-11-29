import React, { useState } from 'react'
import Buttons from '../Restaurant/Buttons'
import Menu from "./Menu"
import Common from "../Restaurant/Common"


export const GalleryReact = () => {
    const allValues = [...new Set(Menu.map((item, index) => item.category)), "all"]

    const [fields, setFields] = useState(Menu)
    const breakFast = (id) => {
        if (id === "all") {
            setFields(Menu)
            return;
        }
        const updatedData = Menu.filter((item) => {
            return (
                item.category == id
            )
        })
        setFields(updatedData)
    }
    return (
        <>
            <h1 className="text-center mt-5"> Order Your Favourite Food </h1>
            <hr />
            <Buttons
                breakFast={breakFast}
                setFields={setFields}
                Menu={Menu}
                allValues={allValues} />
            <div className="menu-items container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row my-5">
                            {
                                fields.map((item, index) => {
                                    return (
                                        <>
                                            <Common
                                                a={item.images}
                                                b={item.name}
                                                c={item.category}
                                                d={item.price}
                                                e={item.description}
                                                f={item.id} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GalleryReact