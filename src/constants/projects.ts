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
        description:
          "The dashboard page consolidates information about the available products. On it, you will find the total number of products, the total revenue from the products, and the product with the lowest stock. Additionally, there is a chart illustrating the quantity of stock per category.",
        image: "/market.png",
        className: "md:col-span-2",
      },
      {
        id: "2",
        title: "login",
        description:
          "The login screen provides quick access via email/password or Google, with secure validation through Firebase. New users can easily register. In case of forgotten password, recovery is possible through a reset email. Convenient and secure.",
        image: "/market_login.png",
        className: "md:col-span-1",
      },
      {
        id: "3",
        title: "Cloud Firestore",
        description:
          "The project is integrated with Firebase, using it as both the database and authentication system. Any interaction with the table is automatically updated in the real-time database.",
        image: "/market_firebase.png",
        className: "md:col-span-1",
      },
      {
        id: "4",
        title: "table",
        description:
          "The product table lists and organizes all available items. Through a simple form, users can add and delete products. Name filtering facilitates searches, and the Excel download option provides convenience in data management.",
        image: "/market_table.png",
        className: "md:col-span-2",
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
    cards: [
      {
        id: "1",
        title: "home page",
        description:
          "The home page of the 'Dine' project features an impressive design developed with Styled Components. It stands out for its responsiveness and modern layout, providing a engaging visual experience across various devices.",
        image: "/dine/dine_homepage.png",
        className: "md:col-span-2",
      },
      {
        id: "2",
        title: "modal reservation",
        description:
          "A reservation confirmation modal displaying the entered information upon form completion.",
        image: "/dine/dine_modal.png",
        className: "md:col-span-1",
      },
      {
        id: "3",
        title: "booking page",
        description:
          "The 'Booking Page' is a dedicated page for filling out the restaurant reservation form. Employing validation, the form utilizes the capabilities of Hook Form and Zod to ensure accuracy and integrity of the entered data.",
        image: "/dine/dine_booking.png",
        className: "md:col-span-3",
      },
    ],
  },
  {
    id: "3",
    slug: "nlw-notes",
    title: "NLW Notes",
    description:
      "Developed during the Rocketseat NLW Expert event, this project allows creating voice notes using the SpeechRecognition API. With technologies such as TypeScript, React, and Tailwind, users can add, edit, and remove notes, both through text and voice.",
    image: "/nlwNotes.png",
    cards: [
      {
        id: "1",
        title: "Notes",
        description:
          "The home page of the 'Dine' project features an impressive design developed with Styled Components. It stands out for its responsiveness and modern layout, providing a engaging visual experience across various devices.",
        image: "/notes/nlwNotes.png",
        className: "md:col-span-3",
      },
      {
        id: "2",
        title: "New note",
        description:
          "A reservation confirmation modal displaying the entered information upon form completion.",
        image: "/notes/notes_new_note.png",
        className: "md:col-span-1",
      },
      {
        id: "3",
        title: "Certificate",
        description: "",
        image: "/notes/notes_certificate.png",
        className: "md:col-span-2",
      },
    ],
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
    cards: [
      {
        id: "1",
        title: "Home page",
        description:
          "Developed in React Native, similar to the interface of food delivery apps like iFood. Users can navigate through the intuitive home page and place orders on the store page.",
        image: "/food_delivery/food_home.png",
        className: "md:col-span-1 md:row-span-2",
      },
      {
        id: "2",
        title: "Cart",
        description:
          "This is the shopping cart page where all selected products are displayed. The page calculates the total order amount. Additionally, there is a message field available for users to input delivery information.",
        image: "/food_delivery/food_cart.png",
        className: "md:col-span-1 md:row-span-2",
      },
      {
        id: "3",
        title: "Product page",
        description:
          "This is the individual product page, showcasing detailed information about the item. Users have the option to add the product to their shopping cart directly from this page.",
        image: "/food_delivery/food_product.png",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        id: "4",
        title: "Certificate",
        description: "",
        image: "/food_delivery/food_certificate.jpeg",
        className: "md:col-span-1",
      },
    ],
  },
  {
    id: "5",
    slug: "quiz-app",
    title: "Quiz App",
    description:
      "The Quiz App is an interactive question and answer application, created as part of a challenge proposed by Frontend Mentor. It offers users the option to choose between light and dark modes. This project was developed using React, Axios, React Query, TailwindCSS, and TypeScript. The quiz content is fully powered by an API, ensuring the update and diversity of the questions.",
    image: "/quiz.png",
    cards: [
      {
        id: "1",
        title: "home page",
        description:
          "The homepage allows users to choose the quiz theme and switch between dark and light layout modes using a toggle switch.",
        image: "/quiz/quiz.png",
        className: "md:col-span-2",
      },
      {
        id: "2",
        title: "home page - dark mode",
        description: "",
        image: "/quiz/quiz_dark.png",
        className: "md:col-span-1",
      },
      {
        id: "3",
        title: "questions",
        description:
          "The user receives a question, chooses an answer, and upon submitting the response, views both incorrect and correct answers. A progress bar indicates how many questions are still remaining.",
        image: "/quiz/quiz_questions.png",
        className: "md:col-span-2",
      },
      {
        id: "4",
        title: "result",
        description:
          "Displays the number of correct answers obtained by the user and provides the option to play again.",
        image: "/quiz/quiz_result.png",
        className: "md:col-span-1",
      },
    ],
  },
  {
    id: "6",
    slug: "todo",
    title: "Todo",
    description:
      "The Todo is my first React project, developed in response to a challenge from Frontend Mentor. This responsive task list application offers light and dark modes. Through this project, I was able to explore and apply fundamental React concepts, marking the beginning of my journey in web application development.",
    image: "/todo.png",
    cards: [
      {
        id: "1",
        title: "todo",
        description:
          "Allows adding and deleting tasks, marking them as completed, filtering between all, active, or completed tasks, and provides a button to clear completed tasks. A counter displays how many tasks are still pending.",
        image: "/todo/todo_light.png",
        className: "md:col-span-3",
      },
      {
        id: "2",
        title: "dark-mode",
        description: "",
        image: "/todo/todo_dark.png",
        className: "md:col-span-3",
      },
    ],
  },
];

export type ProjectFirstCardProps = (typeof PROJECTS_CARDS_FIRST)[number];
export type ProjectSecondCardProps = (typeof PROJECTS_CARDS_SECOND)[number];
