import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { AppState } from "../store/state";
import BucketItems from "../components/bucketItems/BucketItems";

const Bucket = () => {
  const bucketItems = useSelector((state: AppState) => state.menu.menuItems);

  return (
    <div className="App">
      <Header />
      <BucketItems items={bucketItems} />
    </div>
  );
};

export default Bucket;
