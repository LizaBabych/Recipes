import { ax } from "../request";
import { foodsImages } from "../helpers/foodImages";
import { randomInteger } from "../helpers/randomizer";
import { IDish } from "../types";

export const getMenu = () => {
  const url = "https://random-data-api.com/api/food/random_food?size=15";
  return ax
    .get(url, {
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "6da97a8fefmsh5038eb610729446p1ac3cejsnee36f2bd6aac",
      },
    })
    .then((res: { data: IDish[] }) => {
      return res.data.map((item: IDish, idx: number) => {
        return {
          ...item,
          price: randomInteger(),
          img: foodsImages[idx],
          likes: randomInteger(0, 100),
        };
      });
    });
};
