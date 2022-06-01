import App1Main from './app1-main';
import { render } from '@testing-library/react';

describe('App1Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Main />);
    expect(baseElement).toBeTruthy();
  });
});
