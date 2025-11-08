import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import heromain from "../images/hero/heromain.png";
import heroimage1 from "../images/hero/heroimage1.png";
import heroimage2 from "../images/hero/hero image2.png";
import heroimg3 from "../images/hero/heroimg3.png";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Our solutions drive innovation in Healthcare.",
      name: "Healthcare",
      designation: "Industry Focus",
      src: heromain,
    },
    {
      quote: "Empowering Financial institutions with cutting-edge technology.",
      name: "Finance",
      designation: "Industry Focus",
      src: heroimage1,
    },
    {
      quote: "Transforming Manufacturing processes with AI and automation.",
      name: "Manufacturing",
      designation: "Industry Focus",
      src: heroimage2,
    },
    {
      quote: "Revolutionizing Retail experiences through digital solutions.",
      name: "Retail",
      designation: "Industry Focus",
      src: heroimg3,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}