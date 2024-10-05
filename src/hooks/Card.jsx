import "./style/cardStyle.css";
const Card = ({ img, title, pera }) => {
  return (
    <div className="p-4 shadow-2xl rounded-lg card-body">
      <div>
        <img src={img} alt="image" />
      </div>
      <div className="text-center mt-4 space-y-2 card-text">
        <h3 className="capitalize font-semibold text-2xl">{title}</h3>
        <p className="text-[#6e6191]">{pera}</p>
      </div>
    </div>
  );
};

export default Card;
