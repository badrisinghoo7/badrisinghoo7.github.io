import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/uc?id=1mRls1S3KWHpJXH86AzjXrsLxscZyWpo-&export=download"
        download
        target="_blank"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
