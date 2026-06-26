import { AssetScorecardData } from "../types/scorecard";

export const SPX500: AssetScorecardData = {
  symbol: "SPX500",
  bias: "Very Bullish",

  edgeScore: 9,
  technical: 4,
  sentiment: -1,
  fundamentals: 6,

  targets: [6941, 7176, 7411],

  sma20: true,
  sma50: true,
  sma100: true,
  sma200: true,

  volatility: "High",
  avgMove: 0.65,
};