import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

import closeicon from "../../img/close.svg";
import searchicon from "../../img/search.svg";
import { searchItems } from "../../redux/items/asyncActions";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const hadleChengeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate('search');
    setSearchValue(e.target.value);
    searchDebounce(e.target.value);
  };

  const searchDebounce = React.useCallback(
    debounce((str) => {
      // @ts-ignore
      dispatch(searchItems(str));
    }, 500),
    []
  );

  const handleClickClose = () => {
    setSearchValue("");
    searchDebounce("");
    inputRef.current?.focus();
  };

  return (
    <div className="search">
      <img className="search_icon" src={searchicon} alt="search_icon" />
      <input
        ref={inputRef}
        onChange={hadleChengeInput}
        value={searchValue}
        placeholder="Найти товар..."
        className="search_search"
      />
      {searchValue && (
        <img
          onClick={handleClickClose}
          className="search_close"
          src={closeicon}
          alt="close_icon"
        />
      )}
    </div>
  );
};

export default Search;
