import React, {Component} from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from "../../store/actions";

class Counter extends Component {
    state = {
        counter: 0
    }


    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 15" clicked={this.props.onAdditionCounter}/>
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result
                </button>
                <ul>
                    {this?.props?.storedResults?.map(strResult => (
                        <li key={strResult?.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}

                </ul>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdditionCounter: () => dispatch({type: actionTypes.ADDITION, value: 15}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 8}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULTS, resultElid: id}),
    };


}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);