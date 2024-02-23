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

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

type contactProps = z.infer<typeof contactSchema>;

const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!;

export function Footer() {
  const { toast } = useToast();
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
        title: "Message sent successfully!",
      });

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className="container flex flex-col justify-center gap-5 py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact"
        className="mx-auto flex w-full flex-col gap-5 sm:w-[500px]"
      >
        <h2 className="text-center text-4xl font-bold text-zinc-950 dark:text-zinc-300">
          Contact me
        </h2>

        <div className="relative">
          <IconContainer>
            <UserIcon />
          </IconContainer>
          <Input placeholder="Name" {...register("name")} />
        </div>

        <div className="relative">
          <IconContainer>
            <MailIcon size={20} />
          </IconContainer>
          <Input placeholder="Email" {...register("email")} />
        </div>
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}

        <div className="relative">
          <IconContainer className="top-2.5 translate-y-0">
            <MessageSquareTextIcon size={20} />
          </IconContainer>
          <Textarea placeholder="Message" {...register("message")} />
        </div>

        <Button disabled={isSubmitting} type="submit">
          Send
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-900 dark:text-zinc-400">
        Code by{" "}
        <span className="text-lg font-bold text-zinc-950 dark:text-zinc-300">
          Yuri Cruger
        </span>
      </p>
    </footer>
  );
}
