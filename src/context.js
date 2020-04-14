import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
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

    handleDetail = () => {
        console.log('hello from detail');
    };
    addToCart = () => {
        console.log('hello from add to cart');
    };

    render() {
        return (
            // value of context can be an object - data this way is handled similar to redux
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
