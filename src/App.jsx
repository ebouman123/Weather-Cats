import "./styles/App.css";
import Search from "./components/Search";
import TodayMain from "./components/todayMain/TodayMain";

function App() {
  return (
    <div className="card">
      <h1>☀️🐈‍⬛ Meow 🐈‍⬛🌧️</h1>
      <Search />
      <TodayMain />
    </div>
  );
}

export default App;
