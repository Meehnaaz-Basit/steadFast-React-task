const SectionTitle = ({ subTitle, title, pera }) => {
  return (
    <div>
      <div className="space-y-3 lg:max-w-3xl text-center mx-auto">
        <h4 className="font-semibold text-primary uppercase text-lg">
          {subTitle}
        </h4>
        <h1 className="text-4xl font-semibold capitalize">{title}</h1>
        <p className="text-[#6e6191]">{pera}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
