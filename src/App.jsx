import "./App.css";
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  const data = [
    { name: "Leo", description: "Vijay's blockbuster movie" },
    { name: "PS2", description: "Historical and Fantasy movie" },
  ];
  return (
    <>
      {data.map((movie, index) => (
        <VideoCard movie={movie} key={`movie-card-${index}`} />
      ))}
    </>
  );
}

export default App;
