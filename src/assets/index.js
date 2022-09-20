// Importing the Icons as a component so i can use them like -> <CheckIcon />

import { ReactComponent as CheckIcon } from "./desktop/icon-check.svg";
import { ReactComponent as LocatonIcon } from "./desktop/icon-location.svg";
import { ReactComponent as MoonIcon } from "./desktop/icon-moon.svg";
import { ReactComponent as SearchIcon } from "./desktop/icon-search.svg";
import { ReactComponent as SunIcon } from "./desktop/icon-sun.svg";
import { ReactComponent as LogoIcon } from "./desktop/logo.svg";

// Filter Icon only for mobile users
import { ReactComponent as FilterIcon } from "./mobile/icon-filter.svg";



// Exporting them like this so i can import all of them at the same time

export {
  CheckIcon,
  LocatonIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  LogoIcon,
  FilterIcon,
};
