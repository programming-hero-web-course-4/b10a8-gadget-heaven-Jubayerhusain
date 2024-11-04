/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";

function ProductDetails() {
  const { Id } = useParams();
  const ProductID = parseInt(Id);
  const allProduct = useLoaderData();
  const findData = allProduct.find((data) => data.id === ProductID);
  console.log(findData);
  const {
    brand,
    model,
    storage,
    color,
    price,
    release_date,
    img,
    screen_size,
    description,
    category,
    rating,
  }= findData;
  return (
    <div className="min-h-[850px]">
      <div className=" bg-[#9538E2] min-h-[400px] rounded-2xl relative">
        <div className="text-center">
          <h1 className="font-bold text-4xl w-6/12 text-white mx-auto pt-10 pb-2">
            Product Details
          </h1>
          <p className=" font-normal text-gray-50 w-4/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="absolute top-52 left-[20%]">
          <div className="w-[1000px] h-[520px] border-2 bg-[#FFFFFF]/20 border-white rounded-xl p-6 shadow-2xl">
            <div className=" flex justify-between bg-[#FFFFFF] rounded-xl p-5">
              <figure className="bg-purple-200 p-10 mr-8 rounded-2xl">
                <img className="w-96 h-full rounded-lg " src={img} alt={brand} />
              </figure>
              <div className="space-y-2">
                <div>
                  <h1 className="font-bold text-gray-700 text-xl">
                    Brand: {brand}
                  </h1>
                  <h1 className="font-bold text-gray-700 text-xl">
                    Model: {model}
                  </h1>
                  <p className="font-semibold text-gray-500 text-md">
                    Price: ${price}
                  </p>
                  <p className="badge badge-secondary">In Stock</p>
                  <p className="font-semibold text-gray-500 text-md">
                    {description}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-gray-700 text-xl">
                    Specification:
                  </h1>
                  <p className="font-semibold text-gray-500 text-md">
                    Storage: {storage}
                  </p>
                  <p className="font-semibold text-gray-500 text-md">
                    Color: {color}
                  </p>
                  <p className="font-semibold text-gray-500 text-md">
                    Screan Size: {screen_size}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500 text-md">
                    Release Date{release_date}
                  </p>
                </div>
                <div>
                <h1 className="text-xl font-bold text-gray-700">Rating</h1>
                  <div className="flex space-x-2 items-center">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-purple-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-purple-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-purple-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-purple-500"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-purple-500"
                      />
                    </div>
                    <p className="bg-gray-100 rounded-full inline-block px-3 py-2 border-2 border-white">
                      {rating}
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button className="btn bg-purple-500 rounded-3xl text-white ">Add To Card </button>
                    <button className="btn border-2 rounded-3xl text-black ">Love</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;