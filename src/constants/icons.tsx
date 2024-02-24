import {
  UserRoundCogIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  FolderOpenIcon,
  UserIcon,
} from "lucide-react";

import { GiAchievement } from "react-icons/gi";

export const NAV_ICONS = {
  about: <UserIcon />,
  projects: <FolderOpenIcon />,
};

export const SOCIAL_ICONS = [
  {
    icon: <GithubIcon />,
    url: "https://github.com/YuriCruger",
  },
  {
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/yuricruger/",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/yuricruger/",
  },
];
