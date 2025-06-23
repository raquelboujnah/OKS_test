import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";



const HomePage = () => {
    const [pokemons, setPokemons] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetchCharacter()
    }, [])


    const fetchCharacter = async () => {

        setError(false)
        setLoading(true)
        
        try {
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
            if (!response.ok) throw new Error ("Error occured");

            const data = await response.json();
            const results = data.results;
            
             const detailedData = await Promise.all(
                results.map(async (poke) => {
                    const res = await fetch(poke.url);
                    return await res.json();
                })
            );

            setPokemons(detailedData)
            

            } catch (error){
                console.log("Error fetchin data:",error);
                setError(true)
            }finally {
            setLoading(false);
            }
    }

   
    return(
        <div>
            <NavBar/>
        <div style={{ backgroundColor: "#2A75BB" }} className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto text-center">

                {error && (
                    <p className="text-red-500 mb-4">Error fetching Pokemons. Please try again.</p>
                )}

                {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                        <svg className="mr-3 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                        </svg>
                        <p>Processing…</p>
                    </div>
                ) : (


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pokemons.map((poke, index) => (
                        <div key={index} style={{ border: "3px solid #FFCB05" }} className="bg-white rounded-xl p-4 shadow-lg text-center transition-transform duration-300 transform hover:scale-101 cursor-pointer" onClick={() => navigate(`/${poke.name}`)}>
                            <h2 className="text-lg text-gray-600 font-semibold capitalize">{poke.name}</h2>
                            <img src={poke.sprites.front_default} alt={poke.name} className="mx-auto mb-2 w-24 h-24"/>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
            </div>


    )
}
 export default HomePage