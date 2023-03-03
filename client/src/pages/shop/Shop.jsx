import React, { useContext } from 'react';
import Layout from "../../components/shared/Layout";
import FeaturedProduct from "../../components/shared/FeaturedProduct";
import { ProductContext } from "../../context/ProductContext";
import './shop.styles.scss';

function Shop(props) {
    const { products } = useContext(ProductContext);
    const allProducts = products.map(product => (
        <FeaturedProduct { ...product } key={product.id} />
    ));
    return (
        <Layout>
            <div className="product-list-container">
                <h2 className="product-list-title">Shop</h2>
                <div className="product-list">
                    {
                        allProducts
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Shop;