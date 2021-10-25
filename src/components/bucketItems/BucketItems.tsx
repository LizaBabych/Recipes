import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DeleteItemFromBucketAct,
  RemoveItemFromBucketAct,
  SetItemToBucketAct,
} from "../../store/menu/menu.actions";
import { IDish } from "../../types";
import { IMenuItem } from "../../store/menu/menu.state";

interface IItemsProps {
  items: Array<IMenuItem>;
}

const BucketItems: React.FC<IItemsProps> = ({ items }) => {
  const dispatch = useDispatch();

  const setItemToBucket = (item: IDish) => {
    dispatch(SetItemToBucketAct(item));
  };

  const deleteItemFromBucket = (item: IDish) => {
    dispatch(DeleteItemFromBucketAct(item));
  };

  const takeItemFromBucket = (item: IMenuItem) => {
    if (item.countInBucket > 1) {
      dispatch(RemoveItemFromBucketAct(item));
    }
  };

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      items.reduce((acc: any, item: any) => {
        if (item.countInBucket) {
          return acc + item.price * item.countInBucket;
        } else return acc;
      }, 0)
    );
  });

  return (
    <div className="bucket-body">
      <div className="bucket-item">
        <h3>Chopping Cart {!total && "Empty"} </h3>
      </div>
      {total !== 0 &&
        items.map((item: IMenuItem) => {
          if (item.countInBucket) {
            return (
              <div className="bucket-item" key={item.id}>
                <img className="bucket-dish" src={item.img} alt="#" />
                <div className="item-description">
                  <b className="mb-1">{item.dish}</b>
                </div>
                <div className="item-count">
                  <button
                    className="btn add-btn"
                    onClick={() => takeItemFromBucket(item)}
                  >
                    -
                  </button>
                  <h5 className="mb-1">{item.countInBucket}</h5>
                  <button
                    className="btn add-btn"
                    onClick={() => setItemToBucket(item)}
                  >
                    +
                  </button>
                </div>
                <div className="item-description">
                  <b className="mb-1">${item.price}</b>
                </div>
                <button
                  className="btn delete-btn"
                  onClick={() => deleteItemFromBucket(item)}
                >
                  x
                </button>
              </div>
            );
          }
        })}
      <hr />
      {total !== 0 && (
        <div className="total-container">
          <button className="continue-btn">Continue</button>
          <span>${total}</span>
          <b>Total:</b>
        </div>
      )}
    </div>
  );
};

export default BucketItems;
