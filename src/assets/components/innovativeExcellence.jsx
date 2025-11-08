import React from "react";

const InnovativeExcellence = () => (
  <section style={{ background: "var(--background)", padding: "60px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: "var(--foreground)", marginBottom: 16, textAlign: "center" }}>
        Innovative Excellence
      </h2>
      <p style={{ fontSize: 20, color: "var(--muted-foreground)", maxWidth: 800, margin: "0 auto 40px auto", textAlign: "center" }}>
        At Tech Gen Informatics, we are committed to delivering innovative solutions that drive business transformation and create lasting value for our clients. Our team leverages cutting-edge technologies and industry expertise to solve complex challenges and unlock new opportunities.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        <div style={{ flex: "1 1 300px", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)", padding: 32 }}>
          <h3 style={{ fontSize: 24, color: "var(--foreground)", marginBottom: 12 }}>Cutting-edge Technology</h3>
          <p style={{ color: "var(--muted-foreground)" }}>
            We harness the power of AI, cloud, and emerging technologies to deliver solutions that are future-ready and scalable.
          </p>
        </div>
        <div style={{ flex: "1 1 300px", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)", padding: 32 }}>
          <h3 style={{ fontSize: 24, color: "var(--foreground)", marginBottom: 12 }}>Client-Centric Approach</h3>
          <p style={{ color: "var(--muted-foreground)" }}>
            Our solutions are tailored to meet the unique needs of each client, ensuring measurable impact and satisfaction.
          </p>
        </div>
        <div style={{ flex: "1 1 300px", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)", padding: 32 }}>
          <h3 style={{ fontSize: 24, color: "var(--foreground)", marginBottom: 12 }}>Continuous Improvement</h3>
          <p style={{ color: "var(--muted-foreground)" }}>
            We foster a culture of innovation and learning, enabling us to stay ahead in a rapidly evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default InnovativeExcellence;