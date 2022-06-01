import App from './app';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App auth={true} />);

    expect(baseElement).toBeTruthy();
  });
});
