import Product from "./Product";

function ProductList({ products, basket, setBasket }) {
    return (
        <div style={{ marginLeft: '5rem', marginRight: '5rem', padding: '5rem', }}>

            <div className="product-card">
                {
                    products.map((product, index) => (
                        <Product key={index} product={product} basket={basket} setBasket={setBasket} />
                    ))
                }
            </div>
        </div>
    );
}

export default ProductList;
