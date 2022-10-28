import styled from 'styled-components';
import { theme } from './theme';
// import { StateComponents } from './App';

const Stat = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.normal};
`;

const Nostat = styled.h2`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bolt};
`;

const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 10px;
  font-weight: ${theme.fontWeights.bolt};
`;

export const Statistics = props => {
  return (
    <div>
      <Stat>Statistics</Stat>
      {props.total === 0 ? (
        <Nostat>There is no feedback</Nostat>
      ) : (
        <List>
          <Item>Good : {props.good}</Item>
          <Item>Neutral : {props.neutral}</Item>
          <Item>Bad : {props.bad}</Item>
          <Item>Total : {props.total}</Item>
          <Item>Positive Feedback : {props.percent}%</Item>
        </List>
      )}
    </div>
  );
};
