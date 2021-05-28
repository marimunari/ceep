export const removeRepeatedDates = (dates) => {
    const uniquesDates = [];
    dates.forEach((date => {
        if(uniquesDates.indexOf(date.formattedDate) === -1) {
            uniquesDates.push(date.formattedDate);
        }
    }));

    return uniquesDates;
}

export const sortDates = (date) => {
    date.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');

        return firstDate - secondDate;
    });
}