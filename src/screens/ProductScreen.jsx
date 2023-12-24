import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FAQ from "../components/FAQ";

function ProductScreen() {
  const { id } = useParams();
  const schema = {
    names: "WHAT IF BLUE CO-ORDS",
    rating: 4,
    price: 2000,
    sale: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
  };

  const maxRating = [
    <p className=" text-yellow-500">
      <StarIcon fontSize="inherit" />
    </p>,
    <p className=" text-yellow-500">
      <StarIcon fontSize="inherit" />
    </p>,
    <p className=" text-yellow-500">
      <StarIcon fontSize="inherit" />
    </p>,
    <p className=" text-yellow-500">
      <StarIcon fontSize="inherit" />
    </p>,
    <p className=" text-yellow-500">
      <StarIcon fontSize="inherit" />
    </p>,
  ];
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState(() => ({
    ...schema,
    rating: maxRating.filter((item, index) => index < schema.rating),
    finalprice: schema.sale
      ? Math.round(schema.price * (1 - schema.sale / 100))
      : schema.price,
  }));

  useEffect(() => {});
  console.log(product);
  return (
    <div className="min-h-screen px-6 lg:px-0 flex flex-col pt-28">
  <main className="container max-w-7xl  mx-auto pb-12">
    {/* Use a 12-column layout */}
    <div className="grid gap-8 lg:gap-20 grid-cols-1 lg:grid-cols-2">
      {/* Main Content - uses 8-colspan*/}
      <div className="">
        <div className="lg:sticky top-28  ">
            <img className=" max-h-[40rem] object-contain w-full " src="https://www.snitch.co.in/cdn/shop/products/sergio0946.jpg?v=1665761168&width=1800" />
            <div className=" flex space-x-4 mt-4">
            <img className=" max-h-20 aspect-square object-cover " src="https://www.snitch.co.in/cdn/shop/products/sergio0946.jpg?v=1665761168&width=1800" />
            <img className=" max-h-20 aspect-square object-cover " src="https://www.snitch.co.in/cdn/shop/products/sergio0946.jpg?v=1665761168&width=1800" />
            <img className=" max-h-20 aspect-square object-cover " src="https://www.snitch.co.in/cdn/shop/products/sergio0946.jpg?v=1665761168&width=1800" />
            <img className=" max-h-20 aspect-square object-cover " src="https://www.snitch.co.in/cdn/shop/products/sergio0946.jpg?v=1665761168&width=1800" />
            </div>
        </div>
      </div>
      <div className=" py-8 flex flex-col space-y-4">
      <div>
          <h1 className=" text-4xl ">{product?.names}</h1>
          <div className=" flex items-center space-x-2 py-4 ">
            <div className="flex">{product?.rating}</div>
            <p>{product.rating.length} reviews</p>
          </div>

          <div className="flex space-x-2  text-lg">
            {product.sale && (
              <p className=" line-through">Rs. {product.price}</p>
            )}

            <p>Rs. {product.finalprice}</p>

            {product.sale && (
              <p className=" text-red-500">Save {product.sale}%</p>
            )}
          </div>
          <p className=" py-2 text-gray-500">{`( incl. of all taxes )`}</p>
          <hr />
          <div className=" text-gray-800 text-xs space-y-3 my-6">
            <div className=" flex items-center space-x-2">
              <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" />
              <div>
                <p>
                  Get this for Rs.{" "}
                  <span className=" text-black font-medium">1,499</span> Use
                  Code: <span className=" text-black font-medium">SLEIGH</span>
                </p>
                <p className=" font-light tracking-wide">
                  Flat 25% off on minimum order value of Rs. 2599/- Limited
                  Period Offer!
                </p>
              </div>
            </div>
            <div className=" flex items-center space-x-2">
              <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" />
              <div>
                <p>
                  Get this for{" "}
                  <span className=" text-black font-medium">Rs. 1,699 </span>{" "}
                  Use Code:{" "}
                  <span className=" text-black font-medium"> GET15</span>
                </p>
                <p className=" font-light tracking-wide">
                  On minimum order value of Rs. 1999/-
                </p>
              </div>
            </div>
            <div className=" flex items-center space-x-2">
              <img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/" />
              <div>
                <p>
                  Get this for{" "}
                  <span className=" text-black font-medium">Rs. 1,799 </span>{" "}
                  Use Code:{" "}
                  <span className=" text-black font-medium"> GET10</span>
                </p>
                <p className=" font-light tracking-wide">
                  On minimum order value of Rs. 1499/-
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className=" py-6">
            <p className=" uppercase font-light">
              Color - <span className=" capitalize text-xs">red</span>
            </p>
            <div className=" h-10 w-10 bg-red-500 rounded-full" />
          </div>
          <div className="uppercase tracking-widest font-light">
            <p className=" text-sm">Sizes</p>
            <div className="flex space-x-4 font-medium text-sm ">
              {product.sizes.map((item, index) => (
                <button
                  disabled={index < 2}
                  className=" rounded-md disabled:text-gray-300 disabled:border-gray-300 border border-gray-500 px-3 py-1"
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <p className=" text-sm mt-2 tracking-widest text-gray-700">
            Quantity
          </p>
          <div className="flex border-2 max-w-max rounded-md mb-2">
            <button
              disabled={counter === 1}
              onClick={() => setCounter((prev) => prev - 1)}
              className="border-r-2 px-2"
            >
              <RemoveIcon />
            </button>
            <p className="px-4 py-2">{counter}</p>
            <button
              onClick={() => setCounter((prev) => prev + 1)}
              className="border-l-2 px-2"
            >
              <AddIcon />
            </button>
          </div>
          <FAQ />
          <section className=" flex flex-col space-y-2 my-6">
            <button className=" bg-black text-white py-3 rounded-md">
              Select a size
            </button>
            <button className=" bg-black text-white py-3 rounded-md">
              Add to Cart
            </button>
            <button className=" text-red-500 border-black border py-3 rounded-md">
              Add to Whish List
            </button>
          </section>
        </div>
      </div>
    </div>
  </main>
</div>
  );
}

export default ProductScreen;

;
