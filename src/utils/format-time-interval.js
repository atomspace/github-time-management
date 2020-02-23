export default function formatTimeInterval (number) {
	const MILLISECONDS_IN_SECONDS = 1000,
		  SECONDS_IN_MINUTE = 60,
		  MINUTES_IN_HOUR = 60,
		  HOURS_IN_DAY = 24,
		  DAYS_IN_WEEK = 7;

	let sec = Math.floor(number / MILLISECONDS_IN_SECONDS);
	let min = Math.floor(sec / SECONDS_IN_MINUTE);
	let hour = Math.floor(min / MINUTES_IN_HOUR);
	let day = Math.floor(hour / HOURS_IN_DAY);
	let week = Math.floor(day / DAYS_IN_WEEK);

	sec %= MINUTES_IN_HOUR;
	min %= MINUTES_IN_HOUR;
	hour %= HOURS_IN_DAY;
	day %= DAYS_IN_WEEK;

	week = week === 0 ? '' : `${week}w`;
	day = day === 0 ? '' : `${day}d`;
	hour = hour === 0 ? '' : `${hour}h`;
	min = min === 0 ? '' : `${min}m`;
	sec = sec === 0 ? '' : `${sec}s`;
	let str = `${week} ${day} ${hour} ${min} ${sec}`;

	return str;
}