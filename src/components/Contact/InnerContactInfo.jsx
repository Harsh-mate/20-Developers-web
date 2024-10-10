import React from "react";

const InnerContactInfo = () => {
  const info_items = [
    {
      src: "/img/icon/loction_icon03.png",
      title: "Address",
      desc: (
        <>
          <p>Panvel, Navi Mumbai, Maharashtra</p>
        </>
      ),
    },
    {
      src: "/img/icon/mail_icon03.png",
      title: "Address",
      desc: (
        <>
          <a href="mailto:20sdevelopers4209@gmail.com">20sdevelopers4209@gmail.com</a>
        </>
      ),
    },
    {
      src: "/img/icon/phone_icon03.png",
      title: "Address",
      desc: (
        <>
          <a href="tel:8484049485">+91 8484049485</a>
        </>
      ),
    },
  ];

  return (
    <ul className="list-wrap">
      {info_items.map((x, index) => (
        <li key={index}>
          <div className="contact-info-item">
            <div className="icon">
              <img src={x.src} alt="" />
            </div>
            <div className="content">
              <h6 className="title">{x.title}</h6>
              {x.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerContactInfo;
