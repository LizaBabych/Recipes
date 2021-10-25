import { ax } from "../request";
import { IDish } from "../types";

export const getMenu = () => {
  const url = "http://localhost:4200/dishes";
  return ax.get(url).then(({ data }): IDish[] => {
    return data;
  });
};

export const getItem = (id: string) => {
  const url = `http://localhost:4200/dishes/${id}`;
  return ax.get(url).then(({ data }): IDish[] => {
    return data;
  });
};
