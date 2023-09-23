import {
    CommandLineIcon,
    GlobeAsiaAustraliaIcon,
    HomeIcon,
    EnvelopeIcon,
    AcademicCapIcon,
  } from "@heroicons/react/20/solid";

export const navigation = [
    { name: "HOME", href: "/", icon: HomeIcon },
    { name: "ALL POSTS", href: "/posts", icon: GlobeAsiaAustraliaIcon },
    { name: "AUTHORS", href: "/authors", icon: AcademicCapIcon },
    { name: "ABOUT", href: "/about", icon: CommandLineIcon },
    { name: "CONTACT", href: "/contact", icon: EnvelopeIcon },
  ];