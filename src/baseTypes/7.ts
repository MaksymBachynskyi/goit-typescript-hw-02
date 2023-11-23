/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
	Sunday = 'Sunday',
	Monday = 'Monday',
	Tusday = 'Tusday',
	Wednesday = 'Wednesdey',
	Thursday = 'Thursday',
	Friday = 'Friday',
	Saturday = 'Saturday',
}
function isWeekend(day: string): boolean {
	return day === 'Sunday' || day === 'Saturday';
}
