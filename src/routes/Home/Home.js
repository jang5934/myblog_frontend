/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
`;

/* Main Component */
const Home = props => {
  /* Props */
  const {
    className,
  } = props;

  /* Renderer */
  return (
    <Container className={ className }>
      Home
    </Container>
  );
}

/* Main Component Settings */
Home.propTypes = {
  className: PropTypes.string,
}

/* Exports */
export default Home;