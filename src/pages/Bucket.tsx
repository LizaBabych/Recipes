import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { AppState } from "../store/state";
import Footer from "../components/footer/Footer";
import BucketItems from "../components/bucketItems/BucketItems";

const Bucket = () => {
  const bucketItems = useSelector(
    (state: AppState) => state.bucket.bucketItems
  );

  return (
    <div className="App">
      <Header />
      <BucketItems items={bucketItems} />
      <Footer />
    </div>
  );
};

export default Bucket;
