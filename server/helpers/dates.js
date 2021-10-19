import moment from "moment";

const today = new Date();
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const days = (dayGiven) => {
    let result = [];
    const date = moment(dayGiven);
    let dayReceived = date.day();
    console.log(dayReceived);
    dayReceived = dayReceived - 1;
    let daysLeft = 5;
    while (daysLeft > 0) {
        const element = weekdays[dayReceived];
        result.push(element);
        dayReceived = dayReceived + 1;
        daysLeft--;
        if (dayReceived > 4 && daysLeft > 0) {
            dayReceived = 5 - daysLeft;
        }   
    }
    return result;
};

module.exports = { days }