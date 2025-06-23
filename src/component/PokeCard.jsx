import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";


const PokeCard = () => {
    const {name} = useParams();
    const [poke, setPoke] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await res.json();                
                setPoke(data);
                console.log(data.sprites);
                
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };

        fetchPoke();
    }, [name]);

    if (error) return <p>Error loading Pokémon details.</p>;
    if (!poke) return <p>Loading...</p>;

    return (
        <div>
  <NavBar />
  <div className="min-h-screen bg-[#2A75BB] flex items-center justify-center py-10 px-4">
    <div
      style={{ border: "3px solid #FFCB05" }}
      className="bg-white rounded-xl p-6 shadow-lg text-center w-full max-w-2xl"
    >
      <h1 className="text-2xl text-gray-600 font-semibold capitalize mb-4 leading-relaxed">
        {poke.name}
      </h1>

      <p className="text-sm text-gray-700 font-medium mb-1 leading-relaxed">
        Height: {poke.height}
      </p>
      <p className="text-sm text-gray-700 font-medium mb-1 leading-relaxed">
        Weight: {poke.weight}
      </p>
      <p className="text-sm text-gray-700 font-medium mb-1 leading-relaxed">
        Base Experience: {poke.base_experience}
      </p>
      <p className="text-sm text-gray-700 font-medium mb-1 capitalize">
        Types: {poke.types.map((t) => t.type.name).join(", ")}
      </p>
      <p className="text-sm text-gray-700 font-medium mt-3">Abilities:</p>
      <ul className="mb-3">
        {poke.abilities.map((ability, i) => (
          <li key={i} className="text-sm text-gray-600">
            {ability.ability.name}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-700 font-medium mb-2">Sprites:</p>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {Object.values(poke.sprites)
          .filter((url) => typeof url === "string" && url !== null)
          .map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`sprite-${index}`}
              className="max-w-[120px] h-auto object-contain"
            />
          ))}
      </div>

      <button
        type="button"
        className="mt-6 inline-flex items-center px-6 py-2 bg-[#2A75BB] hover:bg-indigo-600 text-white rounded-lg"
        onClick={() => navigate(`/`)}
      >
        Back
      </button>
    </div>
  </div>
</div>

    );

};

export default PokeCard;


