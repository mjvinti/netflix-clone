import Image from "next/image";

const Banner = ({ imgUrl, subTitle, title }) => {
  const handleOnClick = () => console.log("playing");

  return (
    <div>
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
      <button onClick={handleOnClick}>Play</button>
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "50% 50%",
          height: "100%",
          position: "absolute",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Banner;
