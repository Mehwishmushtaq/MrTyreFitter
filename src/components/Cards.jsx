import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

const Cards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleNextClick = () => {
      const carouselWidth = $(".carousel-inner")[0].scrollWidth;
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition < carouselWidth - cardWidth * 4) {
        setScrollPosition(scrollPosition + cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition + cardWidth }, 600);
      }
    };

    const handlePrevClick = () => {
      const cardWidth = $(".carousel-item").width();

      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - cardWidth);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition - cardWidth }, 600);
      }
    };

    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        handleNextClick();
      }, 3000); // Change interval duration as needed (milliseconds)
    };

    const stopAutoplay = () => {
      clearInterval(intervalRef.current);
    };

    $(".carousel-control-next").on("click", handleNextClick);
    $(".carousel-control-prev").on("click", handlePrevClick);

    startAutoplay();

    // Handle visibility change events to pause autoplay on mobile
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Cleanup event listeners and interval
      $(".carousel-control-next").off("click", handleNextClick);
      $(".carousel-control-prev").off("click", handlePrevClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopAutoplay();
    };
  }, [scrollPosition]);

  // Example data for cards
  const cardData = [
    { title: "Card title 1", text: "Some quick example text 1", image: "images/img-11.jpg" },
    { title: "Card title 2", text: "Some quick example text 2", image: "images/img-11.jpg" },
    { title: "Card title 3", text: "Some quick example text 3", image: "images/img-11.jpg" },
    { title: "Card title 4", text: "Some quick example text 4", image: "images/img-11.jpg" },
    { title: "Card title 5", text: "Some quick example text 5", image: "images/img-11.jpg" },
    { title: "Card title 6", text: "Some quick example text 6", image: "images/img-11.jpg" },
    { title: "Card title 7", text: "Some quick example text 7", image: "images/img-11.jpg" },
    { title: "Card title 8", text: "Some quick example text 8", image: "images/img-11.jpg" },

  ];

  return (
    <>
      <div id="carouselExampleControls" className="carousel">
        <div className="carousel-inner">
          {cardData.map((card, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="card">
                <div className="img-wrapper">
                  <img src={card.image} alt="card" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="/services/mobile-tyre-fitting" className="btn btn-success">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev bg-success"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-success "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Cards;
