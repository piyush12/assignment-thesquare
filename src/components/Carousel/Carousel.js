import React, { Component, useRef } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';

import SliderCard from './SliderCard';
import { Container, Grid } from '@material-ui/core';
import DropDown from './DropDown';
import { selectApartement } from 'src/store/actions/apartementAction';

const Div = styled.div`
  margin-bottom: 40px;
  background-color: rgb(246, 248, 248);
  padding: 0.5rem 2rem 3rem;
  margin-top: 1rem;
  font-size: 1rem;
  min-height: 400px;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const DropDownDiv = styled.div`
  margin-top: 1rem;
`;

const settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const apartmentData = [
  {
    id: 0,
    name: 'Studio',
    price: 121,
    bed: 1,
    bath: 1,
    resident: 2,
    location: 'Shibuya',
  },
  {
    id: 1,
    name: '1 Bedroom',
    price: 173,
    bed: 1,
    bath: 1,
    resident: 2,
    location: 'Shibuya',
  },
  {
    id: 2,
    name: '2 Bedroom',
    price: 231,
    bed: 2,
    bath: 1,
    resident: 4,
    location: 'Shibuya',
  },
  {
    id: 3,
    name: '3 Bedroom',
    price: 307,
    bed: 3,
    bath: 1,
    resident: 6,
    location: 'Shibuya',
  },
];

export default function Carousel({ images }) {
  const dispatch = useDispatch();
  const { activeSlide } = useSelector((state) => state.apartements);

  const sliderRef = useRef();

  const handleDropDownSelect = (value) => {
    sliderRef.current.slickGoTo(value);
    dispatch(selectApartement(value));
  };

  const handleCardClick = (value) => {
    dispatch(selectApartement(value));
  };

  return (
    <Container>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} sm={9}>
          <Div>
            <h1>Apartment Type</h1>
            <Slider {...settings} ref={sliderRef} className="relative">
              {images.slice(0, 4).map((image, id) => {
                return (
                  <SliderCard
                    image={image}
                    key={'slide#' + id}
                    ammeneties={apartmentData[id]}
                    handleCardClick={handleCardClick}
                    activeSlide={activeSlide}
                  />
                );
              })}
            </Slider>
          </Div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <DropDownDiv>
            <DropDown
              options={[
                {
                  value: 0,
                  name: 'Studio £121 /night',
                },
                {
                  value: 1,
                  name: '1 Bedroom £173 /night',
                },
                {
                  value: 2,
                  name: '2 Bedroom £231 /night',
                },
                {
                  value: 3,
                  name: '3 Bedroom £307 /night',
                },
              ]}
              handleDropDownSelect={handleDropDownSelect}
              selectedValue={activeSlide}
            />
          </DropDownDiv>
        </Grid>
      </Grid>
    </Container>
  );
}
