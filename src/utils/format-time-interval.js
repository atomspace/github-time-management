export default function formatTimeInterval (value) {
	let milliseconds = parseInt(value, 10);
	let day, hour, min, sec;

	const MILLISECONDS_IN_SECONDS = 1000,
		  SECONDS_IN_MINUTE = 60,
		  MINUTES_IN_HOUR = 60,
		  HOURS_IN_DAY = 24;

	sec = Math.floor(milliseconds / MILLISECONDS_IN_SECONDS);

	min = Math.floor(sec / SECONDS_IN_MINUTE);

	sec %= MINUTES_IN_HOUR;

	hour = Math.floor(min / MINUTES_IN_HOUR);

	min %= MINUTES_IN_HOUR;

	day = Math.floor(hour / HOURS_IN_DAY);

	hour %= HOURS_IN_DAY;

	day = day === 0 ? '' : `${day}d`;
	hour = hour === 0 ? '' : `${hour}h`;
	min = min === 0 ? '' : `${min}m`;
	sec = sec === 0 ? '' : `${sec}s`;
	let str = `${day} ${hour} ${min} ${sec}`;

	return str;
}