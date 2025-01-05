import CurrentTemp from "./CurrentTemp";
import DailyHigh from "./DailyHigh";
import DailyLow from "./DailyLow";

export default function TodayMain() {
  return (
    <>
      <CurrentTemp />
      <DailyHigh />
      <DailyLow />
    </>
  );
}
