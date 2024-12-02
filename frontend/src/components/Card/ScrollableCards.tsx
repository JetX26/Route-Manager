import { FC, useRef } from "react";
import Card from "./Card"; // Import the Card component

// Define the type for the card data
interface CardData {
  title: string;
  description: string;
}

interface ScrollableCardsProps {
  cards: CardData[]; // Array of card data passed as props
}

const ScrollableCards: FC<ScrollableCardsProps> = ({ cards }) => {
  // Ref to the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Scroll 300px to the left
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll 300px to the right
    }
  };

  return (
    <div className="relative pb-2">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#fff] px-2 py-1 rounded-full"
        onClick={scrollLeft}
      >
        &#8592; {/* Left arrow icon */}
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex space-x-4 pb-4 scrollbar-hide"
      >
        {/* Map through the array of cards and render each card */}
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-2 py-1 rounded-full"
        onClick={scrollRight}
      >
        &#8594; {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default ScrollableCards;
