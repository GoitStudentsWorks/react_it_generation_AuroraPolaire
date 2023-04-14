import React from 'react';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageNotFound from '../../images/icons/page-not-found.svg';

const NotFoundPage = () => {
  return (
    <Section>
      <Wrapper>
        <img src={PageNotFound} alt="Page not found" />
        <h2>We are sorry,</h2>
        <p>but the page you were looking for can’t be found..</p>
      </Wrapper>
    </Section>
  );
};

export default NotFoundPage;
