import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { IDish } from "../types";
import { getMenu } from "../api/getMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/state";
import { SetMenuItemsAct } from "../store/menu/menu.actions";
import { IMenuItem } from "../store/menu/menu.state";

const Home = () => {
  const dispatch = useDispatch();
  const [searchItems, setSearchItems] = useState<Array<IMenuItem>>([]);
  const menuItems = useSelector((state: AppState) => state.menu.menuItems);
  const searchValue = useSelector(
    (state: AppState) => state.search.searchValue
  );

  useEffect(() => {
    if (!menuItems.length) {
      getMenu().then((res: IDish[]) => {
        dispatch(SetMenuItemsAct(res));
      });
    }
    setSearchItems(menuItems);
  }, [menuItems]);

  useEffect(() => {
    if (searchValue) {
      setSearchItems(
        menuItems.filter((item) =>
          item.dish.toLowerCase().includes(searchValue)
        )
      );
    } else {
      setSearchItems(menuItems);
    }
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      <Menu menu={searchItems} isLoading={!menuItems.length} />
    </div>
  );
};

export default Home;
