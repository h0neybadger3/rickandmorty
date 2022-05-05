import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 40px;
`;

export const Ul = styled.ul`
  margin-left: 200px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 2;
  color: #212121;
  letter-spacing: 0.06em;
`;

export const Descr = styled.p`
  color: #757575;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.03em;
`;

export const EpisodesLink = styled(Link)`
  letter-spacing: 0.03em;
  font-size: 16px;
  line-height: 1.19;
  margin: 0;
  margin-bottom: 10px;
  color: #212121;
  border-bottom: 1px solid #2a363b;
`;

export const EpisodesWrapper = styled.div`
  padding-top: 40px;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 10px;
`;

export const FavWrapper = styled.div`
  margin-left: auto;
`;
