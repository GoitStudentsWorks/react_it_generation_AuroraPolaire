import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../images/icons/facebook-logo.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter-logo.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube-logo.svg';
import { ReactComponent as Instagram } from '../../images/icons/instagram-logo.svg';

export const FacebookIcon = styled(Facebook)`
  width: 26px;
  path {
    fill: #8BAA36;
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: #FAFAFA;
  }
`;
export const TwitterIcon = styled(Twitter)`
  width: 26px;
  path {
    fill: #8BAA36;
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: #FAFAFA;
  }
`;
export const YoutubeIcon = styled(Youtube)`
  width: 26px;
  path {
    fill: #8BAA36;
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: #FAFAFA;
  }
`;
export const InstagramIcon = styled(Instagram)`
  width: 26px;
  path {
    fill: #8BAA36;
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: #FAFAFA;
  }
`;
export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
