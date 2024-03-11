const Button = ({ label, icon }) => {
  return (
    <button className="my-4 py-3 px-5 bg-black rounded-full flex items-center gap-3 text-white">
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default Button;
