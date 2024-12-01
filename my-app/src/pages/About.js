import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title = {"about us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpeg"
            alt="About Us"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4 text-justify mt-2 text-blue-500">
          <p className="text-justify mt-2 text-blue-500 ">
            we are Om Hardware we sell every type of hardware used in home furnishing and decorations.
            daily use items in consturction of building like pipes, gysers, wiring stuff and what not .
            Do visit us and shope from us we have value of our customers and we provide you with the right choice 
            for a perfect home , office and other related items.
          </p>

          
        </div>
      </div>
    </Layout>
  );
};

export default About;