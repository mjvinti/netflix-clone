import Image from "next/image";

const Card = ({ imgUrl, size }) => {
  return (
    <div>
      Card
      <Image alt="image" height={300} src={imgUrl} width={300} />
    </div>
  );
};

export default Card;
