const OtherStoriesCard = ({
  uid,
  title,
  categoryInfo,
  image,
}) => {
  return (
    <div className="py-4 md:py-2">
      <h3 className="text-black text-sm md:text-base uppercase content-bold mb-1">
        {categoryInfo.name}
      </h3>
      <div className="w-full h-auto">
        <img src={image} />
      </div>
      <div className="py-2">
        <h2 className="title text-xl max-h-[56px] overflow-hidden hover:text-[#1c2e4a] dark:hover:text-[#FDE7C9] transition-colors">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default OtherStoriesCard;
