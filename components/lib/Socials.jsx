import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "#",
  },
  {
    icon: <RiInstagramFill />,
    path: "#",
  },
  {
    icon: <RiTwitterXFill />,
    path: "#",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, indx) => {
        return (
          <Link href={item.path} key={indx} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
