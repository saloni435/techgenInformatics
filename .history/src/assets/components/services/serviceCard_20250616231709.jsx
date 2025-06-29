const ServiceCard = ({ category }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        <div className="category-icon-wrapper">
          <div className="category-icon">{category.icon}</div>
        </div>
        <h3 className="category-title">{category.category}</h3>
        <p className="category-description">{category.description}</p>
      </div>

      <div className="card-content">
        <div className="services-list">
          {category.services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <span className="service-name">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
