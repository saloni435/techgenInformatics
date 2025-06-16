import React from "react"
import "./index.css"
import {
  Bot,
  Settings,
  Users,
  Lightbulb,
  Eye,
  Cog,
  Cpu,
  Zap,
  GraduationCap,
  Smartphone,
  MessageSquare,
  UserCheck,
  Briefcase,
  Cloud,
  Server,
  HardDrive,
  BarChart3,
  Database,
  ArrowRightLeft,
  Shield,
  Glasses,
  Brain,
  Map,
  Factory,
  Building2,
  Package,
  TrendingUp,
  Users2,
} from "lucide-react"
import ServiceCard from "./serviceCard"

const services = [
  {
    category: "AI & Allied Services",
    icon: <Brain className="h-6 w-6" />,
    description: "Cutting-edge artificial intelligence solutions to transform your business",
    services: [
      { name: "AI Chatbots", icon: <Bot className="h-4 w-4" /> },
      { name: "AI Ops", icon: <Settings className="h-4 w-4" /> },
      { name: "AI Consulting & Solutions", icon: <Lightbulb className="h-4 w-4" /> },
      { name: "Generative AI", icon: <Zap className="h-4 w-4" /> },
      { name: "Computer Vision", icon: <Eye className="h-4 w-4" /> },
      { name: "Managed AI Services", icon: <Cog className="h-4 w-4" /> },
      { name: "AI for IOT", icon: <Smartphone className="h-4 w-4" /> },
      { name: "AI Based Automation", icon: <Zap className="h-4 w-4" /> },
      { name: "AI Model and Training", icon: <GraduationCap className="h-4 w-4" /> },
      { name: "Edge AI", icon: <Cpu className="h-4 w-4" /> },
    ],
  },
  {
    category: "Consulting & Allied Services",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Strategic consulting and staffing solutions for your business growth",
    services: [
      { name: "Social Media Management", icon: <MessageSquare className="h-4 w-4" /> },
      { name: "Expert IT Staffing", icon: <UserCheck className="h-4 w-4" /> },
      { name: "Consulting & Advisory", icon: <Users className="h-4 w-4" /> },
      { name: "Cloud Services", icon: <Cloud className="h-4 w-4" /> },
    ],
  },
  {
    category: "Cloud Services",
    icon: <Cloud className="h-6 w-6" />,
    description: "Comprehensive cloud infrastructure and storage solutions",
    services: [
      { name: "Cloud Services (AWS, Google, Azure, Cloud9 etc)", icon: <Cloud className="h-4 w-4" /> },
      { name: "Server & Storage Solutions", icon: <Server className="h-4 w-4" /> },
      { name: "Serves with Logo and writeup", icon: <Server className="h-4 w-4" /> },
      { name: "Storage solution with logo and writeup", icon: <HardDrive className="h-4 w-4" /> },
    ],
  },
  {
    category: "Data & Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Transform your data into actionable insights and strategic advantages",
    services: [
      { name: "Data Analytics & Visualization", icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Big Data Analytics", icon: <Database className="h-4 w-4" /> },
      { name: "Data migration & Integration", icon: <ArrowRightLeft className="h-4 w-4" /> },
      { name: "Master data Management", icon: <Database className="h-4 w-4" /> },
      { name: "Data governance", icon: <Shield className="h-4 w-4" /> },
    ],
  },
  {
    category: "Emerging Technologies",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Next-generation technologies to keep you ahead of the curve",
    services: [
      { name: "Augmented & Virtual Reality", icon: <Glasses className="h-4 w-4" /> },
      { name: "Robotic Process Automation", icon: <Bot className="h-4 w-4" /> },
      { name: "AI & ML", icon: <Brain className="h-4 w-4" /> },
      { name: "GIS", icon: <Map className="h-4 w-4" /> },
      { name: "IIOT", icon: <Factory className="h-4 w-4" /> },
    ],
  },
  {
    category: "IT Facilities, Cybersecurity & Datacenter Solutions",
    icon: <Building2 className="h-6 w-6" />,
    description: "Secure, scalable IT infrastructure and enterprise solutions",
    services: [
      { name: "Datacenter", icon: <Building2 className="h-4 w-4" /> },
      { name: "ERP", icon: <Package className="h-4 w-4" /> },
      { name: "Enterprise Process Evolution", icon: <TrendingUp className="h-4 w-4" /> },
      { name: "HRMS", icon: <Users2 className="h-4 w-4" /> },
    ],
  },
]

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2 className="main-title">Our Services</h2>
          <p className="main-description">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business
            innovation across all industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-description">
              Let's discuss how our comprehensive technology solutions can help you achieve your goals and stay ahead in
              today's competitive landscape.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
