import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobsListing from "../components/JobsListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero title="Test title" subTitle="Test Sub-Title" />

      <HomeCard />

      <JobsListing isHome={true} />

      <ViewAllJobs />
    </>
  );
};

export default HomePage;


