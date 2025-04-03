import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yogesh J",
  initials: "YJ",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Engineer passionate about building scalable and secure applications. Currently exploring AI, Python and LLMs",
  summary:
    "To be added",
  avatarUrl: "/me.jpeg",
  skills: [
    "Ruby on Rails",
    "React",
    "Next.js",
    "Typescript",
    "Postgres",
    "Docker",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yogsh.jmv@gmail.com",
    tel: "+91-8971190638",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yogeshjm/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bugcrowd",
      badges: [],
      href: "https://www.bugcrowd.com/",
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/bugcrowd.jpeg",
      start: "March 2022",
      end: "current",
      description:
        ""
    },
    {
      company: "Cerner Corporation",
      href: "https://www.oracle.com/in/health/",
      badges: [],
      location: "Bangalore, IN",
      title: "Software Engineer II",
      logoUrl: "/cerner.jpeg",
      start: "November 2016",
      end: "March 2022",
      description:
        "",
    },
    {
      company: "Mobveus Techologies Pvt Ltd",
      href: "",
      badges: [],
      location: "Bangalore, IN",
      title: "Software Developer",
      logoUrl: "/mobveus.jpeg",
      start: "January 2016",
      end: "October 2016",
      description:
        "",
    },
    {
      company: "Kurios Theles Business Solutions Pte Ltd",
      href: "",
      badges: [],
      location: "Bangalore, IN",
      title: "Junior Sofware Developer",
      logoUrl: "",
      start: "June 2014",
      end: "May 2015",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Visvesvaraya Technological University",
      href: "https://buildspace.so",
      degree: "Master of Computer Applications",
      logoUrl: "/buildspace.jpg",
      start: "2011",
      end: "2014",
    },
    {
      school: "Bangalore University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor of Science (B.Sc)",
      logoUrl: "/waterloo.png",
      start: "2008",
      end: "2011",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [

  ],
} as const;
