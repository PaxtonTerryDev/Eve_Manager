import "./App.css";
import { useEffect } from "react";
import Character from "./pages/Character";
import { useSelector, useDispatch } from "react-redux";
import {
  setID,
  setName,
  setCorporationID,
  setSecurityStatus,
  setPortraits,
} from "./store/characterSlice";
import { character } from "./requests";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { characterID, name, corporationID, securityStatus, portrait } =
    useSelector((state) => state.character);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search.substring(1));
  const paramValue = searchParams.get("characterID");
  console.log(characterID);
  console.log(name);
  console.log(corporationID);
  console.log(securityStatus);
  console.log(portrait);

  useEffect(() => {
    dispatch(setID(paramValue));
  }, []);

  useEffect(() => {
    const getCharacterInfo = async (characterID) => {
      const data = await character.getBasicInfo(characterID);
      const portraits = await character.getPortraits(characterID);
      const { name, corporationID, securityStatus } = data;
      dispatch(setName(name));
      dispatch(setCorporationID(corporationID));
      dispatch(setSecurityStatus(securityStatus));
      dispatch(setPortraits(portraits));
    };
    if (characterID) {
      getCharacterInfo(characterID);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/character-dashboard" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
