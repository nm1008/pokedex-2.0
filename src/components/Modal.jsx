import { backgrounds } from "../backgrounds";
import Button from "../components/Button";

const Modal = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen) {
    return null;
  }

  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="fixed inset-0 z-1 flex items-center justify-center">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg z-10 w-1/2">
        <h2 className=" text-xl font-bold mb-5 sm: text-center">{pokemonName}</h2>
        <div className="flex justify-center">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="my-5"
          />
        </div>
        <div className="flex justify-evenly flex-wrap">
          <div className="left">
            <h1 className="font-bold text-lg">Information</h1>
            <div className="w-28 h-1 bg-slate-900" />

            <table className="my-5">
              <tbody className="w-30 flex flex-col justify-center items-start">
                <tr>
                  <td>HP: {pokemon.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <td>Attack: {pokemon.stats[1].base_stat} </td>
                </tr>
                <tr>
                  <td>Defense: {pokemon.stats[2].base_stat}</td>
                </tr>
                <tr>
                  <td>Special Attack: {pokemon.stats[3].base_stat}</td>
                </tr>
                <tr>
                  <td>Special Defense: {pokemon.stats[4].base_stat}</td>
                </tr>
                <tr>
                  <td>Speed: {pokemon.stats[5].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right ">
            <h1 className="font-bold text-lg">Type</h1>
            <div className="w-10 h-1 bg-slate-900 mb-5" />
            {pokemon.types?.map((type, i) => {
              const capitalizedType = type.type.name.toUpperCase();
              return (
                <div key={i} className="">
                  {capitalizedType}
                </div>
              );
            })}
            <h1 className="font-bold text-lg mt-5">Moveset</h1>
            <div className="w-20 h-1 bg-slate-900" />
            {pokemon.abilities.map((ability, i) => {
              const capitalizedAbility = ability.ability.name.toUpperCase();
              return <div key={i}>{capitalizedAbility}</div>;
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            name="Close"
            className="bg-blue-400 px-3 py-2 rounded-xl font-bold text-white focus: bg-blue-400"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
