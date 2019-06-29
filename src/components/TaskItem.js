import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends React.Component { 
    onUpdateStatus = () =>
    {
        this.props.onUpdateStatus(this.props.task);
    }
    render() {
        var {task,index} = this.props;
        var className =task.status===1?"label label-danger":"label label-info";
        var textStatus= task.status===1?"Active" : "Disable";
        return(
            
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span  onClick={ this.onUpdateStatus } className={className}>{textStatus}
                         
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="glyphicon glyphicon-pencil" ></span>&nbsp;Edit
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash" ></span>&nbsp;Delete
                    </button>
                </td>
            </tr>   
        )             
    }
}


const mapStoretoProps = (state) =>
{
    return{
    }
}

const mapDispatchToProps= (dispatch,props) =>
{
    return{
        onUpdateStatus :(task) =>
        {
            dispatch(actions.updateStatus(task));
        }
    }
}
export default connect(mapStoretoProps,mapDispatchToProps)(TaskItem);
