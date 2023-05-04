import "./App.css";
import { useEffect } from "react";
import Character from "./pages/Character";
import { useSelector, useDispatch } from "react-redux";
import { setID, setAccessToken } from "./store/characterSlice";
import { Route, Routes, useLocation } from "react-router-dom";
import Test from "./pages/Test";

function App() {
  const dispatch = useDispatch();
  const { characterID, accessToken } = useSelector((state) => state.character);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search.substring(1));
  const id = searchParams.get("characterID");
  const auth = searchParams.get("auth");

  useEffect(() => {
    dispatch(setID(id));
    dispatch(setAccessToken(auth));
  }, []);

  console.log(characterID, accessToken);

  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/character-dashboard" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
