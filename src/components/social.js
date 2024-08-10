import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
    transition: height 0.3s ease-in-out;
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: transform 0.3s ease, color 0.3s ease;
      color: var(--light-slate);

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--green);
        outline: none;
      }

      &:focus {
        outline: 2px dashed var(--green);
        outline-offset: 4px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  &:hover:after {
    height: 120px; /* Expand the line on hover */
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
