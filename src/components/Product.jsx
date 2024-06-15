import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import '../css/product.css';

function Product(props) {
    const { product, setBasket } = props;
    const { title, price, description, category, image } = product;

    const clickHandler = () => {
        setBasket(prevBasket => [...prevBasket, product]);
    };

    if (!product) {
        return <h1>No product available</h1>;
    }

    return (
        <Card className="card" style={{ width: '18rem', marginBottom: '10px', marginTop: '10px' }}>
            <img alt="Sample" src={image} className="card-img-top" />
            <CardBody className="card-body">
                <CardTitle tag="h5" className="card-title">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted card-subtitle" tag="h6">{category}</CardSubtitle>
                <CardSubtitle className="mb-2 text-muted card-subtitle tag-h2">Price={price}$</CardSubtitle>
                <CardText className="card-text">{description}</CardText>
                <Button onClick={clickHandler} className="button">Sepete Ekle</Button>
            </CardBody>
        </Card>
    );
}

export default Product;
