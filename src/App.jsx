import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <header className="w-full bg-slate-200 min-h-screen">
      <Navbar user={user} setUser={setUser} setError={setError} />
      <Main user={user} error={error} />
    </header>
  );
};

export default App;
