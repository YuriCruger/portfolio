import { Card } from "../components/Card";
import market from "@public/market.png";
import dine from "@public/dine.png";
import nlwNotes from "@public/nlwNotes.png";
import nlwFood from "@public/nlwFood.webp";
import quiz from "@public/quiz.png";
import todo from "@public/todo.png";

export const PROJECTS_CARDS_FIRST = [
  {
    card: (
      <Card
        title="Market Admin"
        description="This web project, developed in React and Next.js with TypeScript, provides an effective solution for inventory management. Highlights include secure authentication via Google, an interactive inventory page with features such as addition, deletion, filtering, and export to Excel. The dashboard presents visual insights into inventory by category, using dynamic charts from the Recharts library. Integration with Firebase ensures a reliable experience, while Redux manages the application state for smooth and efficient navigation."
        image={market}
      />
    ),
  },
  {
    card: (
      <Card
        title="Dine Restaurant"
        description="Developed in React, Dine is a Frontendmentor challenge featuring forms with Hook Form and Zod for efficient validation, and styled using Styled Components."
        image={dine}
      />
    ),
  },
  {
    card: (
      <Card
        title="NLW Notes"
        description="Developed during the Rocketseat NLW Expert event, this project enables creating voice notes using the SpeechRecognition API. With technologies such as TypeScript, React, and Tailwind, users can manage notes through text or voice."
        image={nlwNotes}
      />
    ),
  },
];

export const PROJECTS_CARDS_SECOND = [
  {
    card: (
      <Card
        title="NLW Food Delivery"
        description="This project was created during the Rocketseat NLW event and developed in React Native, utilizing technologies like Zustand and Tailwind. It is a food delivery application, allowing users to choose orders, access the shopping cart, and send the order via WhatsApp message."
        image={nlwFood}
      />
    ),
  },
  {
    card: (
      <Card
        title="Quiz App"
        description="The Quiz App is an interactive app developed for a Frontend Mentor challenge, with adaptable design and dynamic questions via an API."
        image={quiz}
      />
    ),
  },
  {
    card: (
      <Card
        title="Todo"
        description="The Todo is my first React project, created in response to a Frontend Mentor challenge. This responsive to-do list app provides both light and dark modes, offering users a personalized experience."
        image={todo}
      />
    ),
  },
];
