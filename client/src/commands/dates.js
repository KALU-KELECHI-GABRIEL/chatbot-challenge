import moment from "moment";

const today = new Date();
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '']

export default function days (dayGiven) {
    let result = [];
    const date = moment(dayGiven);
    let dayReceived = date.day();
    console.log(dayReceived);
    dayReceived = dayReceived - 1;
    let daysLeft = 5;
    let counter = 0;
    while (daysLeft > 0) {
        const element = weekdays[dayReceived];
        result.push({day: element, dayOffset: counter});
        dayReceived = dayReceived + 1;
        daysLeft--;
        if (dayReceived > 4 && daysLeft > 0) {
            dayReceived = 0;
            counter = counter + 3;
        }  
        else{
            counter++;
        } 
    }
    return result;
}

const misc = () => {
return 'now'

}