import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends React.Component { 
    render() {        

        var {isDisplayForm} = this.props;
        return (
            <div className="container">                
                <div className="text-center">
                    <h1>Task Manager</h1>
                </div>
                <div className="row">
                    {isDisplayForm===true?<TaskForm isDisplayForm = {isDisplayForm}/>:''}
                    <div className={isDisplayForm===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8" 
                                :"col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
                        <TaskControl />
                        <TaskList />
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state)=>
{
    return {
        isDisplayForm : state.isDisplayForm
    }
}

const mapDispatchToProps =(dispatch,props) =>
{
    return {
        onToogleForm :() =>
        {
            dispatch(actions.toogleForm());
        },
        onOpenForm :() =>
        {
            dispatch(actions.openForm());
        },
        onCloseForm :() =>
        {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
