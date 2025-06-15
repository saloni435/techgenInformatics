import cmmiDevImg from "../../images/cmidev.jpg";
import soc2Img from "../../images/soc2.jpg";
import iso20000Img from "../../images/iso2000.jpg";
import iso14001Img from "../../images/iso14001.jpg";
import iso45001Img from "../../images/iso45001.jpg";

const InnovativeExcellence = () => (
  <div className="section-title">
    <h2>Innovating with Excellence</h2>
    <p className="section-description">
      CSM Tech blends deep-rooted culture with transformative technology to
      enhance citizen experiences. With over two decades of expertise, more
      than 500 successful IT projects have been delivered across the globe,
      empowering organizations to break barriers and embrace innovation.
      Committed to quality, security, and continuous improvement, CSM Tech
      ensures every solution surpasses expectations and drives impactful
      results.
    </p>
    <div className="certification-icons">
      <div className="certification-item">
        <img src={cmmiDevImg} alt="CMMI DEV/5 certification" />
        <span>Process Maturity</span>
      </div>
      <div className="certification-item">
        <img src={soc2Img} alt="SOC 2 TYPE 2 certification" />
        <span>Data Security</span>
      </div>
      <div className="certification-item">
        <img src={iso20000Img} alt="ISO 20000-1:2018 certification" />
        <span>Service Excellence</span>
      </div>
      <div className="certification-item">
        <img src={iso14001Img} alt="ISO 14001:2015 certification" />
        <span>Sustainability</span>
      </div>
      <div className="certification-item">
        <img src={iso45001Img} alt="ISO 45001:2018 certification" />
        <span>HR Excellence</span>
      </div>
    </div>
    <div className="wave-divider-container">
    </div>
  </div>
);

export default InnovativeExcellence;
