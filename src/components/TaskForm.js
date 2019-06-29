import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends React.Component { 
    constructor(props)
    {
        super(props);
        this.state = {
            name :'',
            status : 0
        };
    }

    onHanldeChange = (event) =>
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    onHandleSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onAddTask(this.state);
        //this.onClearForm();
        this.onHandleClose();
    }

    onHandleClose = () =>
    {
        this.props.onCloseForm();
    }

    render() { 
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Task
                            <span className="glyphicon glyphicon-remove text-right" onClick ={this.onHandleClose}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onHandleSubmit}>  
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" 
                                    name ="name"
                                    onChange={this.onHanldeChange}
                                />
                            </div> 

                            <div className="form-group">
                                <label>State:</label>
                                <select  className="form-control" name="status" onChange={this.onHanldeChange} >
                                    <option value={0}>Disable</option>
                                    <option value={1}>Active</option>
                                </select>
                            </div> 
                            
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" >Save</button>&nbsp;
                                <button type="reset" className="btn btn-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStoretoProps = (state) =>
{
    return{
        task : state.task
    }
}

const mapDispatchToProps= (dispatch,props) =>
{
    return{
        onAddTask :(task) =>
        {
            dispatch(actions.addTask(task));
        },
        onCloseForm :() =>
        {
            dispatch(actions.closeForm());
        }

    }
}

export default connect(mapStoretoProps,mapDispatchToProps)(TaskForm) ;
