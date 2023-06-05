import React from "react";

import FooterMain from "./components/footer/footerMain";
import { Outlet } from "react-router-dom";
import Wrapper from "./wrapper";

const Root = () => {
  return (
    <main>
      <Wrapper>
        <Outlet />
        <FooterMain />
      </Wrapper>
    </main>
  );
};

export default Root;
