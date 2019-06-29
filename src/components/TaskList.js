import React from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskList extends React.Component { 
    render() {   

        let {tasks} = this.props;     
        
         var elmTasks = tasks.map((task, index) => {
            return (
                <TaskItem
                    key={task.id}
                    task={task}
                    index={index + 1}
                />
            )
        });

        return (                          
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">State</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text"  
                                        className="form-control"
                                 />
                            </td>
                            <td>
                                <select className="form-control"
                                >
                                    <option value={-1} >All</option>
                                    <option value={0}>Disable</option>
                                    <option value={1}>Active</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>

                        {elmTasks}
                        
                    </tbody>
                </table>
            </div>            
        );
    }
}

const mapStoretoProps = (state) =>
{
    return{
        tasks : state.tasks
    }
}

export default connect(mapStoretoProps,null)(TaskList);
