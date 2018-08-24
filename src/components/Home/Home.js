import React, { Component } from 'react';
import {
  Row,
  Button,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';

import CustomCarousel from '../StyledComponents/CustomCarousel';
import CustomCarouselCard from '../StyledComponents/CustomCarouselCard';
import routes from '../../config/routes';


class Home extends Component {
  getStarted = () => {
    const { history } = this.props;
    history.push(routes.NewLearning);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <Row>
          <h1>Everyday Education</h1>
        </Row>

        <Row style={{ margin: '3em 0' }}>
          <Row>
            <h2>&ldquo;Learning is the key to Success&rdquo;</h2>
          </Row>
          <Row>
            <h3>We all learn something new, every other day.</h3>
          </Row>
        </Row>


        <Row style={{ margin: '2em' }}>
          <h2>So, why not document it?</h2>
        </Row>

        <Row>
          <Row>
            <h3>Let&rsquo;s look at a couple of benefits</h3>
          </Row>
          <Row>
            <CustomCarousel autoplay dots>
              <CustomCarouselCard>
                <span>
                  Motivates you to learn something new everyday.
                </span>
              </CustomCarouselCard>
              <CustomCarouselCard>
                <span>
                  Look back at the things that you learnt.
                </span>
              </CustomCarouselCard>
              <CustomCarouselCard>
                <span>
                  Share your learnings with the world.
                </span>
              </CustomCarouselCard>
              <CustomCarouselCard>
                <span>
                  Inspire one, inspire all...
                </span>
              </CustomCarouselCard>
            </CustomCarousel>
          </Row>
        </Row>

        <Row style={{ marginTop: '5em' }}>
          <Row>
            <h3>Ready to roll?</h3>
          </Row>
          <Row>
            <Button type="primary" onClick={this.getStarted}>
              GET STARTED<Icon type="right" />
            </Button>
          </Row>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
