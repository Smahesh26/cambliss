import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import VisualProduction from "./Visual-Production";  
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CAMBLISS" />
      <VisualProduction /> {/* Include the Branding component here */}
    </Wrapper>
  );
};

export default index;
