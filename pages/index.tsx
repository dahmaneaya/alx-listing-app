import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing App</h1>
      
      <Card
        title="Sample Property"
        description="A cozy apartment in the city center."
        imageUrl="/assets/sample.jpg"
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking clicked!")} />
      </div>
    </div>
  );
};

export default Home;
