import React from "react";
import "./industrysolutions.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Dummy Unsplash images for each industry
const healthcareImg = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"; // new healthcare image
const govtImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80";
const citizenImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
const miningImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"; // new mining image
const educationImg = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80";
const landImg = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80";
const agricultureImg = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"; // new agriculture image

const industries = [
    {
    name: "Agriculture",
    img: agricultureImg,
    desc: "Driving growth in agriculture with technology.",
    details: [
      "Unified Portal for Agriculture and Allied Services",
      "Soil Information System",
        <div className="testimonial-ui-wrapper">
          <TestimonialCard {...testimonials[current]} />
          <div className="testimonial-arrows-ui">
            <button className="arrow-btn-ui" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
            <button className="arrow-btn-ui" onClick={next} aria-label="Next testimonial">&#8594;</button>
          </div>
        </div>
    img: govtImg,
    desc: "Digitizing governance for efficiency and transparency.",
  },
  {
    name: "Healthcare",
    img: healthcareImg,
    desc: "Innovative solutions for better health outcomes.",
  },
  {
    name: "Land & Industry",
    img: landImg,
    desc: "Streamlining land and industrial management.",
  },
  {
    name: "Mining",
    img: miningImg,
    desc: "Modernizing mining operations for sustainability.",
  },
  {
    name: "Defense",
    img: miningImg,
    desc: "Modernizing mining operations for sustainability.",
  }

];

export default function IndustrySolutions() {
  return (
    <section className="industry-solutions-section">
      <h1 className="industry-solutions-title">Industry Solutions</h1>
      <div className="industry-solutions-carousel">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={window.innerWidth < 900 ? 1 : 3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="industry-swiper"
        >
            <TestimonialCard {...testimonials[current]} />
            <div className="testimonial-arrows-ui">
              <button className="arrow-btn-ui" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
              <button className="arrow-btn-ui" onClick={next} aria-label="Next testimonial">&#8594;</button>
            </div>
          </div>
        </section>
      );
    };

const testimonials = [
  {
    image: require("../../images/career1.png"),
    name: "Sarah Chen",
    title: "Product Manager at TechFlow",
    testimonial:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  },
  {
    image: require("../../images/career2.png"),
    name: "John Doe",
    title: "Lead Developer at InnovateX",
    testimonial:
      "A seamless experience from start to finish. The UI is beautiful and the animations are smooth.",
  },
  {
    image: require("../../images/career3.png"),
    name: "Priya Singh",
    title: "CTO at NextGen Solutions",
    testimonial:
      "Our team productivity has increased thanks to the intuitive design and easy navigation.",
  },
];

const TestimonialCard = ({ image, name, title, testimonial }) => (
  <div className="testimonial-card-ui">
    <div className="testimonial-image-ui">
      <img src={image} alt={name} />
    </div>
    <div className="testimonial-content-ui">
      <h3 className="testimonial-name-ui">{name}</h3>
      <p className="testimonial-title-ui">{title}</p>
      <p className="testimonial-text-ui">{testimonial}</p>
    </div>
  </div>
);

const IndustrySolutions = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
        </Swiper>
      </div>
    </section>
  );
}
