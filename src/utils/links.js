import { BiCameraMovie, BiTrendingUp } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaTv, FaRegCompass } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const links = [
  {
    id: 1,
    text: "movie",
    path: "/",
    icon: <BiCameraMovie />,
  },
  {
    id: 2,
    text: "trending",
    path: "/trending?p=1",
    icon: <BiTrendingUp />,
  },
  {
    id: 3,
    text: "discover",
    path: "/discover",
    icon: <FaRegCompass />,
  },
  {
    id: 4,
    text: "favorite",
    path: "/favorite",
    icon: <AiFillStar />,
  },
  {
    id: 5,
    text: "setting",
    path: "/setting",
    icon: <FiSettings />,
  },
];

export default links;
