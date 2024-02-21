import { Card } from "../Card";
import market from "@public/market.png";
import dine from "@public/dine.png";
import nlwNotes from "@public/nlwNotes.png";
import nlwFood from "@public/nlwFood.webp";
import quiz from "@public/quiz.png";
import todo from "@public/todo.png";
export function ProjectsSection() {
  return (
    <section id="projects" className="container py-5">
      <div className="mb-5 flex items-center justify-center gap-5 border-b-4 border-zinc-700 pb-5">
        <div className="h-1 w-40 rounded-md bg-zinc-700" />
        <h2 className="text-4xl font-bold text-zinc-300">Projects</h2>
        <div className="h-1 w-40 rounded-md bg-zinc-700" />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Market Admin"
          description="This is a web inventory management project in React and Next.js. It features email or Google login authentication, inventory functionalities, graphical insights, Firebase integration, and state management via Redux."
          image={market}
        />
        <Card
          title="Dine Restaurant"
          description="Developed in React, Dine is a Frontendmentor challenge featuring forms with Hook Form and Zod for efficient validation, and styled using Styled Components."
          image={dine}
        />
        <Card
          title="NLW Notes"
          description="Developed during the Rocketseat NLW Expert event, this project enables creating voice notes using the SpeechRecognition API. With technologies such as TypeScript, React, and Tailwind, users can manage notes through text or voice."
          image={nlwNotes}
        />
        <Card
          title="NLW Food Delivery"
          description="This project was created during the Rocketseat NLW event and developed in React Native, utilizing technologies like Zustand and Tailwind. It is a food delivery application, allowing users to choose orders, access the shopping cart, and send the order via WhatsApp message."
          image={nlwFood}
        />
        <Card
          title="Quiz App"
          description="The Quiz App is an interactive app developed for a Frontend Mentor challenge, with adaptable design and dynamic questions via an API."
          image={quiz}
        />
        <Card
          title="Todo"
          description="The Todo is my first React project, created in response to a Frontend Mentor challenge. This responsive to-do list app provides both light and dark modes, offering users a personalized experience."
          image={todo}
        />
      </div>
    </section>
  );
}
