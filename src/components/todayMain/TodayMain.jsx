import CurrentTemp from "./CurrentTemp";
import DailyHigh from "./DailyHigh";
import DailyLow from "./DailyLow";
import CloudCover from "./CloudCover";
import FeelsLike from "./FeelsLike";
import Conditions from "./Conditions";

export default function TodayMain() {
  return (
    <>
      <Conditions />
      <CurrentTemp />
      <FeelsLike />
      <DailyHigh />
      <DailyLow />
      <CloudCover />
    </>
  );
}
