export interface AssetScorecardData {
  symbol: string;
  bias: "Very Bullish" | "Bullish" | "Neutral" | "Bearish" | "Very Bearish";

  edgeScore: number;
  technical: number;
  sentiment: number;
  fundamentals: number;

  targets: number[];

  sma20: boolean;
  sma50: boolean;
  sma100: boolean;
  sma200: boolean;

  volatility: string;
  avgMove: number;
}