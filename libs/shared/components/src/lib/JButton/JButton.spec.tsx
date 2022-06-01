import JButton from './JButton';
import { render } from '@testing-library/react';

describe('JButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JButton>button</JButton>);
    expect(baseElement).toBeTruthy();
  });
});
