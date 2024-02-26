import { useTranslations } from "next-intl";

export default function Custom404() {
  const t = useTranslations("NotFoundPage");
  return <h1 className="text-red-500">{t("title")}</h1>;
}
