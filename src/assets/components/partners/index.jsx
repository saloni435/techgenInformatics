import React from 'react';
import './partners.css';

// Import all logos
import customer1 from '../../images/customers/customers1.jpeg';
import customer2 from '../../images/customers/customers2.jpeg';
import customer3 from '../../images/customers/customers3.jpeg';
import customer4 from '../../images/customers/customers4.jpeg';
import customer5 from '../../images/customers/customer5.jpeg';
import customer6 from '../../images/customers/customer6.jpeg';
import customer7 from '../../images/customers/customer7.jpeg';
import customer8 from '../../images/customers/customer8.jpeg';
import customer9 from '../../images/customers/customer9.jpeg';
import customer10 from '../../images/customers/customer10.jpeg';
import customer11 from '../../images/customers/customer11.jpeg';
import customer12 from '../../images/customers/customer12.jpeg';
import customer13 from '../../images/customers/customer13.jpeg';
import customer14 from '../../images/customers/customer14.jpeg';
import customer15 from '../../images/customers/customer15.jpeg';
import customer16 from '../../images/customers/customer16.jpeg';
import customer17 from '../../images/customers/customer17.jpeg';
import customer18 from '../../images/customers/customer18.jpeg';
import customer19 from '../../images/customers/customer19.jpeg';
import hewlettpackard from '../../images/customers/hewlettpackard.jpeg';

const logos = [
  { src: customer1, alt: 'Partner Logo 1' },
  { src: customer2, alt: 'Partner Logo 2' },
  { src: customer3, alt: 'Partner Logo 3' },
  { src: customer4, alt: 'Partner Logo 4' },
  { src: customer5, alt: 'Partner Logo 5' },
  { src: customer6, alt: 'Partner Logo 6' },
  { src: customer7, alt: 'Partner Logo 7' },
  { src: customer8, alt: 'Partner Logo 8' },
  { src: customer9, alt: 'Partner Logo 9' },
  { src: customer10, alt: 'Partner Logo 10' },
  { src: customer11, alt: 'Partner Logo 11' },
  { src: customer12, alt: 'Partner Logo 12' },
  { src: customer13, alt: 'Partner Logo 13' },
  { src: customer14, alt: 'Partner Logo 14' },
  { src: customer15, alt: 'Partner Logo 15' },
  { src: customer16, alt: 'Partner Logo 16' },
  { src: customer17, alt: 'Partner Logo 17' },
  { src: customer18, alt: 'Partner Logo 18' },
  { src: customer19, alt: 'Partner Logo 19' },
  { src: hewlettpackard, alt: 'Hewlett Packard Logo' },
];

const Partners = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless loop

  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <p className="partners-subtitle">We are proud to collaborate with a diverse range of industry leaders.</p>
      <div className="marquee">
        <div className="marquee-content">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="partner-logo-container">
              <img src={logo.src} alt={logo.alt} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;