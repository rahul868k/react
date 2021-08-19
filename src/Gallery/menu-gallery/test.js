import React, { useState } from 'react'
import './gallery.css'
import Menu from './menu'

const Test = () => {

    const [items, setItems] = useState(Menu)

    const filterItem = (catItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === catItem
        })
        setItems(updatedItems)
    }
    return (
        <>  {/*fragment format*/}

            <h1 className="mt-5 text-center main-heading">Select your favorite Dish</h1>
            <hr />

            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around flex-wrap">
                    <button className="btn btn-warning" onClick={() => filterItem('breakfast')} >Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('snacks')}>Snacks</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* menu items section */}

            <div className="menu-items container-fluid mt-lg-4 mt-md-3 mt-sm-0">
                <div className="row">
                    <div className="col-12">
                        <div className="row">

                            {
                                items.map(elem => {
                                    const { id,image, name, description, price } = elem;

                                    return (
                                        <>
                                         <div className="col-lg-4 col-md-6 gy-5">
                                            <div className="row">
                                                <div className="col-md-4 img-div">
                                                    <img src={image} alt={name} className='img-fluid' />
                                                </div>
                                                <div className="col-md-8 main-con">
                                                    <h4>{name}</h4>
                                                    <p>{description}.</p>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between">
                                                            <h4>Price: {price}</h4>
                                                            <a href="####">
                                                                <button className="btn btn-primary">Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>Prices may vary on selected distances</p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
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

export default Test























// import './gallery'


// import React from 'react'

// const Test = () => {
//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-4 ">
//                         <div className="row">
//                             <div className="col-3 img-div">
//                                 <img src={Pizza} alt="" className='img-fluid' />
//                             </div>
//                             <div className="col-9 main-con">
//                                 <h4>rahul</h4>
//                                 <p>Lorem, ipsum.</p>
//                                 <div className="menu-price-book">
//                                     <div className="price-book-divide d-flex justify-content-between">
//                                         <h4>Price: 10</h4>
//                                         <a href="####">
//                                             <button className="btn btn-primary">Order Now</button>
//                                         </a>
//                                     </div>
//                                     <p>Prices may vary on selected distances</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Test
