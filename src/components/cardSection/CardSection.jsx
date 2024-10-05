import Card from "../../hooks/Card";
import SectionTitle from "../../hooks/SectionTitle";
import cardImg1 from "../../assets/images/men.jpg";
import cardImg2 from "../../assets/images/slide1.jpg";
import cardImg3 from "../../assets/images/slide3.jpg";
import cardImg4 from "../../assets/images/banner.jpg";

const CardSection = () => {
  return (
    <div className="py-16">
      <div>
        <SectionTitle
          subTitle="our services"
          title="what we do?"
          pera="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dignissimos eum rem dicta ducimus ea amet enim vel molestias, tenetur corrupti ipsam esse blanditiis officia?"
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <Card
          img={cardImg1}
          title="digital marketing"
          pera="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aliquid cupiditate sapiente! Similique, eius."
        ></Card>
        <Card
          img={cardImg2}
          title="logo designing"
          pera="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aliquid cupiditate sapiente! Similique, eius."
        ></Card>
        <Card
          img={cardImg3}
          title="business consulting"
          pera="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aliquid cupiditate sapiente! Similique, eius."
        ></Card>
        <Card
          img={cardImg4}
          title="video graphy"
          pera="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aliquid cupiditate sapiente! Similique, eius."
        ></Card>
      </div>
    </div>
  );
};

export default CardSection;
