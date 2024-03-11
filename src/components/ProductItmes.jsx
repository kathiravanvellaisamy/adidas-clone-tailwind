const ProductItmes = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[280px] h-[280px] rounded-md"
      />
      <div className="mt-8 flex flex-col justify-start gap-2">
        <h2 className="text-slate-900 text-xl font-semibold">{product.name}</h2>
        <p className="text-black font-medium">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItmes;
