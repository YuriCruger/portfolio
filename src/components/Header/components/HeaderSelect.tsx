import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function HeaderSelect() {
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();

  function onSelectChange(value: string) {
    const nextLocale = value;
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    startTransition(() => {
      router.replace(`/${nextLocale}/${currentPath}`);
    });
  }

  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger aria-label="Language selector">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent aria-label="Language options">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt-BR">Português-BR</SelectItem>
      </SelectContent>
    </Select>
  );
}
