export function findPercent(value, maxValue)
{
	return value * 100 / maxValue;
}

export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export function timeFormatter(totalSeconds)
{
	totalSeconds = Math.round(totalSeconds);
	let secondsPart = totalSeconds%60 < 10 ? "0" : ""; 
	secondsPart += totalSeconds%60;
	return (Math.floor(totalSeconds / 60) + ":" + secondsPart);
}

export function percentFormatter(value)
{
	return Math.round(value * 100) + '%';
}

export function calculateUnits(value, calcFunction)
{
	let floatRegExp = /^\d+(\.\d+)?/;
	let numberMatch = value.match(floatRegExp);
	let units = value.slice(numberMatch[0].length);
	return calcFunction(parseFloat(numberMatch)) + units;
}
