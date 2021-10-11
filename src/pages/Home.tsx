import React, { useEffect } from "react";
import "../App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import { IDish } from "../types";
import { getMenu } from "../api/getMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/state";
import { SetMenuItemsAct } from "../store/menu/menu.actions";

const Home = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state: AppState) => state.menu.menuItems);

  useEffect(() => {
    if (!menuItems.length) {
      getMenu().then((res: IDish[]) => {
        dispatch(SetMenuItemsAct(res));
      });
    }
  }, [menuItems]);

  return (
    <div className="App">
      <Header />
      <Menu menu={menuItems} isLoading={!menuItems.length} />
      <Footer />
    </div>
  );
};

export default Home;
