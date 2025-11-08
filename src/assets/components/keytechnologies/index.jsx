import React from 'react';
import './keytechnologies.css';
import { BrainCircuit, Atom, Link, ToyBrick } from 'lucide-react';

const technologies = [
  {
    icon: <BrainCircuit size={48} />,
    title: 'Artificial Intelligence & ML',
    description: 'Custom and transformative solutions for industry needs.',
    className: 'col-span-2',
  },
  {
    icon: <Atom size={48} />,
    title: 'Quantum Computing',
    description: 'Exploring the next frontier of computational power.',
    className: '',
  },
  {
    icon: <Link size={48} />,
    title: 'Blockchain',
    description: 'Secure, decentralized solutions for a new era of trust.',
    className: '',
  },
  {
    icon: <ToyBrick size={48} />,
    title: 'Internet of Things (IoT)',
    description: 'Connecting the physical and digital worlds.',
    className: 'col-span-2',
  },
];

const KeyTechnologies = () => {
  return (
    <section className="key-technologies-section">
      <h2 className="key-technologies-title">Our Core Technologies</h2>
      <div className="bento-grid">
        {technologies.map((tech, index) => (
          <div key={index} className={`bento-card ${tech.className}`}>
            <div className="bento-icon">{tech.icon}</div>
            <h3 className="bento-title">{tech.title}</h3>
            <p className="bento-description">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTechnologies;