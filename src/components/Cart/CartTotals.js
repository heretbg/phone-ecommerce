import React from 'react';
import {Link} from "react-router-dom";

export default function CartTotals({value}) {
    const {cartTotal, cartSubTotal, cartTax, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                        {/*TODO modal asking for confirmation and sweet alert, then move to homepage*/}
                        {/*clear cart button*/}
                        <Link to={"/"}>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type={"button"} onClick={() => clearCart}>
                                clear cart
                            </button>
                        </Link>

                        {/*cart subtotal*/}
                        <h5>
                            <span className="text-title">Subtotal: </span>
                            <strong>R$ {cartSubTotal}</strong>
                        </h5>

                        {/*tax*/}
                        <h5>
                            <span className="text-title">Tax: </span>
                            <strong>R$ {cartTax}</strong>
                        </h5>

                        {/*cart total*/}
                        <h5>
                            <span className="text-title">Total: </span>
                            <strong>R$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
