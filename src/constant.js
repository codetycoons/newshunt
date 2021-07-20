const TRENDING = 1;
const ENTERTAINMENT = 2;
const BUSINESS = 3;
const SPORTS = 4;
const HEALTH = 5;
const SCIENCE = 6;
const TECHNOLOGY = 7;

const navigationOptions = [
  {
    id: TRENDING,
    name: "Trending",
    isActive: true,
  },
  {
    id: ENTERTAINMENT,
    name: "Entertainment",
    isActive: false,
  },
  {
    id: BUSINESS,
    name: "Business",
    isActive: false,
  },
  {
    id: SPORTS,
    name: "Sports",
    isActive: false,
  },
  {
    id: HEALTH,
    name: "Health",
    isActive: false,
  },
  {
    id: SCIENCE,
    name: "Science",
    isActive: false,
  },
  {
    id: TECHNOLOGY,
    name: "Technology",
    isActive: false,
  },
];

const NAVIGATION_OPTIONS_RESPONSE = {
  TRENDING: "articles",
  OTHERS: "sources",
};

module.exports = {
  navigationOptions,
  TRENDING,
  NAVIGATION_OPTIONS_RESPONSE,
};
