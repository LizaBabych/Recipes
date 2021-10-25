import { SearchState } from "./search.state";
import * as acts from "./search.actions";

const initialState: SearchState = {
  searchValue: "",
};

export default function SearchReducer(
  state: SearchState = initialState,
  action: any
): SearchState {
  switch (action.type) {
    case acts.SearchActions.SET_SEARCH_VALUE: {
      return { ...state, searchValue: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
