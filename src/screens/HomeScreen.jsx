import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import CategoriesContainer from "../components/CategoriesContainer";

function HomeScreen() {
  const options = [
    {
      icon: "New Drops",
      link: "",
    },
    {
      icon: " Winter Flex",
      link: "",
    },
    {
      icon: " Trending",
      link: "",
    },
  ];

  const shoenglassoptions = [
    {
      icon: "Shoes",
      link: "",
    },
    {
      icon: " SunGlasses",
      link: "",
    },
  ];
  return (
    <div className=" pt-32 w-screen overflow-x-hidden">
      <div className=" max-w-7xl mx-auto bg-red-500">
        <img
          className=" w-full "
          src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1702963066.jpg"
        />
      </div>
      <section className=" bg-[#222] w-screen my-12 ">
        <div className=" flex max-w-7xl mx-auto ">
          <img
            className=" "
            src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1702963065.jpg"
          />
          <img
            className=" "
            src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1702963066.jpg"
          />
        </div>
      </section>

      <div>
        <div className=" flex space-x-4 items-center  justify-center">
          {options.map((item, index) => (
            <a
              className=" hover:bg-black hover:text-white border-2  border-black px-6 py-2 rounded-full"
              href={item.link}
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 max-w-7xl mx-auto gap-4 md:gap-8 my-12 ">
        <Product
          sale={4}
          price={2499}
          productName={"Seigneur Green Varsity Jacket"}
        />
        <Product
          sale={4}
          price={2499}
          productName={"Losangeles Blue Varsity Jacket"}
        />
        <Product
          price={2499}
          productName={"Take The Shot Black Varsity Jacket"}
        />
        <Product
          sale={6}
          price={1799}
          productName={"Gonfleur Black Puffer Jacket"}
        />
        <Product
          price={2499}
          productName={"Take The Shot Black Varsity Jacket"}
        />
      </div>
      <div className=" pb-20 flex justify-center">
        <button className=" border-2 border-black/50 px-6 py-2 rounded-md">
          View All
        </button>
      </div>
      <div>
        <div className=" flex space-x-4 items-center  justify-center">
          {options.map((item, index) => (
            <a
              className=" hover:bg-black hover:text-white border-2  border-black px-6 py-2 rounded-full"
              href={item.link}
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-4 md:gap-8 my-12 ">
        <Product
          sale={4}
          price={2499}
          productName={"Seigneur Green Varsity Jacket"}
        />
        <Product
          sale={4}
          price={2499}
          productName={"Losangeles Blue Varsity Jacket"}
        />
        <Product
          price={2499}
          productName={"Take The Shot Black Varsity Jacket"}
        />
        <Product
          sale={6}
          price={1799}
          productName={"Gonfleur Black Puffer Jacket"}
        />
      </div>
      <div className=" pb-20 flex justify-center">
        <button className=" border-2 border-black/50 px-6 py-2 rounded-md">
          View All
        </button>
      </div>


      <div>
        <div className=" flex space-x-4 items-center  justify-center">
          {shoenglassoptions.map((item, index) => (
            <a
              className=" hover:bg-black hover:text-white border-2  border-black px-6 py-2 rounded-full"
              href={item.link}
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-4 md:gap-8 my-12 ">
        <Product
          sale={4}
          price={2499}
          productName={"Seigneur Green Varsity Jacket"}
        />
        <Product
          sale={4}
          price={2499}
          productName={"Losangeles Blue Varsity Jacket"}
        />
        <Product
          price={2499}
          productName={"Take The Shot Black Varsity Jacket"}
        />
        <Product
          sale={6}
          price={1799}
          productName={"Gonfleur Black Puffer Jacket"}
        />
      </div>
      <div className=" pb-20 flex justify-center">
        <button className=" border-2 border-black/50 px-6 py-2 rounded-md">
          View All
        </button>
      </div>

      <div className=" mx-auto ">
        <img
          className=" w-full max-w-[95rem] mx-auto "
          src="https://www.snitch.co.in/cdn/shop/files/brand-ambassador-option-1.webp?v=1699454702&width=1600"
        />
      </div>
      <div className=" mx-auto mt-4 ">
        <img
          className=" w-full max-w-[95rem] mx-auto "
          src="https://www.snitch.co.in/cdn/shop/files/1_7bd18f46-c71d-47ab-b852-483ca2a78d70.jpg?v=1682766806&width=1600"
        />
      </div>

      <section className="py-28 max-w-7xl mx-auto">
        <p className=" text-2xl text-center pb-12">All Categories</p>
        <div className=" grid grid-cols-2 lg:grid-cols-4  gap-2 lg:gap-4 xl:gap-8">
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>
          <CategoriesContainer/>

        </div>
      </section>


    </div>
  );
}

export default HomeScreen;
