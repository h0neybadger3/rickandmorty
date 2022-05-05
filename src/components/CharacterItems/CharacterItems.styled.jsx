import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  padding-left: 80px;
  padding-right: 80px;
  align-items: baseline;
  flex-wrap: wrap;
  margin: -15px;
`;

export const ListItem = styled.li`
  width: calc((100% - 90px) / 3);
  margin: 15px;
`;

export const CharacterLink = styled(Link)`
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

export const Img = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  border: 1px solid #eeeeee;
  border-top: 0;
  width: 300px;
  padding: 10px 14px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 2;
  color: #212121;
  letter-spacing: 0.06em;
  margin-bottom: 5px;
`;

export const Status = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.03em;
  ${props =>
    props.status === 'Alive' &&
    css`
      background-color: #198754;
    `}

  ${props =>
    props.status === 'Dead' &&
    css`
      background-color: #dc3545;
    `}
     ${props =>
    props.status === 'unknown' &&
    css`
      background-color: #6c757d;
    `}
`;
