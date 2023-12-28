import "./App.css";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  const data = [
    {
      id: 1,
      name: "Leo",
      description: "Vijay's blockbuster movie",
      featured: false,
    },
    {
      id: 2,
      name: "PS2",
      description: "Historical and Fantasy movie",
      featured: true,
    },
  ];
  return (
    <>
      {data.map((movie) => (
        <VideoCard movie={movie} key={`movie-card-${movie.id}`} />
      ))}
    </>
  );
}

export default App;
