import React from 'react';

export default function ClickMe(props) {
	return (
		<div num={props.num} className="draggable was-left">
			Item {props.num}
		</div>
	);
}
