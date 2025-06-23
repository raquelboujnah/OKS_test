# Pokédex Project by Raquel Israel
I built a Pokédex app that displays a limited number of Pokémon fetched from an API. The app consists of two main pages, implemented as separate components: HomePage and PokeCard.

On the HomePage component, I first fetch a list of 20 Pokémon. Then, using Promise.all, I fetch detailed information for each Pokémon. These Pokémon are displayed in a responsive grid layout. Each Pokémon card is clickable and navigates the user to the PokeCard component for detailed information.

The PokeCard component uses the same design style as the homepage, inspired by the Pokémon logo, for consistency.

One challenge I encountered was handling data fetching on the detail page. Since I already fetched the Pokémon data on the homepage, I wanted to avoid fetching again. In a larger project, I would use Redux or another state management solution to share data between components. However, due to time constraints and limitations with React Router’s useNavigate (which doesn’t support passing props directly), I decided to fetch the Pokémon data again on the detail page. This ensures the information is always up to date and reduces potential errors.

If I had more time, I would focus more on the design, implement the additional features mentioned in the project brief, and add filtering and search functionality to find Pokémon by types, abilities, and other attributes.# OKS_test
