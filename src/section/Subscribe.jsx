import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col md:flex-row justify-center lg:flex-row gap-5 items-center px-4">
        <h1 className="text-4xl   text-white font-bold">
          JOIN ADIDAS &
          <span className="text-black font-extrabold "> GET 15% OFF</span>
        </h1>
        <Button label="Sign Up for Free" />
      </div>
    </section>
  );
};

export default Subscribe;
