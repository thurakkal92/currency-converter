import { render } from '@testing-library/react';

import CurrencyConverterView from './currency-converter-view';

describe('CurrencyConverterView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CurrencyConverterView />);
    expect(baseElement).toBeTruthy();
  });
});
