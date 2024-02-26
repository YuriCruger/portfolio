import { Card } from "../components/Card";
import market from "@public/market.png";
import dine from "@public/dine.png";
import nlwNotes from "@public/nlwNotes.png";
import nlwFood from "@public/nlwFood.webp";
import quiz from "@public/quiz.png";
import todo from "@public/todo.png";

export const PROJECTS_CARDS_FIRST = [
  {
    name: "market_admin",
    card: (
      <Card
        title="Market Admin"
        description="This web project, developed in React and Next.js with TypeScript, provides an effective solution for inventory management.
           Highlights include secure authentication via Google, an interactive inventory page with features such as addition, deletion, filtering, and export to Excel.
           The dashboard presents visual insights into inventory by category, using dynamic charts from the Recharts library.
           Integration with Firebase ensures a reliable experience, while Redux manages the application state for smooth and efficient navigation."
        image={market}
      />
    ),
  },
  {
    name: "dine_restaurant",
    card: (
      <Card
        title="Dine Restaurant"
        description="I present Dine, my front-end project inspired by Frontendmentor.
          Developed with React, I used Hook Form and Zod to enhance form validation efficiently.
          Styling is done with Styled Components, providing an elegant and flexible design."
        image={dine}
      />
    ),
  },
  {
    name: "nlw_notes",
    card: (
      <Card
        title="NLW Notes"
        description="
         Developed during the Rocketseat NLW Expert event, this project allows creating voice notes using the SpeechRecognition API.
         With technologies such as TypeScript, React, and Tailwind, users can add, edit, and remove notes, both through text and voice."
        image={nlwNotes}
      />
    ),
  },
];

export const PROJECTS_CARDS_SECOND = [
  {
    name: "nlw_food",
    card: (
      <Card
        title="NLW Food Delivery"
        description="This project was created during the Rocketseat NLW event and developed in React Native, utilizing technologies like Zustand and Tailwind. It is a food delivery application, allowing users to choose orders, access the shopping cart, and send the order via WhatsApp message."
        image={nlwFood}
      />
    ),
  },
  {
    name: "quiz_app",
    card: (
      <Card
        title="Quiz App"
        description="The Quiz App is an interactive question and answer application, created as part of a challenge proposed by Frontend Mentor.
           It offers users the option to choose between light and dark modes.
           This project was developed using React, Axios, React Query, TailwindCSS, and TypeScript.
           The quiz content is fully powered by an API, ensuring the update and diversity of the questions."
        image={quiz}
      />
    ),
  },
  {
    name: "todo",
    card: (
      <Card
        title="Todo"
        description="
         The Todo is my first React project, developed in response to a challenge from Frontend Mentor.
         This responsive task list application offers light and dark modes.
         Through this project, I was able to explore and apply fundamental React concepts, marking the beginning of my journey in web application development."
        image={todo}
      />
    ),
  },
];
