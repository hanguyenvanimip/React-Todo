import React from 'react';

class TaskSortControl extends React.Component {     
    render() { 
        
        return ( 
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20" >                    
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-collapse-down"></span>
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={() =>this.onClick('name',1)}>
                                    <span className="glyphicon glyphicon-sort-by-alphabet"></span>
                                    &nbsp;&nbsp;Name A-Z&nbsp;&nbsp;
                                    <span className="glyphicon glyphicon-ok"></span>
                                
                            </li>
                            <li onClick={() =>this.onClick('name',-1)}>
                                    <span className="glyphicon glyphicon-sort-by-alphabet-alt"></span>
                                    &nbsp;&nbsp;Name Z-A &nbsp;&nbsp;
                                    
                                
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick={() =>this.onClick('status',1)}>
                                Active&nbsp;&nbsp;
                                    
                                
                            </li>
                            <li onClick={() =>this.onClick('status',0)}>
                                Disable&nbsp;&nbsp;
                                    
                                
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default TaskSortControl;
