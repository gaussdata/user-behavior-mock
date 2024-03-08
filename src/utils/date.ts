import * as dayjs from 'dayjs';
import { randomCount } from './random';
export function createDateDayList(start: string | number, end: string | number) {
  const result = [];
  let startDate = dayjs(start);
  const endDate = dayjs(end);
  while (startDate.isBefore(endDate.add(1, 'day'))) {
    result.push(dayjs(startDate).format('YYYY-MM-DD'))
    startDate = startDate.add(1, 'day');
  }
  return result;
}

export function pickTimeInDay(date: string){
  const time = new Date(date).getTime();
  return randomCount(0, 86400) + time
}