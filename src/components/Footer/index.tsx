"use client";

import { MailIcon, MessageSquareTextIcon, UserIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { IconContainer } from "./components/IconContainer";
import { SectionTitle } from "../SectionTitle";
import { BackgroundTextureOverlay } from "../BackgroundTextureOverlay";
import { useTranslations } from "next-intl";

const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!;

export function Footer() {
  const t = useTranslations("footer");
  const { toast } = useToast();

  const contactSchema = z.object({
    name: z.string().min(1, t("form.name")),
    email: z.string().email(t("form.email")),
    message: z.string().min(1, t("form.message")),
  });

  type contactProps = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactProps>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(formData: contactProps) {
    const name = formData.name;
    const email = formData.email;
    const message = formData.message;

    const data = {
      embeds: [
        {
          title: "Detalhes do Contato",
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "Email",
              value: email,
              inline: true,
            },
            {
              name: "Message",
              value: message,
            },
          ],
        },
      ],
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: t("form.toast"),
      });

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className="relative flex flex-col justify-center gap-5 bg-zinc-200 py-5 dark:bg-zinc-950">
      <BackgroundTextureOverlay />
      <SectionTitle title={t("title")} />
      <div className="container sm:max-w-[700px]">
        <div className="mb-5 space-y-5 text-center">
          <span className="text-xl font-bold text-zinc-800 dark:text-zinc-300">
            {t("subtitle")}
          </span>
          <p className="text-sm tracking-wider text-zinc-700 dark:text-zinc-400">
            {t("message")}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contact"
          className=" flex w-full flex-col gap-5"
        >
          <div className="relative">
            <IconContainer>
              <UserIcon />
            </IconContainer>
            <Input
              placeholder={t("form.placeholder.name")}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name?.message}</p>
            )}
          </div>

          <div className="relative">
            <IconContainer>
              <MailIcon size={20} />
            </IconContainer>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <IconContainer>
              <MessageSquareTextIcon size={20} />
            </IconContainer>
            <Textarea
              placeholder={t("form.placeholder.message")}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button disabled={isSubmitting} type="submit">
            {t("button")}
          </Button>
        </form>
      </div>

      <p className="text-center text-sm text-zinc-900 dark:text-zinc-400">
        {t("codeBy")}{" "}
        <span className="text-lg font-bold text-zinc-950 dark:text-zinc-300">
          Yuri Cruger
        </span>
      </p>
    </footer>
  );
}
