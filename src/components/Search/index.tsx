import React from "react";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../redux/store";
import { fetchImages } from "../../redux/images/asyncActions";

const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const dispatch = useAppDispatch();

  // const updateSearchValue = React.useCallback(
  //   debounce((str) => {
  //     dispatch(fetchImages());
  //   }, 800),
  //   []
  // );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // updateSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};

export default Search;
