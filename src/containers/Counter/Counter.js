import React, {Component} from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => {
    //                 return {counter: prevState.counter + 1}
    //             })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => {
    //                 return {counter: prevState.counter - 1}
    //             })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => {
    //                 return {counter: prevState.counter + value}
    //             })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => {
    //                 return {counter: prevState.counter - value}
    //             })
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 15" clicked={this.props.onAdditionCounter}/>
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result
                </button>
                <ol>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}

                </ol>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'Decrement'}),
        onAdditionCounter: () => dispatch({type: 'Addition', value: 15}),
        onSubtractCounter: () => dispatch({type: 'Subtract', value: 8}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULTS', resultElid: id}),
    };


}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);