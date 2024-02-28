import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  FolderOpenIcon,
  UserIcon,
  HomeIcon,
} from "lucide-react";

export const NAV_ICONS = {
  home: <HomeIcon size={20} />,
  about: <UserIcon size={20} />,
  projects: <FolderOpenIcon size={20} />,
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
