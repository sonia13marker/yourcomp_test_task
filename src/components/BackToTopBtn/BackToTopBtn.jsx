import "./BackToTopBtn.scss";
import arrow from "../../images/arrow_icon.svg";
import { useEffect, useState } from "react";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div className="wrapperBtn" onClick={scrollToTop}>
          <img src={arrow} alt="" />
        </div>
      )}
    </>
  );
}
