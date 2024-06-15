import { Button } from "reactstrap";
import BasketItem from "../components/BasketItem";
import { useCallback, useState } from "react";

function Basket({ items, setBasket }) {
    // Calculate the total price of the items in the basket
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    const clickHandler = () => {
        setBasket([]);
    };

    return (
        <>
            <div className="basket">
                {items.length === 0 ? (
                    <h2>Sepetiniz boş</h2>
                ) : (
                    items.map((item) => (
                        <BasketItem key={item.id} item={item} setBasket={setBasket} />
                    ))
                )}
            </div>
            {items.length > 0 && (
                <div style={{ marginTop: '20px', textAlign: 'right', fontWeight: 'bold' }}>
                    Toplam Fiyat: {totalPrice.toFixed(2)} TL
                </div>
            )}
            <Button onClick={clickHandler} style={{ width: '100%', marginTop: '10px' }}>
                Sepeti Temizle
            </Button>
        </>
    );
}

export default Basket;
