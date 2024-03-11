import { FaCircleArrowRight } from "react-icons/fa6";

import Button from "../components/Button";

const SpecialOffers = () => {
  const products = [
    {
      id: 1,
      name: "YEEZY BOOST 350 V2 STEEL GREY",
      image:
        "https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/76860e428f2a41799b7b656c4d769b9f_9366/ID2441_01_standard.jpg",
      price: "₹ 22,999.00",
    },
    {
      id: 2,
      name: "YEEZY SLIDE INFANTS DARK ONYX",
      image:
        "https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/ca51220c425b478680a9a1c5dbd397ae_9366/ID5106_01_standard.jpg",
      price: "₹ 3,599.00",
    },
    {
      id: 3,
      name: "YEEZY 500 INFANTS STONE SALT",
      image:
        "https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/68feeab416d04a2bb2a163461d93e6ee_9366/IF3219_01_standard.jpg",
      price: "₹ 9,999.00",
    },
    {
      id: 4,
      name: "YEEZY SLIDE KIDS DARK ONYX",
      image:
        "https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/15549a8675da4fe58e380cab184fc211_9366/ID5104_01_standard.jpg",
      price: "₹ 4,999.00",
    },
  ];
  return (
    <section className="max-container">
      <h1 className="text-4xl mt-12 font-semibold">
        Adidas + <span className="text-orange-400">YEESY</span>
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-8">
        <div className=" max-w-full">
          <p className="text-lg leading-normal text-slate-500 break-words">
            Adidas Yeezy was a fashion collaboration between American rapper,
            designer, and entrepreneur Kanye West and German sportswear company
            Adidas. It offered sneakers in limited edition colorways, as well as
            shirts, jackets, track pants, socks, slides, lingerie and slippers.
            The first shoe model was released in February 2015.
          </p>
          <p className="text-lg leading-normal text-slate-500 break-words mt-3">
            In 2020 Forbes described Yeezy's rise as "one of the great retail
            stories of the century". Yeezy influenced and inspired a multitude
            of other fashion brands. Outside of the former Adidas collaboration,
            Yeezy is the name of Kanye's company Yeezy LLC and is not connected
            to Adidas.
          </p>
          <p className="text-lg leading-normal text-slate-500 break-words mt-3">
            In October 2022, Adidas announced that it terminated its
            collaboration with West with immediate effect after the rapper made
            antisemitic remarks through various media outlets.
          </p>
          <div className="flex gap-4 items-center">
            <Button label="Shop Now" icon={<FaCircleArrowRight size={24} />} />
            <button className="bg-white border-2 border-black py-2.5 rounded-full px-5 hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-28">
        {products.map((product, index) => (
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-md"
            />
            <div className="mt-8 flex flex-col justify-start gap-2">
              <h2 className="text-slate-900 text-md font-semibold">
                {product.name}
              </h2>
              <p className="text-black font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
