import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal: 0
    };

    // gets setProducts after component is inserted into the tree
    componentDidMount() {
        this.setProducts();
    }

    // gets a copy of the list of products instead of referencing them
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    };

    // opens modal after adding item to cart
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true};
        })
    };

    // closes modal
    closemodal = () => {
        this.setState(() => {
            return {modalOpen: false};
        })
    };

    // get product by id
    getItem = (id) => {
        return this.state.products.find(item => item.id === id);
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    };

    // adds product to cart
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts, cart: [...this.state.cart,
                    product]
            };
        }, () => {
            console.log(this.state)
        });
    };

    increment = (id) => {
        console.log('increment method');
    };

    decrement = (id) => {
        console.log('decrement method');
    };

    removeItem = (id) => {
        console.log('item removed');
    };

    clearCart = () => {
        console.log('cart cleared');
    };

    render() {
        return (
            // value of context can be an object - data this way is handled similar to redux
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closemodal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
