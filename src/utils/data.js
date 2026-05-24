import {
  FiActivity,
  FiCheckCircle,
  FiCpu,
  FiInstagram,
  FiGlobe,
  FiHexagon,
  FiLayers,
  FiLinkedin,
  FiShield,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { TbDrone } from "react-icons/tb";

import projectOne from "../assets/projects/kk3dlab.svg";
import projectTwo from "../assets/projects/dataviz.svg";
import projectThree from "../assets/projects/eaccountancy.svg";
import avatarOne from "../assets/avatars/avatar-1.svg";
import avatarTwo from "../assets/avatars/avatar-2.svg";
import avatarThree from "../assets/avatars/avatar-3.svg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 2025, suffix: "", label: "Since" },
  { value: 12, suffix: "+", label: "Master Team" },
];

export const services = [
  {
    title: "Application Development",
    description: "Robust software platforms engineered for performance, security, and scale.",
    icon: FiLayers,
  },
  {
    title: "Web Development",
    description: "High-converting web experiences with premium design and flawless UX.",
    icon: FiGlobe,
  },
  {
    title: "AI Automation",
    description: "Intelligent automations that eliminate manual work and unlock growth.",
    icon: FiCpu,
  },
  {
    title: "AI Workflow Systems",
    description: "End-to-end AI systems that integrate with your core business operations.",
    icon: FiActivity,
  },
  {
    title: "AI Agents",
    description: "Autonomous AI agents built to execute tasks, analyze data, and assist teams.",
    icon: FiZap,
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO and performance tuning to win search visibility.",
    icon: FiTrendingUp,
  },
  {
    title: "Embedded Systems & IoT",
    description: "Hardware-integrated solutions with real-time intelligence and control.",
    icon: FiHexagon,
  },
  {
    title: "Drone",
    description: "Autonomous drone solutions for inspection, mapping, and real-time monitoring.",
    icon: TbDrone,
  },
];

export const projects = [
  {
    title: "KK3D Lab",
    description: "Immersive 3D web platform with premium interactions and high performance.",
    image: projectOne,
    link: "https://kk3dlab.in/",
    tags: ["React", "Three.js", "UI Engineering"],
  },
  {
    title: "Dataviz Dashboard",
    description: "Modern analytics dashboard built for clarity, speed, and decision making.",
    image: projectTwo,
    link: "https://dataviz-dashboard1.vercel.app/",
    tags: ["Vite", "Charts", "Product UX"],
  },
  {
    title: "E-Accountancy",
    description: "Professional finance portal with enterprise-grade UX and trust signals.",
    image: projectThree,
    link: "https://eaccountancy.in/",
    tags: ["Next.js", "Fintech", "SEO"],
  },
];

export const features = [
  {
    title: "Fast Delivery",
    description: "Agile teams and refined workflows that ship premium quality, quickly.",
    icon: FiZap,
  },
  {
    title: "Professional Team",
    description: "Senior engineers, designers, and AI specialists dedicated to excellence.",
    icon: FiUsers,
  },
  {
    title: "Modern Technology",
    description: "Future-proof stacks and architecture designed for scale and longevity.",
    icon: FiLayers,
  },
  {
    title: "AI Expertise",
    description: "AI-first thinking across automation, agents, and intelligent analytics.",
    icon: FiCpu,
  },
  {
    title: "Scalable Solutions",
    description: "Systems engineered to grow with your business without compromise.",
    icon: FiCheckCircle,
  },
  {
    title: "Long-Term Support",
    description: "Dedicated partnership and proactive improvements beyond launch.",
    icon: FiShield,
  },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, Visionary Labs",
    quote:
      "Syncros Solutions delivered a premium experience that immediately elevated our brand. The AI automations saved us hours every week.",
    rating: 5,
    image: avatarOne,
  },
  {
    name: "Priya Nair",
    role: "Product Lead, HelixPay",
    quote:
      "Their team feels like an extension of ours. The UX, performance, and polish are on another level.",
    rating: 5,
    image: avatarTwo,
  },
  {
    name: "Daniel Ortiz",
    role: "CTO, Meridian Health",
    quote:
      "From strategy to execution, Syncros Solutions brought clarity and created a scalable platform we can build on.",
    rating: 5,
    image: avatarThree,
  },
];

export const processSteps = [
  { title: "Discussion", icon: FiUsers, description: "We align on goals, scope, and success metrics." },
  { title: "Planning", icon: FiLayers, description: "We craft timelines, architecture, and milestones." },
  { title: "Design", icon: FiSmartphone, description: "We prototype premium UI/UX with refined interactions." },
  { title: "Development", icon: FiCpu, description: "We build robust systems with modern engineering." },
  { title: "Testing", icon: FiCheckCircle, description: "We validate quality, performance, and reliability." },
  { title: "Launch", icon: FiStar, description: "We deploy with confidence and monitor success." },
];

export const socialLinks = [
  { label: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com" },
  {
    label: "Instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/syncrossolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];
