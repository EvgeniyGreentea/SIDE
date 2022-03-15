import AppRouter from "./components/AppRouter";
import Navbar from "./pages/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
