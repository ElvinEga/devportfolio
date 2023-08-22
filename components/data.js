import {
  ServerIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { ReactIcons } from "react-icons";

const featureOne = {
  title: "Here is What I Can Offer",
  desc: "These are the Quality services that I offer .",
  bullets: [
    {
      title: "Web Development",
      desc: "Custom web solutions tailored to meet your unique needs, built using cutting-edge technologies like HTML5, CSS3, JavaScript, and more.",
      icon: <GlobeAltIcon className="w-6 h-6" />,
    },
    {
      title: "Mobile Development",
      desc: "Native mobile apps for iOS and Android, designed for a seamless user experience and integrated with your existing systems.",
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    },
    {
      title: "Graphic Design",
      desc: "Eye-catching graphics, logos, icons, and infographics that communicate your brand values and enhance your online presence.",
      icon: <PaintBrushIcon className="w-6 h-6" />,
    },
    {
      title: "Web Design",
      desc: "User-friendly website design prioritizing UX and UI, created using the latest design trends and best practices to engage visitors and drive conversions.",
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
    },
    {
      title: "Backend Development",
      desc: "Robust, scalable backend systems powering your web or mobile application, developed using languages like Python, Ruby, PHP, and Node.js.",
      icon: <ServerIcon className="w-6 h-6" />,
    },
    {
      title: "UI/UX Design",
      desc: " Intuitive interface design balancing form and function, tested and refined through user research and wireframing to ensure a seamless user experience.",
      icon: <UserIcon className="w-6 h-6" />,
    },
  ],
};

const langIcons = {
  title: "My Languages",
  icons: [
    {
      title: "Html",
      url: "/img/brands/html.svg",
    },
    {
      title: "React",
      url: "/img/brands/react.svg",
    },
    {
      title: "vue",
      url: "/img/brands/vue.svg",
    },
    {
      title: "Javascript",
      url: "/img/brands/javascript.svg",
    },
    {
      title: "flutter",
      url: "/img/brands/flutter.svg",
    },
    {
      title: "Django",
      url: "/img/brands/django.svg",
    },
  ],
};

export { featureOne, langIcons };
