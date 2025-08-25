// src/components/OfferList.tsx
import React from "react";
import { Offer } from "../types";

interface OfferListProps {
  offers: Offer[];
}

const OfferList: React.FC<OfferListProps> = ({ offers }) => {
  return (
    <div className="offer-list">
      {offers.map((offer) => (
        <div key={offer.listing_id} className="offer-item">
          <div className={`quantity-badge ${offer.quantity > 10 ? 'high' : ''}`}>
            {offer.quantity} left
          </div>
          <img src={offer.MainImage.url_570xN} alt={offer.title} />
          <h3>{offer.title}</h3>
          <p>
            {offer.price} {offer.currency_code}
          </p>
          <a href={offer.url} target="_blank" rel="noopener noreferrer">
            View Product
          </a>
        </div>
      ))}
    </div>
  );
};

export default OfferList;
