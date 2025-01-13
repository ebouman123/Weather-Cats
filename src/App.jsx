import "./styles/App.css";
import Search from "./components/Search";
import TodayMain from "./components/todayMain/TodayMain";
import TodayWind from "./components/todayWind/TodayWind";

function App() {
  return (
    <div className="card">
      <h1>☀️🐈‍⬛ Meow 🐈‍⬛🌧️</h1>
      <Search />
      <h2>Temperature Stuff</h2>
      <TodayMain />
      <h2>Wind Stuff</h2>
      <TodayWind />
    </div>
  );
}

export default App;
