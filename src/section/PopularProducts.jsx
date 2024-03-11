import ProductItmes from "../components/ProductItmes";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-400">Popular</span> Products
        </h2>
        <p className="lg:max-w-2xl mt-2 text-slate-500">
          You write the rules. Including which shoes you wear for work and on
          the weekend! Find the perfect fit! With adidas slip on shoes, your
          feet can move freely while being perfectly supported.{" "}
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <ProductItmes key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
