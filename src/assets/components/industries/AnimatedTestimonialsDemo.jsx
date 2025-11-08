import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import heromain from "../../images/hero/heromain.png";
import heroimage1 from "../../images/hero/heroimage1.png";
import heroimage2 from "../../images/hero/hero image2.png";
import heroimg3 from "../../images/hero/heroimg3.png";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Our AI-driven solutions are revolutionizing patient care and operational efficiency in healthcare.",
      name: "Healthcare Sector",
      designation: "Industry Focus",
      src: heromain,
    },
    {
      quote: "Empowering financial institutions with secure blockchain and advanced data analytics for smarter decisions.",
      name: "Financial Services",
      designation: "Industry Focus",
      src: heroimage1,
    },
    {
      quote: "Transforming Manufacturing processes with IoT and automation, driving unparalleled process excellence.",
      name: "Manufacturing Industry",
      designation: "Industry Focus",
      src: heroimage2,
    },
    {
      quote: "Delivering cutting-edge retail experiences through predictive analytics and personalized AI solutions.",
      name: "Retail Sector",
      designation: "Industry Focus",
      src: heroimg3,
    },
  ];
  return (
    <div style={{ backgroundColor: 'var(--background)', padding: '4rem 2rem', textAlign: 'center', color: '#fff' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', color: '#fff' }}>Industries We Serve</h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}