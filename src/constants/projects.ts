export const PROJECTS_CARDS_FIRST = [
  {
    id: "1",
    slug: "market-admin",
    title: "Market Admin",
    description:
      "This web project, developed in React and Next.js with TypeScript, provides an effective solution for inventory management. Highlights include secure authentication via Google, an interactive inventory page with features such as addition, deletion, filtering, and export to Excel. The dashboard presents visual insights into inventory by category, using dynamic charts from the Recharts library. Integration with Firebase ensures a reliable experience, while Redux manages the application state for smooth and efficient navigation.",
    image: "/market.png",
    cards: [
      {
        id: "1",
        title: "dashboard",
        description: "olamundo",
        image: "/market.png",
        className: "md:col-span-2",
        content: "olá mundo",
      },
      {
        id: "1",
        title: "table",
        description: "olamundo",
        image: "/market_table.png",
        className: "md:col-span-2",
        content: "olá mundo",
      },
    ],
  },
  {
    id: "2",
    slug: "dine-restaurant",
    title: "Dine Restaurant",
    description:
      "I present Dine, my front-end project inspired by Frontendmentor. Developed with React, I used Hook Form and Zod to enhance form validation efficiently. Styling is done with Styled Components, providing an elegant and flexible design.",
    image: "/dine.png",
  },
  {
    id: "3",
    slug: "nlw-notes",
    title: "NLW Notes",
    description:
      "Developed during the Rocketseat NLW Expert event, this project allows creating voice notes using the SpeechRecognition API. With technologies such as TypeScript, React, and Tailwind, users can add, edit, and remove notes, both through text and voice.",
    image: "/nlwNotes.png",
  },
];

export const PROJECTS_CARDS_SECOND = [
  {
    id: "4",
    slug: "nlw-food",
    title: "NLW Food Delivery",
    description:
      "This project was created during the Rocketseat NLW event and developed in React Native, utilizing technologies like Zustand and Tailwind. It is a food delivery application, allowing users to choose orders, access the shopping cart, and send the order via WhatsApp message.",
    image: "/nlwFood.webp",
  },
  {
    id: "5",
    slug: "quiz-app",
    title: "Quiz App",
    description:
      "The Quiz App is an interactive question and answer application, created as part of a challenge proposed by Frontend Mentor. It offers users the option to choose between light and dark modes. This project was developed using React, Axios, React Query, TailwindCSS, and TypeScript. The quiz content is fully powered by an API, ensuring the update and diversity of the questions.",
    image: "/quiz.png",
  },
  {
    id: "6",
    slug: "todo",
    title: "Todo",
    description:
      "The Todo is my first React project, developed in response to a challenge from Frontend Mentor. This responsive task list application offers light and dark modes. Through this project, I was able to explore and apply fundamental React concepts, marking the beginning of my journey in web application development.",
    image: "/todo.png",
  },
];

export type ProjectFirstCardProps = (typeof PROJECTS_CARDS_FIRST)[number];
export type ProjectSecondCardProps = (typeof PROJECTS_CARDS_SECOND)[number];
