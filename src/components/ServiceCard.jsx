const ServiceCard = ({ service }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-xl shadow-2xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-black rounded-full ">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h className="text-xl font-bold text-slate-800 mt-5">{service.label}</h>
      <p className="text-lg leading-normal text-slate-500 break-words mt-3">
        {service.subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
