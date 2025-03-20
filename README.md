# AlphaTrend

AlphaTrend is an open-source web app that allows users to search for fintech and finance terms, view current prices, and draw live graphs. It features a dark theme and integrates AI APIs for insights.

## Features

- 🔍 **Search for Stock Symbols**: Enter stock symbols (e.g., AAPL, TSLA) to fetch real-time financial data.
- 📊 **Live Graphs**: View intraday stock price trends in an interactive chart.
- 🌑 **Dark Theme**: A sleek and modern UI with a dark theme.
- 🧠 **AI-Powered Insights**: Fetch financial analysis using AI (coming soon).
- 🚀 **Runs from GitHub**: Deployable via GitHub Pages or Vercel.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/makalin/alphatrend.git
   cd alphatrend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment

You can deploy AlphaTrend using **Vercel**:

```sh
npm install -g vercel
vercel
```

Or deploy on GitHub Pages by building the project:

```sh
npm run build
```

## API Used

AlphaTrend uses the [Alpha Vantage API](https://www.alphavantage.co/) to fetch stock price data. Sign up for an API key and replace `demo` in the code with your actual key.

## Contributions

Pull requests are welcome! If you'd like to contribute, feel free to fork the repo and submit a PR.

## License

MIT License © 2025 AlphaTrend
