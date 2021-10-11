import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SetItemToBucketAct } from "../../store/bucket/bucket.actions";
import { IDish } from "../../types";

interface IItemsProps {
  items: IDish[];
}

const BucketItems: React.FC<IItemsProps> = ({ items }) => {
  const dispatch = useDispatch();

  const setItemToBucket = (item: IDish) => {
    dispatch(SetItemToBucketAct(item));
  };

  return (
    <div className="App">
      <div className="panel-body">
        <div className="tab-content">
          <div className="tab-pane fade in active" id="tab1default">
            <div className="product-box-main row">
              <div className="menu-block">
                {items.map((item: any) => {
                  return (
                    <div className="small-box-c" key={item.id}>
                      <div className="small-img-b">
                        <img className="img-dish" src={item.img} alt="#" />
                      </div>
                      <div className="dit-t clearfix">
                        <div className="left-ti">
                          <h4>{item.dish}</h4>
                          <p>{item.description}</p>
                        </div>
                        <a href="/">${item.price}</a>
                      </div>
                      <div className="prod-btn">
                        <Link
                          to="/bucket"
                          onClick={() => setItemToBucket(item)}
                        >
                          <i className="fa fa-star" aria-hidden="true" />
                          {item.count
                            ? `${item.count} count in bucket. Add one more`
                            : "Add to bucket"}
                        </Link>
                        <a href="/">
                          <i className="fa fa-thumbs-up" aria-hidden="true" />
                          Like this
                        </a>
                        <p>{item.likes} likes</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketItems;
