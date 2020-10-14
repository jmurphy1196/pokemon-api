import axios from "axios";

const URL = `https://pokeapi.co/api/v2/`;

export const getSearchResult = async (search) => {
  try {
    let data = await axios.get(`${URL}pokemon/${search}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    let images = [];
    for (const prop in data.data.sprites) {
      if (typeof data.data.sprites[prop] === "string") {
        images.push(data.data.sprites[prop]);
      }
    }

    data.data.images = images;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
