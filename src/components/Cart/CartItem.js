import React from 'react';

export default function CartList({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {changeQuantity, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            {/*product image*/}
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height: '5rem'}} alt="product" className={"img-fluid"}/>
            </div>

            {/*product title*/}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span> {title}
            </div>

            {/*product price*/}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: R$</span> {price}
            </div>

            {/*decrement button*/}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-dark mx-1" onClick={() => changeQuantity(id, true)}>-</span>
                    <span className={"btn btn-dark mx-1"}>{count}</span>
                    <span className="btn btn-dark mx-1" onClick={() => changeQuantity(id, false)}>+</span>
                </div>
            </div>

            {/*remove buton*/}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div>

            {/*product total*/}
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: R$ {total}</strong>
            </div>
        </div>
    );
}

