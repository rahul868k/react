import React, { useState } from 'react'
import './gallery.css'
import Menu from './menu'


const Gallery = () => {

    const [items, setItems] = useState(Menu)

    const filterItem = (catItem) =>{
        const updatedItems =Menu.filter((curElem) =>{
            return curElem.category ===catItem
        })
        setItems(updatedItems)
    }
    return (
        <>  {/*fragment format*/}

            <div className="main-heading">
                <h1>Select your favorite Dish</h1>
            </div>
            <hr />
            <div className="menu-tabs container mt-3">
                <div className="menu-tab d-flex justify-content-around flex-wrap">
                    <button className="btn btn-warning" onClick={()=> filterItem('breakfast')} >Breakfast</button>
                    <button className="btn btn-warning" onClick={()=> filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={()=> filterItem('snacks')}>Snacks</button>
                    <button className="btn btn-warning" onClick={()=> filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={()=> setItems(Menu)}>All</button>
                </div>
            </div>

            {/* menu items section */}

            <div className="menu-items container-fluid mt-lg-4 mt-md-3 mt-sm-0">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">

                            {
                                items.map(elem => {
                                    const { id,image, name, description, price } = elem;

                                    return (
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row g-2 item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 img-div d-flex justify-content-center">
                                                    <img src={image} alt={name} className='img-fluid'/>
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-2 pb-1">
                                                        <h4>{name}</h4>
                                                        <p>{description}</p>
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
                                        </div>
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

export default Gallery
