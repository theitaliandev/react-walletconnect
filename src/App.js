import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();
  if (isAuthenticated) {
    return <Dashboard />;
  }
  return <Login />;
}

export default App;
