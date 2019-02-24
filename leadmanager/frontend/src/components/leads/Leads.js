import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads } from "../../actions/leads";

export class Leads extends Component {

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <div>
                <h1>Leads List</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leadsReducer.leads
});

const mapDispatchToProps = dispatch => {
    return {
        getLeads: () => dispatch(getLeads())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Leads);