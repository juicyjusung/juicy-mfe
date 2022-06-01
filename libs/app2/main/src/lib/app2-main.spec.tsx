import App2Main from './app2-main';
import { render } from '@testing-library/react';

describe('App2Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Main />);
    expect(baseElement).toBeTruthy();
  });
});
