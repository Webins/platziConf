import React from 'react';

class BadgeForm extends React.Component{
    // handleClick = e => {
    //     e.preventDefault()
    //     console.log('Button was clicked');
    //   };
    render(){
        return(
            <React.Fragment>
                <form className="pb-5" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValue.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValue.lastName}    
                        />
                    </div>

                    <div className="form-group">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValue.jobTitle}    
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValue.email}    
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValue.twitter}    
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary mb-4">Save</button>
                    {this.props.error &&(
                        <p className="text-danger">{this.props.error.message} </p>
                    )}
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm;