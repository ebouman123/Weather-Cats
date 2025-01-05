import CurrentTemp from "./CurrentTemp";
import DailyHigh from "./DailyHigh";
import DailyLow from "./DailyLow";
import CloudCover from "./CloudCover";

export default function TodayMain() {
  return (
    <>
      <CurrentTemp />
      <DailyHigh />
      <DailyLow />
      <CloudCover />
    </>
  );
}
