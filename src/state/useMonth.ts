
import Holidays from 'date-holidays';
import { useSettings } from "./useSettings";
import monthImage from '../Components/monthImage';

export const hd = new Holidays('US');
// https://gist.github.com/markthiessen/3883242


const populateDate = (y, m, d) => {
  const jsDate = new Date(y, m, d);

  const dayOfMonth = jsDate.getDate();
  const dayOfWeek = jsDate.getDay();

  const date = {
    dayOfMonth,
    dayOfWeek,
    isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
    holidays: [],
  };

  if (hd.isHoliday(jsDate)) {
    hd.isHoliday(jsDate).map(h => date.holidays.push(h.name));
  }

  return date;
}

//note: month is 0 based, just like Dates in js
export const populateMonth = (year, month, artist) => {
  const weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate. getDate();

  let dayOfWeekCounter = firstDate.getDay();

  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    const d = new Date(year, month, date);
    weeks[weeks.length - 1].push(populateDate(year, month, date));
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }

  console.log(monthImage, artist, month)

  return {
    weeks: weeks
      .filter((w) => !!w.length)
      .map((w) => ({
        start: w[0],
        end: w[w.length - 1],
        dates: w,
      })),
    name: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month],
    image: monthImage[artist][month],
  };
};

export const useMonth = () => {
  const { year, month, artist } = useSettings();

  return {
    month: populateMonth(year, month, artist)
  };
};
