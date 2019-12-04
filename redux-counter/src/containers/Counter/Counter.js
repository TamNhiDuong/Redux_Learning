import React, { Component } from 'react';
import { connect } from 'react-redux';  

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actionTypes'; 
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <button onClick={()=> this.props.onSaveCounter(this.props.ctr)}>Save counter</button>
                <ul>
                    {this.props.results.map(result => {
                        return (
                        <li key={result.id} onClick={()=>this.props.onDeleteCounter(result.id)}>{result.value}</li>
                        )
                    }
                         )}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results, 
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubstractCounter: () => dispatch(actionCreators.substract(5)),
        onSaveCounter: (resultFromState) => dispatch(actionCreators.storeResult(resultFromState)),
        onDeleteCounter: (id) => dispatch(actionCreators.deleteCounter(id)),
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);