import React from 'react'

function Card_Container({oldprice,newprice,image}) {
    return (
        <div className="card ">
            <div className="card-image">
                <img src={image} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between"><span>Men's Watch </span><span>Rate Product</span>
                </h5>
                <h5 className="card-title d-flex justify-content-between"><span>{newprice} <span className="text-secondary text-decoration-line-through fs-6">{oldprice}</span><span className="text-success fs-6 ms-2">50%off</span> </span><span className="text-warning"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular  fa-star" /><i className="fa-regular fa-star" /></span></h5>
                <h5 className="text-center">
                    <button className="Add-to-cart">Add To cart</button>
                </h5>
            </div>
        </div>
    )
}

export default Card_Container;
