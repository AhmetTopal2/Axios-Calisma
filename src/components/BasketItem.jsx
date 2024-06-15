import { Button } from "reactstrap";

function BasketItem({ item, setBasket }) {
    const { title, price, id, image } = item;
    const clickHandler = () => {
        setBasket((prevBasket) => prevBasket.filter(basketItem => basketItem.id !== id));
    };
    return (
        <>
            <div className="basket-item-card">
                <div>
                    <img src={image} alt="" className="basket-item-image" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <h4>{price}</h4>
                </div>
                <div style={{ display: "flex", alignItems: `center` }}>
                    <Button onClick={clickHandler} style={{ backgroundColor: `red` }}>Kaldir</Button>
                </div>
            </div>
            
        </>
    );
}

export default BasketItem;
