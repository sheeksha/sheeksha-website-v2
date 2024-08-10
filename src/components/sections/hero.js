import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sheeksha Joyseeree.</h2>;
  const three = <h3 className="big-heading">I enjoy learning new skills.</h3>;
  const four = (
    <>
      {/* <p>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at{' '}
        <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a>
        .
      </p> */}
      <p>
        I’m a versatile developer with experience in designing E-commerce websites
        and academic background in developing proof of concept for object detection using Artificial Intelligence and Data Science.
      </p>
    </>
  );
  const five = (
    <a
    className="email-link"
    href="mailto:sheekshajoyseeree@gmail.com?subject=Interest%20in%20Collaboration&body=Hi%20Sheeksha%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20am%20impressed%20with%20your%20work.%20I'd%20like%20to%20discuss%20potential%20collaboration%20opportunities%20or%20explore%20how%20we%20can%20work%20together.%20Please%20let%20me%20know%20a%20convenient%20time%20for%20you%20to%20have%20a%20conversation.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
    rel="noreferrer">
    Get in Touch
    </a>
    // <a
    //   className="email-link"
    //   href="https://www.newline.co/courses/build-a-spotify-connected-app"
    //   target="_blank"
    //   rel="noreferrer">
    //   Check out my course!
    // </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
