import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";
import Main from "./pages/main/Main";
import Navbar from "./pages/navbar/Navbar";


function App() {
  const {setUser,setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
      setIsAuth(true)
    }
  }, [])
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
