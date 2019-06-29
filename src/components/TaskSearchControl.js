import React from 'react';

class TaskSearchControl extends React.Component { 
    
    render() { 
        return (
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20">
                <div className="input-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Search" 
                        name="search" 
                        onChange={this.onHanldeChange}
                     />
                    <div className="input-group-btn">
                      <button className="btn btn-primary" type="submit" onClick={this.onSearch}>
                        <span className="glyphicon glyphicon-search" />
                      </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;
