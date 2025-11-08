import React, { useState, useRef } from "react"
import career1 from "../../images/customer/customers2.jpeg"
import career2 from "../../images/customer/customers1.jpeg"
import career3 from "../../images/customer/customers3.jpeg"
import career4 from "../../images/customer/customers4.jpeg"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const panoramaSlides = [
  { src: career1, title: "Collaborative Team" },
  { src: career2, title: "Creative Workspace" },
  { src: career3, title: "Celebrating Success" },
  { src: career4, title: "Innovative Solutions" },
]

export default function CareerSection() {
  const [activeTab, setActiveTab] = useState("overview")
  const swiperRef = useRef(null)

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop()
    }
  }
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start()
    }
  }

  return (
    <section className="career-landing">
      {/* Main Headline */}
      <div className="career-landing-header">
        <h1 className="career-landing-title">
          Innovators Wanted; Join the Wises Revolution
        </h1>
      </div>

      {/* Swiper Panorama Slider */}
      <div
        className="career-panorama"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 900 ? 1.2 : 2.5}
          loop={true}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: window.innerWidth < 900 ? 0 : -80,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="career-swiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            minHeight: "260px",
          }}
        >
          {panoramaSlides.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="panorama-img-wrapper"
              style={{
                width: window.innerWidth < 900 ? 220 : 320,
                height: window.innerWidth < 900 ? 140 : 220,
                borderRadius: window.innerWidth < 900 ? 12 : 24,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 16px 0 rgba(55,52,169,0.07)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="panorama-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: window.innerWidth < 900 ? 12 : 24,
                  display: "block",
                }}
              />
              <div
                className="panorama-title-overlay"
                style={{
                  position: "absolute",
                  bottom: window.innerWidth < 900 ? 8 : 18,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  fontSize: window.innerWidth < 900 ? "1rem" : "1.25rem",
                  fontWeight: 600,
                  color: "#3734A9",
                  background: "rgba(255,255,255,0.85)",
                  padding: "0.5rem 0",
                  borderRadius:
                    window.innerWidth < 900
                      ? "0 0 12px 12px"
                      : "0 0 24px 24px",
                  letterSpacing: "0.5px",
                  pointerEvents: "none",
                }}
              >
                {img.title}
                {/* Add description or content below the title */}
                <div
                  style={{
                    fontSize: window.innerWidth < 900 ? "0.85rem" : "1rem",
                    color: "#555",
                    fontWeight: 400,
                    marginTop: 4,
                  }}
                >
                  {idx === 0 &&
                    "Work together with talented professionals to achieve great results."}
                  {idx === 1 &&
                    "A workspace designed to inspire creativity and innovation."}
                  {idx === 2 && "We celebrate our wins and milestones as a team."}
                  {idx === 3 &&
                    "Drive innovation and deliver solutions that matter."}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modern Tabs Section */}
      <div className="career-tabs-section">
        <div className="career-tabs-list">
          <button
            className={`career-tab-btn${
              activeTab === "overview" ? " active" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`career-tab-btn${
              activeTab === "industry" ? " active" : ""
            }`}
            onClick={() => setActiveTab("industry")}
          >
            Industry
          </button>
          <button
            className={`career-tab-btn${
              activeTab === "consultants" ? " active" : ""
            }`}
            onClick={() => setActiveTab("consultants")}
          >
            Consultants
          </button>
          <button
            className={`career-tab-btn${
              activeTab === "recruitment" ? " active" : ""
            }`}
            onClick={() => setActiveTab("recruitment")}
          >
            Recruitment
          </button>
        </div>
        <div className="career-tab-content">
          {activeTab === "overview" && (
            <div>
              <h2 className="career-tab-title tab-title-custom">Overview</h2>
              <p className="tab-desc-custom">
                At Wises, we are committed to fostering a culture of innovation,
                collaboration, and growth. Our team is made up of passionate
                professionals who are dedicated to making a real impact in the
                world of technology and consulting.
              </p>
              <ul
                className="tab-list-custom"
                style={{
                  textAlign: "left",
                  margin: "1.5rem auto",
                  maxWidth: 600,
                }}
              >
                <li>🚀 <span className="tab-list-highlight">Work on cutting-edge projects with global clients</span></li>
                <li>🤝 <span className="tab-list-highlight">Supportive and inclusive team environment</span></li>
                <li>📚 <span className="tab-list-highlight">Continuous learning and upskilling opportunities</span></li>
                <li>🌍 <span className="tab-list-highlight">Flexible work arrangements and a focus on work-life balance</span></li>
              </ul>
            </div>
          )}
          {activeTab === "industry" && (
            <div>
              <h2 className="career-tab-title tab-title-custom">Industry</h2>
              <p className="tab-desc-custom">
                We serve a diverse set of industries, providing tailored solutions
                and expertise to help our clients thrive in a rapidly changing world.
              </p>
              <div className="career-industry-list industry-list-custom">
                <div className="industry-card">
                  <strong className="industry-title">Technology</strong>
                  <div className="industry-desc">Software, AI/ML, Cloud</div>
                </div>
                <div className="industry-card">
                  <strong className="industry-title">Finance</strong>
                  <div className="industry-desc">Banking, Fintech, Risk</div>
                </div>
                <div className="industry-card">
                  <strong className="industry-title">Healthcare</strong>
                  <div className="industry-desc">Digital Health, Biotech</div>
                </div>
                <div className="industry-card">
                  <strong className="industry-title">Energy</strong>
                  <div className="industry-desc">Renewables, Oil & Gas</div>
                </div>
                <div className="industry-card">
                  <strong className="industry-title">Retail</strong>
                  <div className="industry-desc">E-commerce, Supply Chain</div>
                </div>
                <div className="industry-card">
                  <strong className="industry-title">Manufacturing</strong>
                  <div className="industry-desc">Automation, Quality</div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "consultants" && (
            <div>
              <h2 className="career-tab-title tab-title-custom">Consultants</h2>
              <p className="tab-desc-custom">
                Our consultants are at the forefront of industry trends and
                technological advancements, providing expert guidance and
                innovative solutions to our clients.
              </p>
              <ul
                className="tab-list-custom"
                style={{
                  textAlign: "left",
                  margin: "1.5rem auto",
                  maxWidth: 600,
                }}
              >
                <li>🌟 <span className="tab-list-highlight">Work with top-tier clients across various sectors</span></li>
                <li>📈 <span className="tab-list-highlight">Drive impactful change and transformation</span></li>
                <li>🤓 <span className="tab-list-highlight">Access to exclusive training and certification programs</span></li>
                <li>🌐 <span className="tab-list-highlight">Opportunity to work on international projects</span></li>
              </ul>
            </div>
          )}
          {activeTab === "recruitment" && (
            <div>
              <h2 className="career-tab-title tab-title-custom">Recruitment</h2>
              <p className="tab-desc-custom">
                Join our team and be part of a dynamic and inclusive workplace
                that values talent, diversity, and personal growth.
              </p>
              <ul
                className="tab-list-custom"
                style={{
                  textAlign: "left",
                  margin: "1.5rem auto",
                  maxWidth: 600,
                }}
              >
                <li>🔍 <span className="tab-list-highlight">Be part of a team that values your unique skills and perspectives</span></li>
                <li>📊 <span className="tab-list-highlight">Engage in meaningful work that drives your career forward</span></li>
                <li>🎓 <span className="tab-list-highlight">Benefit from our commitment to your continuous development</span></li>
                <li>🏅 <span className="tab-list-highlight">Enjoy a competitive compensation and benefits package</span></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Career Advantages Section */}
      <div className="career-advantages-section">
        <h2 className="career-advantages-title">Why Join Us?</h2>
        <div className="career-advantages-list why-join-us-list">
          <div className="career-adv-card">
            <div
              className="career-adv-icon"
              style={{ color: "#3734A9" }}
            >
              🌱
            </div>
            <div
              className="career-adv-title"
              style={{ color: "#3734A9" }}
            >
              Inclusive Culture
            </div>
            <div className="career-adv-desc">
              We celebrate fresh ideas and innovation. Here, your creativity and
              passion for technology will thrive.
            </div>
          </div>
          <div
            className="career-adv-card"
            style={{ background: "#FFF5ED" }}
          >
            <div
              className="career-adv-icon"
              style={{ color: "#FF7A00" }}
            >
              🚩
            </div>
            <div
              className="career-adv-title"
              style={{ color: "#FF7A00" }}
            >
              Growth Opportunities
            </div>
            <div className="career-adv-desc">
              Your growth matters. We offer learning, mentorship, and a clear path
              to success, helping you reach your full potential.
            </div>
          </div>
          <div className="career-adv-card">
            <div
              className="career-adv-icon"
              style={{ color: "#3734A9" }}
            >
              🏆
            </div>
            <div
              className="career-adv-title"
              style={{ color: "#3734A9" }}
            >
              Impactful Work
            </div>
            <div className="career-adv-desc">
              At Wises, your work drives real change that's transforming the domain
              and delivering client success.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
