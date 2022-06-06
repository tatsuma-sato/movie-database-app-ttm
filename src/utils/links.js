import { BiCameraMovie, BiTrendingUp } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaTv } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const links = [
  {
    id: 1,
    text: "movie",
    path: "/all-movies",
    icon: <BiCameraMovie />,
  },
  {
    id: 2,
    text: "trending",
    path: "/trending",
    icon: <BiTrendingUp />,
  },
  {
    id: 3,
    text: "drama",
    path: "/all-dramas",
    icon: <FaTv />,
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

export default links