import React from 'react';
import Search from './TaskSearchControl';
import Sort from './TaskSortControl';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskControl extends React.Component { 
    onToogleForm = () =>
    {
        this.props.onToogleForm();
    }
    render() { 
        return (
            <div >
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="button" className="btn btn-primary" onClick ={this.onToogleForm}>
                        <span className="fa fa-plus mr-5"></span>
                        Add Task                    
                    </button>
                </div> 
                <Search tasks={this.props.tasks}  onReceiveSearch={this.onReceiveSearch}/>
                <Sort onSort= {this.onSort} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        isDisplayForm : state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch,props) =>
{
    return {
        onToogleForm : () =>
        {
            dispatch(actions.toogleForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskControl);
