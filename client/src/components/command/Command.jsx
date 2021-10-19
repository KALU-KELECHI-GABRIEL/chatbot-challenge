import { React, Fragment } from 'react'
import Map from '../map/Map'
import Complete from '../complete/Complete'
import Dates from '../date/Date'
import Rate from '../rate/Rate'
import days from '../../commands/dates'
import moment from 'moment';

function Command({data, childToParent}) {
    let daysArray;
    let dates = false;
    let rate = false;
    let complete = false;
    let map = false;
    if (data.command.type === 'date') {
        dates = true;
        daysArray = days(data.command.data);
    }
    else if (data.command.type === 'rate') {
        rate = true;
    }
    else if (data.command.type === 'map') {
        map = true;
    }
    else if (data.command.type === 'complete') {
        complete = true;
    }
    const commandToChildComplete = (childData) => {
        let message;
        let completeS;
        if (childData === 'Yes') {
            completeS = true;
            message = `You closed this conversation`;
        }
        else if (childData === 'No') {
            completeS = false;
            message = `Conversation close request declined`;
        }
        else{
            completeS = false;
            message = `You Selected ${childData}`;
        }
        const commandMessageS = {
            author: 'Ottonova Bot(Thomas)',
            message,
            time: `${new Date()}`,
            complete: completeS,
            type: 'complete'
        };
        childToParent(commandMessageS)
    }
    
    const commandToChildDate = (childData, childDate) => {
        let newDate = moment(childDate).add(childData.dayOffset, 'd').format('LL');
        let message = `You Selected ${childData.day}, ${newDate}`;
        let complete = false;
        const commandMessageSD = {
            author: 'Ottonova Bot(Thomas)',
            message,
            time: `${new Date()}`,
            complete,
            type: 'date'
        };
        // console.log(childData);
        childToParent(commandMessageSD)
    }

    const commandToChildRate = (childData) => {
        let message = `Thank you You rated this service ${childData}/5`;
        let complete = false;
        const commandMessageSD = {
            author: 'Ottonova Bot(Thomas)',
            message,
            time: `${new Date()}`,
            complete,
            type: 'rate'
        };
        // console.log(childData);
        childToParent(commandMessageSD)
    }

    const commandToChildMap = (childData) => {
        let message = `You closed the Ottonova Location Map`;
        let complete = false;
        const commandMessageSD = {
            author: 'Ottonova Bot(Thomas)',
            message,
            time: `${new Date()}`,
            complete,
            type: 'map'
        };
        // console.log(childData);
        childToParent(commandMessageSD)
    }

    return (
                <Fragment>
                    {
                        map ? <Map location={data.command.data} dateTime={data.command.data} commandToChild={commandToChildMap} />
                        : null
                    }
                    {
                        complete ? <Complete data={ data.command.data } author={ data.author } commandToChild={commandToChildComplete} />
                        : null
                    }
                    {
                        dates ? <Dates data={ daysArray } author={ data.author } dateTime={data.command.data} commandToChildDate={commandToChildDate} />
                        : null
                    }
                    {
                        rate ? <Rate data={ data.command.data } author={ data.author } dateTime={data.command.data} commandToChild={commandToChildRate} />
                        : null
                    }
                </Fragment>
    )
}

export default Command
