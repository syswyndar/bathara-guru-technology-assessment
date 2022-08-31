import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div data-cy="container" className="w-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Container;
