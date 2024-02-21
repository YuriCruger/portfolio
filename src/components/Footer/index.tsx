import { MailIcon, MessageSquareTextIcon, UserIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="container flex flex-col justify-center gap-5 py-5">
      <form id="contact" className="mx-auto flex w-[500px] flex-col gap-5">
        <h2 className="text-center text-4xl font-bold text-zinc-300">
          Contact me
        </h2>

        <div className="relative">
          <div className="absolute left-3 top-[50%] translate-y-[-50%] text-zinc-500">
            <UserIcon />
          </div>
          <Input placeholder="Name" />
        </div>

        <div className="relative">
          <div className="absolute left-3 top-[50%] translate-y-[-50%] text-zinc-500">
            <MailIcon size={20} />
          </div>
          <Input placeholder="Email" />
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2.5  text-zinc-500">
            <MessageSquareTextIcon size={20} />
          </div>
          <Textarea placeholder="Message" />
        </div>

        <Button>Send</Button>
      </form>

      <p className="text-center text-sm text-zinc-400">
        Code by{" "}
        <span className="text-lg font-bold text-zinc-300">Yuri Cruger</span>
      </p>
    </footer>
  );
}
