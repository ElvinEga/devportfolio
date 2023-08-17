import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/box_ripe.jpg";
import benefitTwoImg from "../public/img/countryside_woman.jpg";

const benefitOne = {
  title: "Smart Farming is Changing the Game",
  desc: "From increased efficiency and productivity to environmental sustainability and competitive advantage, discover the many benefits of embracing smart farming technology.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Increased efficiency",
      desc: " Automates and optimizes farming processes to save time and resources.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Reduced costs",
      desc: "Minimizes resource waste and unnecessary expenses, maximizing profitability for farmers.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Scalability",
      desc: "Adapts to the unique needs of small, medium, or large-scale farming operations, making it accessible to all.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Competitive Advantage",
      desc: "Differentiates farmers who adopt the solution, giving them an edge in the market and increasing their reputation and revenue.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Collaboration",
      desc: "Facilitates knowledge sharing and collaboration among farmers, clients, and industry experts, driving innovation and progress in agriculture..",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Environmental sustainability",
      desc: "Promotes eco-friendly practices, conserving resources and protecting the environment for future generations.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Increased traceability",
      desc: " Ensures transparency and accountability across the supply chain, building trust with end-consumers.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
