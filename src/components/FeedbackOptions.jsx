import styled from 'styled-components';
import React from 'react';
import { theme } from './theme';

export let totalGood = 0;
export let totalNeutral = 0;
export let totalBad = 0;

const Button = styled.button`
  padding: ${theme.sizes.btnPadding};
  margin-right: 10px;
  background-color: ${theme.colors.btnBackground};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${theme.colors.accentBackground};
    color: ${theme.colors.text};
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const FeedbackOptions = ({ option }) => {
  return (
    <div>
      <Button type="button" name="good" onClick={e => option(e.target.name)}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={e => option(e.target.name)}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={e => option(e.target.name)}>
        Bad
      </Button>
    </div>
  );
};
