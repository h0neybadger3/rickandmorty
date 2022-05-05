import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SiteNav = styled.ul`
  display: flex;
`;

export const SiteNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const SiteNavLink = styled(NavLink)`
  display: block;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  line-height: 1.15;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #212121;
  text-decoration: none;
  &:hover {
    color: #2196f3;
  }
`;
