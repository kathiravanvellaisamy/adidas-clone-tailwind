import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleChange = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-white" : "border-transparent"
      } cursor-pointer max-sm:flex-1 mt-5`}
      onClick={handleChange}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:h-40 sm:w-40 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
