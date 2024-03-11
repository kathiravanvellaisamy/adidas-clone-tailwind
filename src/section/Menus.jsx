const Menus = () => {
  const products = [
    {
      id: 1,
      hedaing: "Footwear",
    },
    {
      id: 2,
      hedaing: "Clothing",
    },
    {
      id: 3,
      hedaing: "Accessories",
    },
    {
      id: 4,
      hedaing: "Outlet-Sale",
    },
    {
      id: 5,
      hedaing: "New Arrivals",
    },
    {
      id: 6,
      hedaing: "Special Offer",
    },
    {
      id: 7,
      hedaing: "Flat50% Off!",
    },
  ];

  const Sports = [
    {
      id: 1,
      hedaing: "Cricket",
    },
    {
      id: 2,
      hedaing: "Running",
    },
    {
      id: 3,
      hedaing: "Football",
    },
    {
      id: 4,
      hedaing: "Gym/Training",
    },
    {
      id: 5,
      hedaing: "Tennis",
    },
    {
      id: 6,
      hedaing: "Outdoor",
    },
    {
      id: 7,
      hedaing: "Basketball",
    },
    {
      id: 8,
      hedaing: "Swimming",
    },
    {
      id: 9,
      hedaing: "Skateboarding",
    },
  ];

  const Collections = [
    {
      id: 1,
      hedaing: "Ultraboost",
    },
    {
      id: 2,
      hedaing: "Superstar",
    },
    {
      id: 3,
      hedaing: "NMD",
    },
    {
      id: 4,
      hedaing: "Stan Smith",
    },
    {
      id: 5,
      hedaing: "Sustainability",
    },
    {
      id: 6,
      hedaing: "Predator",
    },
    {
      id: 7,
      hedaing: "Parley",
    },
    {
      id: 8,
      hedaing: "adicolor",
    },
  ];

  const Supports = [
    {
      id: 1,
      hedaing: "Help",
    },
    {
      id: 2,
      hedaing: "Customer Service",
    },
    {
      id: 3,
      hedaing: "Returns & Exchanges",
    },
    {
      id: 4,
      hedaing: "Shipping",
    },
    {
      id: 5,
      hedaing: "Order Tracker",
    },
    {
      id: 6,
      hedaing: "Store Locator",
    },
    {
      id: 7,
      hedaing: "Running Shoe Finder",
    },
    {
      id: 8,
      hedaing: "Bra Fit Guide",
    },
    {
      id: 9,
      hedaing: "adiclub",
    },
    {
      id: 10,
      hedaing: "adiclub Terms & Conditions",
    },
  ];

  const Company = [
    {
      id: 1,
      hedaing: "About Us",
    },
    {
      id: 2,
      hedaing: "adidas Stories",
    },
    {
      id: 3,
      hedaing: "adidas Apps",
    },
    {
      id: 4,
      hedaing: "Entity Details",
    },
    {
      id: 5,
      hedaing: "Press",
    },
    {
      id: 6,
      hedaing: "Careers",
    },
  ];

  return (
    <section className="w-full mb-6 ">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-8">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-700">Products</h1>
          {products.map((product) => (
            <a
              href="#"
              className="mt-2 text-xs font-normal text-slate-700  hover:underline"
            >
              {product.hedaing}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-700">Sports</h1>
          {Sports.map((sport) => (
            <a
              href="#"
              className="mt-2 text-xs font-normal text-slate-700 hover:underline"
            >
              {sport.hedaing}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-700">Collections</h1>
          {Collections.map((collection) => (
            <a
              href="#"
              className="mt-2 text-xs font-normal text-slate-700 hover:underline"
            >
              {collection.hedaing}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-700">Support</h1>
          {Supports.map((suport) => (
            <a
              href="#"
              className="mt-2 text-xs font-normal text-slate-700  hover:underline"
            >
              {suport.hedaing}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-slate-700">Company Info</h1>
          {Company.map((comp) => (
            <a
              href="#"
              className="mt-2 text-xs font-normal text-slate-700  hover:underline"
            >
              {comp.hedaing}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
