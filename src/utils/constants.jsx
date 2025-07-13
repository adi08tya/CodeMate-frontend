import {
  FaComments,
  FaLightbulb,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

export const BASE_URL = "http://localhost:3000";
export const features = [
  {
    icon: <FaUsers className="text-4xl text-blue-500" />,
    title: "Connect with Developers",
    description:
      "Find and connect with developers who share your interests, skills, and goals.",
  },
  {
    icon: <FaComments className="text-4xl text-green-500" />,
    title: "Real-time Chat",
    description:
      "Communicate seamlessly with other developers through our integrated chat system.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-purple-500" />,
    title: "Collaborate on Projects",
    description:
      "Join forces with other developers to build amazing projects together.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    title: "Share Knowledge",
    description:
      "Learn from others and share your expertise with the developer community.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Set up your developer profile with your skills, experience, and interests.",
  },
  {
    number: "02",
    title: "Discover Developers",
    description:
      "Browse through profiles and find developers who match your interests.",
  },
  {
    number: "03",
    title: "Start Connecting",
    description: "Send connection requests and start meaningful conversations.",
  },
  {
    number: "04",
    title: "Collaborate & Grow",
    description:
      "Work on projects together and grow your professional network.",
  },
];
