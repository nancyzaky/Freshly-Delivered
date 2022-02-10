import React from "react";
import { BsCupStraw } from "react-icons/bs";
import { MdBorderColor } from "react-icons/md";
import { FaUsers, FaHome } from "react-icons/fa";
import { CgProfile, CgGym } from "react-icons/cg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { ImCart } from "react-icons/im";
import {
  GiMuscleUp,
  GiFruitBowl,
  GiShinyApple,
  GiBlender,
} from "react-icons/gi";
export const navItems = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/",
    title: "Home",
  },
  {
    id: 3,
    url: "#",
    title: "Sign-Up",
  },
  {
    id: 4,
    url: "#",
    title: "Log-In",
  },
  {
    id: 5,
    url: "#",
    title: "Shopping-Cart",
  },
];

export const sideBarItems = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome className="icon-small" />,
  },
  {
    id: 2,
    url: "#",
    text: "Profile",
    icon: <CgProfile className="icon-small" />,
    arrowUp: <IoMdArrowDropup className="icon-menu" />,
    arrowDown: <IoMdArrowDropdown className="icon-menu" />,
    subLinks: [
      {
        id: 1,
        url: "/signup",
        text: "Sign Up",
        icon: <FaUsers className="icon-small" />,
      },
      {
        id: 2,
        url: "/login",
        text: "Log In",
        icon: <BiLogInCircle className="icon-small" />,
      },

      {
        id: 3,
        url: "/cart",
        text: "Cart",
        icon: <ImCart className="icon-small" />,
      },
      {
        id: 4,
        url: "/orders",
        text: "Orders",
        icon: <MdBorderColor className="icon-small" />,
      },
    ],
  },
  {
    id: 3,
    url: "#",
    text: "Smoothies",
    icon: <GiBlender className="icon-small" />,
    arrowUp: <IoMdArrowDropup className="icon-menu" />,
    arrowDown: <IoMdArrowDropdown className="icon-menu" />,
    subLinks: [
      {
        id: 1,
        url: "/smoothie/",
        text: "Diabetes",
        icon: <BsCupStraw className="icon-small" />,
      },
      {
        id: 2,
        url: "/smoothie/",
        text: "Muscle Nutrition",
        icon: <CgGym className="icon-small" />,
      },
      {
        id: 3,
        url: "/smoothie/",
        text: "Inflamation",
        icon: <GiFruitBowl className="icon-small" />,
      },
      {
        id: 4,
        url: "/smoothie/",
        text: "Glowy Skin",
        icon: <GiShinyApple className="icon-small" />,
      },
      {
        id: 6,
        url: "/smoothie/",
        text: "Post Work Out",
        icon: <GiMuscleUp className="icon-small" />,
      },
    ],
  },
];
