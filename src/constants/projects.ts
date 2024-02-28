import { useTranslations } from "next-intl";

export const useFirstProjects = () => {
  const t_market = useTranslations("projects_section.projects.market_admin");
  const t_dine = useTranslations("projects_section.projects.dine_restaurant");
  const t_notes = useTranslations("projects_section.projects.nlw_notes");

  return [
    {
      id: "1",
      slug: "market-admin",
      title: t_market("title"),
      description: t_market("description"),
      image: "/market/market.png",
      repository: "https://github.com/YuriCruger/Market-adm",
      web: "https://market-adm.vercel.app/",
      cards: [
        {
          id: "1",
          title: t_market("cards.first.title"),
          description: t_market("cards.first.description"),
          image: "/market.png",
          className: "md:col-span-2",
        },
        {
          id: "2",
          title: t_market("cards.second.title"),
          description: t_market("cards.second.description"),
          image: "/market_login.png",
          className: "md:col-span-1",
        },
        {
          id: "3",
          title: t_market("cards.third.title"),
          description: t_market("cards.third.description"),
          image: "/market_firebase.png",
          className: "md:col-span-1",
        },
        {
          id: "4",
          title: t_market("cards.fourth.title"),
          description: t_market("cards.fourth.description"),
          image: "/market_table.png",
          className: "md:col-span-2",
        },
      ],
    },
    {
      id: "2",
      slug: "dine-restaurant",
      title: t_dine("title"),
      description: t_dine("description"),
      image: "/dine/dine_homepage.png",
      repository: "https://github.com/YuriCruger/Restaurant",
      web: "https://restaurant-web-vercel.vercel.app/",
      cards: [
        {
          id: "1",
          title: t_dine("cards.first.title"),
          description: t_dine("cards.first.description"),
          image: "/dine/dine_homepage.png",
          className: "md:col-span-2",
        },
        {
          id: "2",
          title: t_dine("cards.second.title"),
          description: t_dine("cards.second.description"),
          image: "/dine/dine_modal.png",
          className: "md:col-span-1",
        },
        {
          id: "3",
          title: t_dine("cards.third.title"),
          description: t_dine("cards.third.description"),
          image: "/dine/dine_booking.png",
          className: "md:col-span-3",
        },
      ],
    },
    {
      id: "3",
      slug: "nlw-notes",
      title: t_notes("title"),
      description: t_notes("description"),
      image: "/notes/nlwNotes.png",
      repository: "https://github.com/YuriCruger/nlw-notes",
      web: "https://nlw-notes-eight.vercel.app/",
      cards: [
        {
          id: "1",
          title: t_notes("cards.first.title"),
          description: t_notes("cards.first.description"),
          image: "/notes/nlwNotes.png",
          className: "md:col-span-3",
        },
        {
          id: "2",
          title: t_notes("cards.second.title"),
          description: t_notes("cards.second.description"),
          image: "/notes/notes_new_note.png",
          className: "md:col-span-1",
        },
        {
          id: "3",
          title: t_notes("cards.third.title"),
          description: "",
          image: "/notes/notes_certificate.png",
          className: "md:col-span-2",
        },
      ],
    },
  ];
};

export const useSecondProjects = () => {
  const t_food = useTranslations("projects_section.projects.nlw_food");
  const t_quiz = useTranslations("projects_section.projects.quiz_app");
  const t_todo = useTranslations("projects_section.projects.todo");

  return [
    {
      id: "4",
      slug: "nlw-food",
      title: t_food("title"),
      description: t_food("description"),
      image: "/food_delivery/nlwFood.webp",
      repository: "https://github.com/YuriCruger/nlw-food-delivery",
      web: "",
      cards: [
        {
          id: "1",
          title: t_food("cards.first.title"),
          description: t_food("cards.first.description"),
          image: "/food_delivery/food_home.png",
          className: "md:col-span-1 md:row-span-2",
        },
        {
          id: "2",
          title: t_food("cards.second.title"),
          description: t_food("cards.second.description"),
          image: "/food_delivery/food_cart.png",
          className: "md:col-span-1 md:row-span-2",
        },
        {
          id: "3",
          title: t_food("cards.third.title"),
          description: t_food("cards.third.description"),
          image: "/food_delivery/food_product.png",
          className: "md:col-span-1 md:row-span-1",
        },
        {
          id: "4",
          title: t_food("cards.fourth.title"),
          description: "",
          image: "/food_delivery/food_certificate.jpeg",
          className: "md:col-span-1",
        },
      ],
    },
    {
      id: "5",
      slug: "quiz-app",
      title: t_quiz("title"),
      description: t_quiz("description"),
      image: "/quiz/quiz.png",
      repository: "https://github.com/YuriCruger/quiz-app-main",
      web: "https://quiz-web-gilt.vercel.app/",
      cards: [
        {
          id: "1",
          title: t_quiz("cards.first.title"),
          description: t_quiz("cards.first.description"),
          image: "/quiz/quiz.png",
          className: "md:col-span-2",
        },
        {
          id: "2",
          title: t_quiz("cards.second.title"),
          description: "",
          image: "/quiz/quiz_dark.png",
          className: "md:col-span-1",
        },
        {
          id: "3",
          title: t_quiz("cards.third.title"),
          description: t_quiz("cards.third.description"),
          image: "/quiz/quiz_questions.png",
          className: "md:col-span-2",
        },
        {
          id: "4",
          title: t_quiz("cards.fourth.title"),
          description: t_quiz("cards.fourth.description"),
          image: "/quiz/quiz_result.png",
          className: "md:col-span-1",
        },
      ],
    },
    {
      id: "6",
      slug: "todo",
      title: t_todo("title"),
      description: t_todo("description"),
      image: "/todo/todo_dark.png",
      repository: "https://github.com/YuriCruger/todo-app",
      web: "https://todo-app-web-nine.vercel.app/",
      cards: [
        {
          id: "1",
          title: t_todo("cards.first.title"),
          description: t_todo("cards.first.description"),
          image: "/todo/todo_light.png",
          className: "md:col-span-3",
        },
        {
          id: "2",
          title: t_todo("cards.second.title"),
          description: "",
          image: "/todo/todo_dark.png",
          className: "md:col-span-3",
        },
      ],
    },
  ];
};
