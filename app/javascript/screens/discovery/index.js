import React from "react";
import NavbarFooter from "../../components/common/navbar_footer";
import SectionWrapper from "../../components/common/section_wrapper";
import Discovery from "../../components/discovery";

const DiscoveryScreen = () => {
  return (
    <>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </>
  );
};
export default DiscoveryScreen;
