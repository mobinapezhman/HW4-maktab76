function monthName(date) {
    let monthDate = date.getMonth();
    switch (monthDate) {
        case 0:
            result = "January";
            break;
        case 1:
            result = "February";
            break;
        case 2:
            result = "March";
            break;
        case 3:
            result = "April";
            break;
        case 4:
            result = "May";
            break;
        case 5:
            result = "June";
            break;
        case 6:
            result = "July";
            break;
        case 7:
            result = "Augusts";
            break;
        case 8:
            result = "September";
            break;
        case 9:
            result = "October";
            break;
        case 10:
            result = "November";
            break;
        case 11:
            result = "December";
            break;
    }
    return result;
}
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));