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
import { differenceInMonths } from "date-fns";
import { useTranslations } from "next-intl";

type TechComponent = {
  startDate: Date;
};

export const TechComponent = ({ startDate }: TechComponent) => {
  const t = useTranslations();

  const getExperienceTime = (startDate: Date) => {
    const months = differenceInMonths(new Date(), startDate);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years > 0 && remainingMonths === 0) {
      return t("experience.year", { count: years });
    } else if (years === 1 && remainingMonths === 1) {
      return t("experience.yearAndMonth", {
        yearCount: years,
        monthCount: remainingMonths,
      });
    } else {
      return years > 0
        ? t("experience.yearAndMonth", {
            yearCount: years,
            monthCount: remainingMonths,
          })
        : t("experience.months", { count: months });
    }
  };

  return getExperienceTime(startDate);
};

export const TECHS = [
  {
    title: "JavaScript",
    icon: <IoLogoJavascript />,
    startDate: new Date(2023, 0),
  },
  {
    title: "ReactJS",
    icon: <FaReact />,
    startDate: new Date(2023, 5),
  },
  {
    title: "React Native",
    icon: <TbBrandReactNative />,
    startDate: new Date(2023, 11),
  },
  {
    title: "React Query",
    icon: <SiReactquery />,
    startDate: new Date(2023, 10),
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs />,
    startDate: new Date(2023, 9),
  },
  {
    title: "TypeScript",
    icon: <TbBrandTypescript />,
    startDate: new Date(2023, 8),
  },
  {
    title: "TailwindCSS",
    icon: <TbBrandTailwind />,
    startDate: new Date(2023, 8),
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents />,
    startDate: new Date(2023, 10),
  },
  {
    title: "Redux",
    icon: <TbBrandRedux />,
    startDate: new Date(2023, 10),
  },
  {
    title: "Zod",
    icon: <SiZod />,
    startDate: new Date(2023, 9),
  },
];

export type TechProps = (typeof TECHS)[number];
