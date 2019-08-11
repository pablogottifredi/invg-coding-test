import React from 'react';
import { connect } from 'react-redux';
import {
    SEARCH_CRITERIA_CHANGED
} from '../types'


const mapDispatchToProps = dispatch => ({
    onIdFilterChanged: (id) => dispatch({ type: SEARCH_CRITERIA_CHANGED, payload: { id: id }  }),
    onDetailedFilterChanged: (anumber) => dispatch({ type: SEARCH_CRITERIA_CHANGED, payload: { detailed: anumber }  }),

});

class SearchFilters extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            detailed: 1    
        }
    }
    componentWillMount(){
     
    }
    processChange = (ev) => {
        if (ev.target.value)
            this.props.onIdFilterChanged( ev.target.value);
    }
    toggleChecked = (ev) => {
        let b = ev.target.checked;
        let anumber = (b==true)?1:0;
        this.props.onDetailedFilterChanged( anumber);
    }
    render() {
        return (
            <div className="z-depth-1 col s4 right default-padding" >

                <div className="row no-padding">
                    <div className="right col s6 ">
                        <label>
                            <input type="text" value={this.props.id} onChange={this.processChange} />
                            <span>helpdesk #ID</span>
             
                        </label>
                    </div>
                </div>
                <div className="row no-padding">
                    <div className="right col s12">
                        <label className="right">
                            
                            <input type="checkbox" checked={this.props.detailed} onChange={this.toggleChecked} />
                            <span><label>include detailed info</label></span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect( ()=>{},mapDispatchToProps)(SearchFilters);
