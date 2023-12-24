import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Counter(initialValue){
    const [count ,setCount] = useState(initialValue)
    
    return(<div className="flex">
        <button onClick={()=>{setCount(prev => prev + 1)}}><AddIcon /></button>
        <p>{count}</p>

    </div>)

}



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

  const [product, setProduct] = useState(() => ({
    ...schema,
    rating: maxRating.filter((item, index) => index < schema.rating),
    finalprice: schema.sale
      ? Math.round(schema.price * (1 - schema.sale / 100))
      : schema.price,

    counter : Counter(1)
  }));

  useEffect(() => {});
  console.log(product);
  return (
    <div className="pt-28 max-w-7xl mx-auto">
      <div className="py-12 grid grid-cols-1 lg:grid-cols-2">
        <div>image handler</div>
        <div>
          <h1>{product?.names}</h1>
          <div className=" flex items-center ">
            {product?.rating}
            <p>{product.rating.length}</p>
          </div>

          <div className="flex space-x-2 text-sm">
            {product.sale && (
              <p className=" line-through">Rs. {product.price}</p>
            )}

            <p>Rs. {product.finalprice}</p>

            {product.sale && (
              <p className=" text-red-500">Save {product.sale}%</p>
            )}
          </div>
          <div>
            <p>Color - blue</p>
            <div className=" h-10 w-10 bg-red-500 rounded-full" />
          </div>
          <div className="uppercase">
            <p>Sizes</p>
            <div className="flex space-x-4 text-sm ">
              {product.sizes.map((item, index) => (
                <button
                  className=" rounded-md border border-gray-500 px-3 py-1"
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {product.counter}
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
