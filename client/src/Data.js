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
export const DataforHowWorks = [
  {
    id: 1,
    paragraph: "egjfqjhffeklfb",
    picUrl:
      "http://cdn.shopify.com/s/files/1/0316/7518/7336/articles/organic_skincare_natural_skincare_clean_skincare_6_96ff74ef-eb41-4b3a-968a-5d8cda59bd6e_1200x1200.jpg?v=1607464418",
    header: "1.Ingredients",
  },
  {
    id: 2,
    paragraph: "egjfqjhffeklfb",
    picUrl: "https://ifc-solutions.com/wp-content/uploads/organic-colors.jpg",
    header: "2.We Do The Hard Work For You",
  },
  {
    id: 3,
    paragraph: "egjfqjhffeklfb",
    picUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assorted-fruit-in-bowl-royalty-free-image-903846026-1545573737.jpg",
    header: "3.Add Content Of Kit To Blender",
  },
  {
    id: 4,
    paragraph: "egjfqjhffeklfb",
    picUrl:
      "https://foodal.com/wp-content/uploads/2018/07/7-Smoothie-Solutions-Improve-Your-Blender-Game-with-These-Tips.jpg",
    header: "4.Add Recommended Liquid Base And Blend",
  },
  {
    id: 5,
    paragraph: "egjfqjhffeklfb",
    picUrl:
      "https://foodal.com/wp-content/uploads/2018/07/7-Smoothie-Solutions-Improve-Your-Blender-Game-with-These-Tips.jpg",
    header: "5.Enjoy!",
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
      {
        id: 7,
        url: "/smoothie/",
        text: "General",
        icon: <GiMuscleUp className="icon-small" />,
      },
      ,
    ],
  },
  { id: 8, url: "/locator", text: "Store Locator" },
];
