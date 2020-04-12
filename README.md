## Description

- Track the price, market cap, volatility of major cryptocurrencies.
- Use [CoinCap](https://coincap.io/) APs to track the data

## Libraries used
- React Router for routing
- Chard.js and its React wrapper to show the graph
- React testing library

## Design choices
- As I am not using any library for state management, it is managed by the 'page' component using the useState hook. Although it increases the fetch count it also prevents the stale data
- Using `useFetch` custom hook to fetch the data.
- The code structure is designed as `feature-oriented`. Each `container` is a page in the `app`.
- Components are mostly logic-less and containers are logic-full components.
- Styles are managed in the respective folder, but that does not prevent the overriding of styles
