import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col  gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to last. We pride ourselves on our commitment to quality
          and our dedication to providing our customers with the best possible
          experience.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence has led us to create a range
          of shoes that cater to a variety of foot shapes and sizes.
        </p>
        <div className="mt-11">
          {" "}
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          className="object-contain"
          alt="shoe8"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
