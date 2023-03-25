import React from "react";
import styles from "./Categories.module.scss";

import {
  FilterCategoriesEnum,
  FilterCategoryType,
} from "../../redux/filter/types";

const filterCategories = Object.values(FilterCategoriesEnum);

interface CategoriesProps {
  value: FilterCategoryType;
  onChangeCategory: (categoryName: FilterCategoryType) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className={styles.categories}>
        <ul>
          {filterCategories.map((categoryName, index) => (
            <li
              key={index}
              className={categoryName === value ? styles.active : ""}
              onClick={() => onChangeCategory(categoryName)}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
