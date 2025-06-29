import { useState } from "react"
import { ArrowRight } from "lucide-react"

const ServiceCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false)
  const colorMap = {
    "AI & Allied Services": {
      color: "from-blue-500 to-violet-600",
      bgColor: "bg-blue-50"
    },
    "Consulting & Allied Services": {
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    "Cloud Services": {
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50"
    },
    "Data & Analytics": {
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    },
    "Emerging Technologies": {
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    "IT Facilities, Cybersecurity & Datacenter Solutions": {
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50"
    }
  }

  const colors = colorMap[category.category] || {
    color: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-50"
  }

  return (
    <div 
      className={`service-card ${colors.bgColor} group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative p-8">
        {/* Icon Section */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${colors.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="text-white">{category.icon}</div>
          </div>
          <div className="badge text-xs font-medium bg-white/80 backdrop-blur-sm">
            {category.services.length} Services
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
            {category.category}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">{category.description}</p>
        </div>

        {/* Services List - Using a simplified layout */}
        <div className="service-list-container mt-6">
          <div className="service-items-grid">
            {category.services.slice(0, 6).map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="service-item"
              >
                <div className="service-icon">{service.icon}</div>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
          
          {category.services.length > 6 && (
            <div className="mt-2 text-center">
              <span className="text-xs text-gray-500">+{category.services.length - 6} more</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-right">
          <a href="#" className="btn-learn-more inline-flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
