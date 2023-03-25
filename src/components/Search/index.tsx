import React from "react";
import debounce from "lodash.debounce";

import style from "./Search.module.scss";

import { useAppDispatch } from "../../redux/store";
import { setSearchValue } from "../../redux/filter/slice";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";

const Search: React.FC = React.memo(() => {
  const { searchValue } = useSelector(selectFilter);

  const [value, setValue] = React.useState<string>(searchValue);
  const inputRef = React.useRef(null);

  const dispatch = useAppDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 800),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const englishSearchValue = event.target.value.replace(
      /[^A-Za-z-" "]/gi,
      ""
    );
    setValue(englishSearchValue);
    updateSearchValue(englishSearchValue);
  };

  const clearSearchValue = () => {
    setValue("");
    dispatch(setSearchValue(""));
  };

  return (
    <div className={style.search}>
      <svg
        className={style.search_icon}
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.7778 25L16.2222 17M1.11111 10.3333C1.11111 11.559 1.33912 12.7727 1.7821 13.905C2.22509 15.0374 2.87438 16.0663 3.69291 16.933C4.51145 17.7997 5.48318 18.4872 6.55265 18.9562C7.62211 19.4253 8.76835 19.6667 9.92593 19.6667C11.0835 19.6667 12.2298 19.4253 13.2992 18.9562C14.3687 18.4872 15.3404 17.7997 16.1589 16.933C16.9775 16.0663 17.6268 15.0374 18.0698 13.905C18.5127 12.7727 18.7407 11.559 18.7407 10.3333C18.7407 9.10766 18.5127 7.89399 18.0698 6.76162C17.6268 5.62925 16.9775 4.60035 16.1589 3.73367C15.3404 2.86699 14.3687 2.1795 13.2992 1.71046C12.2298 1.24141 11.0835 1 9.92593 1C8.76835 1 7.62211 1.24141 6.55265 1.71046C5.48318 2.1795 4.51145 2.86699 3.69291 3.73367C2.87438 4.60035 2.22509 5.62925 1.7821 6.76162C1.33912 7.89399 1.11111 9.10766 1.11111 10.3333Z"
          stroke="#676F9D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Write something..."
      />
      {value && (
        <svg
          onClick={clearSearchValue}
          className={style.search_icon_clear}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 25 26"
        >
          <path
            d="M7 7L17 17"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17 7L7 17"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
    </div>
  );
});

export default Search;
