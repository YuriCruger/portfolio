import { useTranslations } from "next-intl";
import { ProfileInfoRow } from "../ProfileInfoRow";

export function ProfileInfo() {
  const t = useTranslations("about_section");
  return (
    <div className="mt-5">
      <ProfileInfoRow
        nameLabel={t("nameLabel.name")}
        fieldValue="Yuri Cruger"
      />
      <ProfileInfoRow
        nameLabel={t("nameLabel.birth")}
        fieldValue={t("fieldValue.birth")}
      />
      <ProfileInfoRow
        nameLabel={t("nameLabel.position")}
        fieldValue={t("fieldValue.position")}
      />
      <ProfileInfoRow nameLabel="email" fieldValue="aoddrewiid@gmail.com" />
    </div>
  );
}
