import BannerLogo from "/banner.jpg";

const Banner = () => {
  return (
    <div>
      <img
        className="w-full h-[200px] md:h-[500px] rounded-sm"
        src={BannerLogo}
        alt=""
      />
    </div>
  );
};

export default Banner;
