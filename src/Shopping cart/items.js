import React,{useState} from 'react'
import { Products } from './Products'

const Items = () => {
    const [items] = useState(Products)
    return (
        <>
            {
                items.map(item =>{
                    // const {id,title,description,price,img,quantity} = item;

                    return(
                        <>
                            <div className="items-info" key={item.id} {...item}>
                                <div className="product-img">
                                    <img src={item.img} alt="products" />
                                </div>
                                <div className="title">
                                    <h2> {item.title} </h2>
                                    <p> {item.description} </p>
                                </div>
                                <div className="add-minus-quantity">
                                    <i className="fas fa-minus minus"></i>
                                    <input type="text" placeholder={item.quantity} />
                                    <i className="fas fa-plus add"></i>
                                </div>
                                <div className="price">
                                    <h3> {item.price} </h3>
                                </div>
                                <div className="remove-item">
                                    <i className="fas fa-trash-alt remove"></i>
                                </div>
                                
                            </div>
                            <hr />
                        </>
                    )
                })
            }
        </>
    )
}

export default Items
