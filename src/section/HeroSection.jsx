import Button from "../components/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const HeroSection = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  min-h-screen justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-24">
        <p className="text-lg md:text-xl text-slate-500 font-normal">
          Our Latest Collections
        </p>
        <h1 className="mt-10 text-7xl max-sm:text-4xl max-sm:leading-10 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-orange-400 inline-block mt-3 mr-2">Adidas</span>
          Shoes
        </h1>
        <p className="text-lg text-slate-500 mt-4">
          We’re here to support creators. Improve their game. Create change. And
          we think about the impact we have on our world.
        </p>
        <Button label="Shop Now" icon={<FaCircleArrowRight size={24} />} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">10M+</h1>
            <p className="text-xl font-medium text-slate-500">Customer</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">500+</h1>
            <p className="text-xl font-medium text-slate-500">Shops</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">1K+</h1>
            <p className="text-xl font-medium text-slate-500">Brands</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center bg-slate-100">
        <img
          src={bigShoeImg}
          alt="image"
          width={505}
          height={400}
          className="object-contain relative z-10 mb-3"
        />
        <div className="flex sm:gap-6 gap-4  absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              index={index}
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
