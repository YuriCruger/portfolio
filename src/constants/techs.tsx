import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiZod, SiStyledcomponents, SiReactquery } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandRedux,
} from "react-icons/tb";

export const TECHS = [
  {
    title: "JavaScript",
    icon: <IoLogoJavascript />,
    time: "1 year",
  },
  {
    title: "ReactJS",
    icon: <FaReact />,
    time: "10 months",
  },
  {
    title: "React Native",
    icon: <TbBrandReactNative />,
    time: "2 months",
  },
  {
    title: "React Query",
    icon: <SiReactquery />,
    time: "5 months",
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs />,
    time: "4 months",
  },
  {
    title: "TypeScript",
    icon: <TbBrandTypescript />,
    time: "5 months",
  },
  {
    title: "TailwindCSS",
    icon: <TbBrandTailwind />,
    time: "6 months",
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents />,
    time: "3 months",
  },
  {
    title: "Redux",
    icon: <TbBrandRedux />,
    time: "4 months",
  },
  {
    title: "Zod",
    icon: <SiZod />,
    time: "4 months",
  },
];

export type TechProps = (typeof TECHS)[number];
