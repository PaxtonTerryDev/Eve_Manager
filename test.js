const Ponxly = 2120331517;
const url = "https://esi.evetech.net/latest";
const getCharacterData = (characterID) => {
  fetch(`${url}/characters/${characterID}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const getSkillQueue = (characterID) => {
  fetch(`${url}/characters/${characterID}/skillqueue/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getSkillQueue(Ponxly);
