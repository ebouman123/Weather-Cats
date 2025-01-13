import CurrentTemp from "./CurrentTemp";
import DailyHigh from "./DailyHigh";
import DailyLow from "./DailyLow";
import CloudCover from "./CloudCover";
import FeelsLike from "./FeelsLike";

export default function TodayMain() {
  return (
    <>
      <CurrentTemp />
      <FeelsLike />
      <DailyHigh />
      <DailyLow />
      <CloudCover />
    </>
  );
}
