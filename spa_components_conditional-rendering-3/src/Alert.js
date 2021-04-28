import React from "react"

const Alert = props => {
	//add the condition inside this function

	console.log(props);
	if(props.show === false){
		return null;
	}
	else {
		return (
			<div className="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	}
	
};

export default Alert;