import Home from "../../assest/icons/menuIcon/home.svg";
import briefcase from "../../assest/icons/menuIcon/briefcase.svg";
import bookOpen from "../../assest/icons/menuIcon/bookOpen.svg";
import handFist from "../../assest/icons/menuIcon/handFist.svg";
import activeDot from "../../assest/icons/menuIcon/activeDot.svg";
import disableDot from "../../assest/icons/menuIcon/disableDot.svg";
import arrowDown from "../../assest/icons/menuIcon/arrowDown.svg";
import arrowRight from "../../assest/icons/menuIcon/arrowRight.svg";
import badge from "../../assest/icons/menuIcon/badge.svg";

export const MenuItems = [
  {
    name: "Overview",
    prepend: Home,
    append: " ",
  },
  {
    name: "Internship",
    prepend: briefcase,
    append: arrowRight,
  },
  {
    name: "Resources",
    prepend: bookOpen,
    append: badge,
  },
  {
    name: "Community",
    prepend: handFist,
    append: arrowDown,
  },
  {
    name: "Design",
    prepend: activeDot,
    append: " ",
  },
  {
    name: "Marketing",
    prepend: disableDot,
    append: " ",
  },
];
