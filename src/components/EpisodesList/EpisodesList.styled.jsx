import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;

export const ListItem = styled.li`
  width: calc((100% - 150px) / 5);
  margin: 15px;
  padding: 10px;
  display: inline-block;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #eeeeee;
  background-color: #fff;
  border-top: 0;
  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 17px;
  line-height: 1;
  color: #212121;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #757575;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.03em;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const HideEpisodes = styled(Link)`
  display: inline-block;
  margin-left: 80px;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  font-size: 16px;
  line-height: 1.19;
  color: #212121;
  border-bottom: 1px solid #2a363b;
`;
