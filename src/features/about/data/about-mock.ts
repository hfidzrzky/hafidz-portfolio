import { AboutData } from '../types'

export const aboutMockData: AboutData = {
  header: {
    badge: "A Little About Me",
    headline: {
      line1: "I don't need",
      line2: "to know",
      line3: "everything.",
      line4: "I want to",
      tape: "Understand what I build.",
    },
    personalNote: [
      "I'm still early in my engineering journey.",
      "I'm not trying to master every technology I encounter. I'm trying to understand the systems behind the things I build — and how each piece fits together.",
    ],
    systemStatus: 'system.status = "building"',
  },
  learningSection: {
    number: "01",
    title: "How I Learn",
    steps: [
      {
        number: "01",
        title: "Explore",
        description:
          "Follow the question before choosing the technology. Understand the problem first.",
      },
      {
        number: "02",
        title: "Build",
        description:
          "Turn ideas into something real. A working system often teaches more than theory alone.",
      },
      {
        number: "03",
        title: "Understand",
        description:
          "Go deeper into what happens behind the interface, from data and APIs to systems and infrastructure.",
      },
      {
        number: "04",
        title: "Ship",
        description:
          "Finish, release, observe, and iterate. Progress comes from putting things into the real world.",
      },
    ],
  },
  principlesSection: {
    number: "02",
    title: "How I Approach Engineering",
    principles: [
      {
        number: "01",
        title: "Build Before\nYou Overthink",
        description:
          "The fastest way to understand an idea is often to build a version of it.",
      },
      {
        number: "02",
        title: "Stay\nCurious",
        description:
          "There is always another layer underneath. Curiosity is often where better questions begin.",
      },
      {
        number: "03",
        title: "Keep\nShipping",
        description:
          "A finished imperfect thing teaches more than a perfect idea that never leaves your head.",
      },
    ],
  },
  closing: {
    title: "Still early.\nStill building.",
    description: [
      "I don't have everything figured out. And I don't think I need to.",
      "I'm here to keep learning, keep building, and see where the work takes me.",
    ],
  },
}
