import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import FAQ from "components/faqs/SingleCol.js";

const PricingPage = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <MiniCenteredFooter />     
    </AnimationRevealPage>
  );
};

export default PricingPage
