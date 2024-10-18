import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function CompanySlider({ cards, slideLeft, link }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const cardsContainer = document.getElementById("company-logos");
    const cardsWidth = cardsContainer ? cardsContainer.clientWidth / 2 + 20 : 0;
    setPosition(cardsWidth);
  }, []);

  return (
    <div className="company-contain">
      <div className="company-heading">{"< Past Partners and Clients />"}</div>
      <div className="companyParent">
        <motion.div
          id="company-logos"
          initial={{ x: 0 }}
          animate={{ x: slideLeft ? -position : position }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`flex justify-start gap-[60px] absolute ${
            slideLeft ? "" : "right-0"
          }`}
        >
          {cards.map((card, i) => (
            <a href={card.link} target="_blank">
              <div key={i} className={` w-[100%] flex flex-col justify-center`}>
                <div className="flex items-center  w-full">
                  <Image
                    src={card.image}
                    alt="Company Logo"
                    className="company-image h-[150px] lg:h-[120px] md:h-[110px] sm:h-[100px] xs:h-[50px] xxs:h-[50px] w-auto !max-w-none"
                  />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CompanySlider;
