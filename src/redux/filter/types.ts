export interface FilterState {
  searchValue: string;
  imageCount: number;
  category: FilterCategoryType;
}

export type FilterCategoryType = FilterCategoriesEnum | "";

export enum FilterCategoriesEnum {
  AESTHETIC = "Aesthetic",
  ANIMALS = "Animals",
  ART = "Art",
  CARS = "Cars",
  CITY = "City",
  FANTASY = "Fantasy",
  FLOWERS = "Flowers",
  MINIMALISM = "Minimalism",
  FOOD = "Food",
  LOVE = "Love",
  MUSIC = "Music",
  NATURE = "Nature",
  SPORT = "Sport",
  WORDS = "Words",
}
