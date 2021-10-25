import React from "react";
import { useDispatch } from "react-redux";
import { SetItemToBucketAct } from "../../store/menu/menu.actions";
import { IDish } from "../../types";
import history from "../../history";

interface IMenuProps {
  menu: IDish[];
  isLoading: boolean;
}

const Menu: React.FC<IMenuProps> = ({ menu, isLoading }) => {
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
                {!isLoading &&
                  menu.map((item: any) => {
                    return (
                      <div
                        className="small-box-c"
                        key={item.id}
                        onClick={() => history.push(`/dish/${item.id}`)}
                      >
                        <div className="small-img-b">
                          <img
                            className="img-dish"
                            src={item.img}
                            alt="#"
                            width={408}
                            height={300}
                          />
                        </div>
                        <div className="dit-t clearfix">
                          <div className="">
                            <h4>{item.dish}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="prod-btn">
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              history.push("/bucket");
                              setItemToBucket(item);
                            }}
                          >
                            <i className="fa fa-star" aria-hidden="true" />
                            {item.count
                              ? `${item.count} count in bucket. Add one more`
                              : "Add to cart"}
                          </span>
                          <span className="price">${item.price}</span>
                          {/*<a href="/">*/}
                          {/*  <i className="fa fa-thumbs-up" aria-hidden="true" />*/}
                          {/*  Like this*/}
                          {/*</a>*/}
                          {/*<p>{item.likes} likes</p>*/}
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

export default Menu;
