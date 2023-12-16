import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import CardWithButtons from './CardWithButtons';
import LoadingComponent from '../components/LoadingComponent';

const SwipeableCards = ({ data }) => {
  const [cardSelectedIndex, setCardSelectedIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setCardSelectedIndex(index);
    console.log("\n\tSwipeable Card Instance:", index, cardSelectedIndex);
    // You can perform additional actions when the index changes
    // For example, fetching new data based on the current index
  };

  return (
    <Swiper
      loop={false}
      showsButtons={false}
      showsPagination={false}
      onIndexChanged={handleIndexChanged}
      loadMinimalSize={3} // Number of cards to load around the active card
    >
      {data.map((card, index) => (
        <React.Fragment key={index}>
          {index === cardSelectedIndex ? (
            <CardWithButtons
              cardData={card}
              cardIndex={index}
              cardSelectedIndex={cardSelectedIndex}
              resetCardIndex={cardSelectedIndex}
            />
          ) : (
            <LoadingComponent />
          )}
        </React.Fragment>
      ))}
    </Swiper>
  );
};

export default SwipeableCards;