// This method accounts for time zone. dateString takes the form
// YYYY-MM-DD and comes directly from <input type="date"> element.
function normalizeDate(dateString) {
    const date = new Date(dateString);
    const normalizedDate = new Date(date.getTime() + Math.abs(60000 * date.getTimezoneOffset()));

    return normalizedDate;
}


// To help with testing
function denormalizeDate(normalizedDate) {
    const leftPadZeros = (number, maxNumDigits) => {
        const numDigits = (Math.log10(number) | 0) + 1;
        const numZeros = Math.max(maxNumDigits - numDigits, 0);

        return `${'0'.repeat(numZeros)}${number}`;
    };

    const year = normalizedDate.getUTCFullYear();
    const month = normalizedDate.getUTCMonth() + 1;
    const date = normalizedDate.getUTCDate();

    return `${leftPadZeros(year, 4)}-${leftPadZeros(month, 2)}-${leftPadZeros(date, 2)}`;
}


export { normalizeDate, denormalizeDate };