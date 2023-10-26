import { backgrounds } from "../backgrounds";

const Cards = ({ name, id, image, type, onClick }) => {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      className={`${backgrounds[type]} border-2 border-neutral-200 flex flex-col mx-10 md:mx-12 my-5 rounded-xl flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    >
      <h1 className="text-white my-5 font-bold text-xl">#{id}</h1>
      <img src={image} alt={pokemonName} className="w-24   h-24" />
      <h1 className="text-white my-5 font-bold text-xl">{pokemonName}</h1>
    </div>
  );
};

export default Cards;
