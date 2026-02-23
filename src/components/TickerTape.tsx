const items = [
  "AAPL ▲ 2.34%",
  "MSFT ▲ 1.12%",
  "TSLA ▼ 0.87%",
  "AMZN ▲ 3.01%",
  "GOOGL ▲ 0.45%",
  "BTC ▲ 4.22%",
  "ETH ▼ 1.33%",
  "SPY ▲ 0.67%",
  "NVDA ▲ 5.11%",
  "META ▲ 1.89%",
];

const TickerTape = () => {
  const content = items.join("  ◆  ");

  return (
    <div className="w-full border-y border-border bg-muted/50 py-2 ticker-tape">
      <div className="ticker-tape-content">
        <span className="text-xs tracking-widest">
          {content}{"  ◆  "}{content}
        </span>
      </div>
    </div>
  );
};

export default TickerTape;
