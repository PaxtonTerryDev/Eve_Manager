// Requests
const characterID = 2120331517;
const url = "http://localhost:4000";
const eveURL = "https://esi.evetech.net/latest";

const template = async () => {
  const response = await fetch();
  const data = await response.json();
};

export const character = {
  getBasicInfo: async (characterID) => {
    const response = await fetch(`${url}/character/get-info/${characterID}`);
    const data = await response.json();
    return data;
  },

  getPortraits: async (characterID) => {
    const response = await fetch(
      `${eveURL}/characters/${characterID}/portrait/`
    );
    const data = await response.json();

    const portraits = {
      xs: data.px64x64,
      sm: data.px128x128,
      md: data.px256x256,
      lg: data.px512x512,
    };

    return portraits;
  },
};
