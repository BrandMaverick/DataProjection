import React from 'react';
import ReactTable from 'react-table';
require('../node_modules/react-table/react-table.css');

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    
    render() {
        const data = [{
            name: 'Sanjay Garg1',
            age: 18,
            friend: {
                name: 'Garima Bansal1',
                age: 15,
            } }, {
                name: 'Sanjay Garg2',
                age: 19,
                friend: {
                    name: 'Garima Bansal2',
                    age: 16,
                }
        }]

        const columns = [{
            header: 'Name',
            accessor: 'name'
        }, {
            header: 'Age',
            accessor: 'age',
            render: props => <span className='number'>{props.value}</span>
        }, {
            id: 'friendName',
            header: 'Friends Name',
            accessor: d => d.friend.name
        }, {
            header: props => <span>Friends Age</span>,
            accessor: 'friend.age'
        }]

        return(<ReactTable
            data={data}
            columns={columns}
         />)
        }
        }

export default Counter;