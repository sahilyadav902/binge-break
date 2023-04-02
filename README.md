## Binge Break

(Responsive Next.js Movie Database Website)

![Binge Break](https://i.ibb.co/3vNCyjm/Binge-Break.png)

## Link to Live Project

> [https://binge-break.vercel.app/](https://binge-break.vercel.app/)

## Setting up the project locally

- Clone the project through the terminal:
  > git clone https://github.com/sahilyadav902/binge-break.git
- Navigate to the project directory:
  > cd binge-break
- Install dependencies
  > npm install
- Run the development build
  > npm run dev
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Techstack Used

- Next.js
- React.js
- Tailwind (CSS Framework)
- TMDB API (Movies API)
- Isomorphic Unfetch (HTTP Requests)
- DaisyUI (Tailwind CSS Components)
- React Icons (npm package)
- react-infinite-scroll-component (npm package)

## Project Structure

- index.js directs to homepage which gets static props for the first 20 movies
- filter.js directs to '/filter' page where user can apply filters based on release year, genre and average rating
- [movieID].js redirects to '/movie/{movieID}' page where user can view various details related to the movie selected including cast, similar movies and more movies from the director
- public directory contains static images and src directory contains all the code files
- pages directory inside src contains all the files for client side navigation
- styles directory contains a global.css file containing some custom styling for the components
- components directory contains reusable or isolated components that are used inside the project
- containers directory contains segments of code that are needed to perform data fetching

## Features Implemented

- Hero Section on landing at homepage
- Floating Navigation Bar at the bottom with Blur Background effect and Tooltip on hover
- Responsive Grid Layout to display movie cards
- Highlight effect on hovering over movie cards
- Infinite scrolling on the homepage
- Sticky Search Bar with instant results
- Lazy Loading of Images using Image component in Next.js
- Custom Fallback Image Cards for movies with missing posters
- Sticky Filter Bar with Blur Background effect
- Dynamic Routing for individual Movie detail pages
- Responsive Layout for Movie Details
- Horizontal Scrollable Carousel to display Cast, Similar Movies and more movies from the same Directors
- Open Google Search for Cast member upon clicking on the card
- Highlight Shadow effect on hovering over Carousel Items
- Clickable movie cards that navigate to movie details page
