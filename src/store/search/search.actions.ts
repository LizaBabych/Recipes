export enum SearchActions {
  SET_SEARCH_VALUE = "[search flow] set search value",
}

export const SetSearchItemAct = (searchValue: string) => {
  return {
    type: SearchActions.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};
