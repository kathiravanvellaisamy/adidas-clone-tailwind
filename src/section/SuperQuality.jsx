import Button from "../components/Button";
import { FaCircleArrowRight } from "react-icons/fa6";

const SuperQuality = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 ">
        <div className="space-y-7">
          <h2 className="text-4xl font-semibold">
            We Provide
            <br />
            <span className="text-orange-400">Super Quality Products </span>
            Shoes
          </h2>
          <p className="text-lg text-slate-500 mt-5 lg:max-w-6xl">
            We started in a wash room and conquered the world. And in between,
            we’ve scored big and sometimes struggled to reach our goals. We’ve
            done our best for the best. We’ve improved and grown. Looking ahead
            to the future, always remembering where we came from. This is our
            story.
          </p>
          <p className="text-lg text-slate-500 mt-5 lg:max-w-6xl">
            Everything we do is rooted in sport. Sport plays an increasingly
            important role in more and more people’s lives, on and off the field
            of play. It is central to every culture and society, and is core to
            our health and happiness.
          </p>
          <Button
            label="View Details"
            icon={<FaCircleArrowRight size={24} />}
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/19/05/29/adidas-5418991_1280.jpg"
            className="rounded-md lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
