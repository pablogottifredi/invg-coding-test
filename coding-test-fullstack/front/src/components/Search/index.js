import React from 'react';
import { connect } from 'react-redux';
import SearchFilters from './SearchFilters';
import {
    SEARCH_CRITERIA_CHANGED
} from './types'

const mapStateToProps = state => ({
    ...state    
    });
    
const mapDispatchToProps = dispatch => ({
    onTextChange: (text) => dispatch({ type: SEARCH_CRITERIA_CHANGED, payload: { text: text }  }),
});

class Status extends React.Component {
    constructor(){
        super();
        this.state = {
            message: '',
            when: ''
        }
    }
    componentWillMount(){
     
    }
    processChange = (ev) => {
        if (ev.target.value)
            this.props.onTextChange( ev.target.value);
    }
   render() {
        return (
            <div>
                <div className="row">
                    <div className="col s10">    
                        <input onChange={this.processChange} type="text" id="autocomplete-input" className="autocomplete"/>
                        <label  >
                            search text
                        </label>
                        <div className="right">
                            <a className="valign-wrapper"><label>filters & behaviour</label><i className=" material-icons">filter_list</i></a>
                            
                        </div>
                    </div>
                    <div className="col s2">
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></a>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col s10">
                        <SearchFilters></SearchFilters>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
