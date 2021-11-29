import React from 'react'

const Buttons = ({ breakFast, setFields, Menu, allValues }) => {
    return (
        <>
            <div className="mt-2 d-flex justify-content-around">
                {
                    allValues.map((item, index) => {
                        return (
                            <button className="btn-warning" key={index}
                                onClick={() => breakFast(item)}>{item}</button>
                        )
                    })
                }

                {/* <button className="btn-warning"
                    onClick={() => breakFast("Lunch")}>Lunch</button>
                <button className="btn-warning"
                    onClick={() => breakFast("Dinner")}>Dinner</button>
                <button className="btn-warning"
                    onClick={() => setFields(Menu)}>All</button> */}
            </div>
        </>
    )
}

export default Buttons