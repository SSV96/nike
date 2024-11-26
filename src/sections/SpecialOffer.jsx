import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        {" "}
        <img src={offer} width={773} height={687} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="Shop Now" iconURL={arrowRight} />{" "}
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
