import React from "react";
import { useParams } from "react-router-dom";

const heroContent = {
  "techgen-info": {
    title: "TechGen Info",
    subtitle: "Building tomorrow's innovations today",
    content: (
      <>
        <p>
          <strong>TechGen Informatics</strong> is a leader in digital transformation, delivering innovative solutions for businesses and governments. Our expertise spans AI, cloud, analytics, and more, helping clients stay ahead in a rapidly evolving world.
        </p>
        <h4>What We Offer</h4>
        <ul>
          <li>Cutting-edge technology solutions</li>
          <li>Expert consulting and implementation</li>
          <li>Proven track record across industries</li>
        </ul>
        <blockquote>
          “Innovation distinguishes between a leader and a follower.” – Steve Jobs
        </blockquote>
        <p>
          At TechGen, we believe in empowering organizations to achieve more through technology. Our team of experts is dedicated to delivering value, driving growth, and ensuring success for our clients.
        </p>
      </>
    ),
  },
  "emerging-technologies": {
    title: "Emerging Technologies",
    subtitle: "Innovations & disruptions to enhance citizen experience.",
    content: (
      <>
        <p>
          <strong>Emerging technologies</strong> are reshaping the way we live and work. At TechGen, we harness the power of AI, IoT, blockchain, and machine learning to create smarter, more efficient solutions.
        </p>
        <h4>Our Focus Areas</h4>
        <ul>
          <li>AI-driven automation and analytics</li>
          <li>Smart city and IoT deployments</li>
          <li>Secure, scalable, and future-ready platforms</li>
        </ul>
        <blockquote>
          “The best way to predict the future is to invent it.” – Alan Kay
        </blockquote>
        <p>
          We are committed to delivering real-world impact and improving lives through technology. Our solutions are designed to be robust, secure, and adaptable to the changing needs of society.
        </p>
      </>
    ),
  },
  "industry-consultants": {
    title: "Industry Consultants",
    subtitle: "Expert guidance and strategic insights for your business",
    content: (
      <>
        <p>
          <strong>Our consultants</strong> bring deep industry knowledge and strategic insight to help organizations navigate complex challenges. We partner with you to drive growth, efficiency, and innovation.
        </p>
        <h4>Consulting Services</h4>
        <ul>
          <li>Business process optimization</li>
          <li>Change management and digital strategy</li>
          <li>End-to-end project delivery</li>
        </ul>
        <blockquote>
          “Strategy is about making choices, trade-offs; it’s about deliberately choosing to be different.” – Michael Porter
        </blockquote>
        <p>
          Let us help you transform your business and achieve your goals with confidence. Our team is ready to support you every step of the way.
        </p>
      </>
    ),
  },
};

export default function HeroDetails() {
  const { slug } = useParams();
  const data = heroContent[slug];

  if (!data) {
    return (
      <main style={{ padding: "3rem", textAlign: "center" }}>
        <h2>Content Not Found</h2>
        <p>The requested hero detail does not exist.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "6rem auto 3rem auto", // Increased top margin for more space
        padding: "0 0 3rem 0",
        background: "none",
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "Inter, Arial, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <header>
        <h1
          style={{
            color: "#3734A9",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            fontWeight: 800,
          }}
        >
          {data.title}
        </h1>
        <h2
          style={{
            color: "#23235F",
            fontWeight: 600,
            marginBottom: "2rem",
            fontSize: "1.35rem",
          }}
        >
          {data.subtitle}
        </h2>
      </header>
      <section
        style={{
          color: "#23235F",
          fontSize: "1.13rem",
          marginBottom: "1.5rem",
        }}
      >
        {data.content}
      </section>
      <footer
        style={{
          borderTop: "1px solid #eee",
          marginTop: "2.5rem",
          paddingTop: "1.2rem",
          color: "#888",
          fontSize: "1rem",
        }}
      >
        © {new Date().getFullYear()} TechGen Informatics. All rights reserved.
      </footer>
    </main>
  );
}
