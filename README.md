# Currency converter package - React | Next JS | Typescript | Emotion JS

Allows users to convert a set of currencies and the package can be integrates seamlessly into a web page. It provides functionality to update exchange rates and customize styles to match the page design.

For more detailed documentation, check out the [Notion page](https://panoramic-magic-bfd.notion.site/Currency-converter-19ad3f93fc72806c9b3ac3ddd447da2c)

## Getting Started

[Website link](https://currency-converter-nabeel.vercel.app/)

### How to run the landing page locally

```js
    npm run dev
    npx nx dev currency-converter-page
```

### To generate the build

```js
    nx build currency-converter-page
```

## Code Structure Overview

The project emphasizes modularity and independent releases of different libraries and applications. This architecture ensures that each component can be developed, versioned, and deployed independently, promoting ease of maintenance, scalability, and reusability.

The system is divided into the following three primary projects, each of which is designed to be reusable and independently deployable:

1.currency-converter-page - Serves as the landing page for the currency converter feature. It is primarily focused on integrating and displaying the currency converter functionality within a specific web page or application.

2.currency-converter-view - The currency-converter-view is the core feature package. It provides the main currency conversion logic and UI widget that can be easily inserted into any application or webpage.

3.currency-converter-ui - The currency-converter-ui package provides all the necessary Design System (DS) components and theming support for the currency-converter-view. It ensures consistency in the UI, making sure that all components adhere to the same visual standards.

```javascript

cc-nx-monorepo/
	├── apps/
  │   ├── currency-converter-page/   //Landing page
  ├── libs/
  │   ├── currency-converter-view/  //Currency converter library
  │			 ├── context/ // To store the Currency context
  │			 ├── hooks/    // To store the custom hook. eg: useCurrency()
	│			 ├── constants/
	│			 ├── lib/
	│			 		 ├── CurrencyConverter/ //Currency converter lib to reuse at any webpages
	│			 		 ├── RatesChart/
  │   ├── currency-converter-ui //Component library (DS) to use for currency converter
	│			  ├── components/ //component added here eg: Button, TextField etc
	│			  ├── theme/  // Design tokens are added here, colors,layout, typography etc..
	│			  ├── types/
	│			  ├── utils/
	│

```

## Functional requirements

1. To provide greater flexibility and enable web pages using the currency converter tool to customize its behavior, we offer an easy mechanism to override the input functionality, allowing the integration of custom currencies and values.

Code Example:

```javascript
    npm i @cc-nx-monorepo/currency-converter-view
```

```javascript
import {CurrencyProvider, CurrencyConverter} from '@cc-nx-monorepocurrency-converter-view''
...

const customCurrencyData  = {...} //custom currency as per the consumer

return(
	<CurrencyProvider currencies ={customCurrencyData}>
	   <CurrencyConverter />
	</CurrencyProvider>
)
...
```

2. The tool should be customizable in terms of styling (tool colors and styles should be changeable)

Code Example:

```javascript
    npm i @cc-nx-monorepo/currency-converter-ui
```

```javascript
import {ThemeProvider, theme, Button, TextField, Select}
from '@cc-nx-monorepo/currency-converter-ui'
...

const customTheme = {...theme, ...newTheme}

return(
	<ThemeProvider theme={customTheme}>
		<Button />
		<TextField />
		<Select />
		...
		<CurrencyConverter />
	</ThemeProvider>
	)
...
```

3. Currency conversion logic

```javascript
//Context - CurrencyProvider implementation

const CurrencyContext = (createContext < CurrencyContextType) | (undefined > undefined);

export function CurrencyProvider({ children, currencies }: { children: React.ReactNode, currencies?: Currency[] }) {
  if (currencies && currencies.length === 0) {
    throw new Error('CurrencyProvider requires at least one currency.');
  }

  const validCurrencies = currencies ?? CURRENCIES;

  const currencyConverter = useCurrencyConverter(validCurrencies);

  return <CurrencyContext.Provider value={currencyConverter}>{children}</CurrencyContext.Provider>;
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
```

```javascript
const useCurrencyConverter = (currencies: Currency[]) => {
  const [amount, setAmount] = useState < number > 100;
  const [fromCurrency, setFromCurrency] = useState < Currency > currencies[0];
  const [toCurrency, setToCurrency] = useState < Currency > currencies[1];
  const [convertedAmount, setConvertedAmount] = useState < number > 0;

  useEffect(() => {
    if (convertedAmount > 0) convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  const convertCurrency = () => {
    const result = (amount / fromCurrency.rate) * toCurrency.rate;
    setConvertedAmount(parseFloat(result.toFixed(2)));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    convertCurrency,
    swapCurrencies,
    currencies,
  };
};
```
