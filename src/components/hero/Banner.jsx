import bgImg from "../../assets/images/banner.jpg";
import "./style.css";

const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl text-white">
          <h1 className="mb-5 lg:text-6xl md:text-5xl text-3xl font-bold">
            Empowering Your Business
          </h1>
          <p className="mb-5 md:max-w-lg mx-auto lg:text-lg">
            Boost your business with tailored solutions that drive growth and
            success. Let’s achieve more together!
          </p>
          <button className="btn bg-white text-primary font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
