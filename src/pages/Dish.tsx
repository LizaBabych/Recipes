import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { AppState } from "../store/state";
import { IMenuItem } from "../store/menu/menu.state";
import { getItem } from "../api/getMenu";

const Dish = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<IMenuItem | undefined>(undefined);
  const menuItems = useSelector((state: AppState) => state.menu.menuItems);

  useEffect(() => {
    if (menuItems.length) {
      setItem(menuItems.find((menuItem) => menuItem.id === +id));
    } else {
      getItem(id).then((data) => {
        setItem(data as any);
      });
    }
  }, [menuItems]);

  return (
    <div className="App">
      <Header />
      {item && (
        <div className="wrapper-dish">
          <img className="img-dish" src={item.img} alt="#" />
          <div className="description">
            <h4>{item.dish}</h4>
            <p>{item.description}</p>
            <h4>Measurement: {item.measurement}</h4>
            <h4>Ingredients</h4>
            <ul>
              {item.ingredient.map((ingr, ind) => (
                <li key={ind}>{ingr}</li>
              ))}
            </ul>
            <h4>Receipt</h4>
            <ul className="receipt">
              {item.receipt.map((step, ind) => (
                <li key={ind}>
                  <p>
                    <b>{`STEP ${ind + 1}`} </b>
                  </p>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dish;
