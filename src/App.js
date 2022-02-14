import { useState } from "react";
import LoginPage from "./routes/LoginPage";
import Context from "./helper/Context";
function App() {

  const [login, setLogin] = useState(false)

  return (
    <div>
      <Context.Provider value={{ login, setLogin }}>
        <LoginPage />
      </Context.Provider>
    </div>
  );
}

export default App;
