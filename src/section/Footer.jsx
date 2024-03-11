const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
        <a href="" className="text-[14px] text-slate-300 hover:text-white">
          Privacy Policy
        </a>{" "}
        <span className="text-white hidden sm:block md:block lg:block">|</span>
        <a href="" className="text-[14px] text-slate-300 hover:text-white">
          Terms & Conditions
        </a>
        <span className="text-white hidden sm:block md:block lg:block">|</span>
        <a href="" className="text-[14px] text-slate-300 hover:text-white">
          Cookies
        </a>
      </div>
      <div>
        <p className="text-slate-300 text-[14px]">
          © 2024 adidas India Marketing Pvt. Ltd
        </p>
        <p className="text-slate-300 text-[14px]">
          All credits goes to :{" "}
          <a
            href="https://www.adidas.co.in/"
            target="_blank"
            className="text-slate-400 hover:text-white"
          >
            www.adidas.co.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
