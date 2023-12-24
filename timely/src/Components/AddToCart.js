import React from 'react'
import './AddToCart.css'


const AddToCart = () => {
    return (
        <section className>
             <div className="border rounded-5">
                 <section className="w-100 p-5 gradient-custom addtocart" >

                     <div className="row">
                         <div className="col-md-8">
                             <div className="card cardleft mb-4">
                                 <div className="card-header py-3">
                                     <h5 className="mb-0">Cart - Items</h5>
                                 </div>
                                 <div className="card-body Cart">

                                     <div className="row">
                                         <div className="d-flex justify-content-center col-lg-3 col-md-12 mb-4 mb-lg-0">

                                             <div className=" Cart-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                 <img src="http:127.0.0.1:5500/handtime-html/images/w4.png" className="w-100" alt="Blue Jeans Jacket" />
                                                 <a href="#!">
                                                     <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}>
                                                     </div>
                                                 </a>
                                             </div>

                                         </div>
                                         <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                             {/* Data */}
                                             <p><strong>Men's Watch</strong></p>
                                             <p>Color: black</p>
                                             <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item" fdprocessedid="ygtzj">
                                                 <i className="fas fa-trash" />
                                             </button>
                                             <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list" fdprocessedid="7h5j9n">
                                                 <i className="fas fa-heart" />
                                             </button>
                                             {/* Data */}
                                         </div>
                                         <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                             {/* Quantity */}
                                             <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                 <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" fdprocessedid="hmvgju">
                                                     <i className="fas fa-minus" />
                                                 </button>
                                                 <div className="form-outline">
                                                     <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" fdprocessedid="al5k4p" />
                                                 </div>
                                                 <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" fdprocessedid="xdp80i">
                                                     <i className="fas fa-plus" />
                                                 </button>
                                             </div>
                                             {/* Quantity */}
                                             {/* Price */}
                                             <p className="text-start text-md-center">
                                                 <strong>$17.99</strong>
                                             </p>
                                             {/* Price */}
                                         </div>
                                     </div>
                                     {/* Single item */}
                                     <hr className="my-4" />
                                     {/* Single item */}
                                     {/* Single item */}
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4 d-flex flex-column justify-content-center">
                             <div className="card mb-4">
                                 <div className="card-header py-3">
                                     <h5 className="mb-0">Price Details</h5>
                                 </div>
                                 <div className="card-body">
                                     <ul className="list-group list-group-flush">
                                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                             Subtotal
                                             <span>$53.98</span>
                                         </li>
                                         <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                             Shipping
                                             <span>Gratis</span>
                                         </li>
                                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                             <div>
                                                 <strong>Total amount</strong>
                                                 <strong>
                                                     <p className="mb-0">(including VAT)</p>
                                                 </strong>
                                             </div>
                                             <span><strong>$53.98</strong></span>
                                         </li>
                                     </ul>
                                     <button type="button" className="btn btn-primary btn-lg btn-block" fdprocessedid="xlciem">
                                         Go to checkout
                                     </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
             </div>
         </section>
        


        
    
   

    );
}

export default AddToCart
