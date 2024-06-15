import { Button } from "reactstrap";
import BasketItem from "../components/BasketItem";
import { useCallback, useState } from "react";

function Basket({ items, setBasket }) {

    const clickHandler = () => {
        setBasket([])
    }

    return (<>
        <div className="basket">
            {items.length === 0 ? (
                <h2>Sepetiniz boş</h2>
            ) : (
                items.map((item) => (
                    <BasketItem key={item.id} item={item} setBasket={setBasket} />
                ))

            )}

        </div>
        <Button onClick={clickHandler} style={{ width: '100%' }}> Sepeti Temizle</Button>
    </>
    );
}

export default Basket;
