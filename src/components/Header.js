import React from 'react';

export default function Header(props) {
	return (
		<header style={props.style} id={props.id} className="HeaderText">
			{props.content}
		</header>
	);
}
