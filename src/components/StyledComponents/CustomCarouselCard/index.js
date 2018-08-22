import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Card,
} from 'antd';


const CarouselCard = styled(Card)`
  @media (max-width: 480) {
    width: 100%;
  }
  @media (min-width: 481px) {
    width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CarouselText = styled.div`
  font-size: 1.9em;
`;

const CustomCarouselCard = ({ children }) => (
  <CarouselCard>
    <CarouselText>
      { children }
    </CarouselText>
  </CarouselCard>
);

CustomCarouselCard.propTypes = {
  children: PropTypes.shape({}).isRequired,
};


export default CustomCarouselCard;
