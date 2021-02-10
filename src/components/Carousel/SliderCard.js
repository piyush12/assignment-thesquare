import httpsWithQuality from '@utils/httpsWithQuality';
import { memo } from 'react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { CardStyle } from 'styles/cardStyle';

function SliderCard({ image, ammeneties, handleCardClick, activeSlide }) {
  return (
    <CardStyle onClick={() => handleCardClick(ammeneties.id)}>
      <div
        className={`card-wrapper ${
          +activeSlide === ammeneties.id ? 'active' : ''
        }`}
      >
        <div className="card-image">
          <img
            src={httpsWithQuality(image.image_url, 450)}
            alt={image.filename}
            className="img-responsive"
          />
        </div>

        <div className="card-ammenities">
          <h3>{ammeneties.name}</h3>
          <h3>£{ammeneties.price} /night</h3>
        </div>
        <div className="card-ammenities-icon">
          <h4>
            <FaBed />
            {ammeneties.bed}
          </h4>
          <h4>
            <FaBath />
            {ammeneties.bath}
          </h4>
        </div>
        <div className="card-footer">
          <h5>
            <FaMapMarkerAlt /> {ammeneties.location}
          </h5>
          <h6>Max residents: {ammeneties.resident}</h6>
        </div>
      </div>
    </CardStyle>
  );
}

export default memo(SliderCard);
