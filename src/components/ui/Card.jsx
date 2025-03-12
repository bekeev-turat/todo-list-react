import React from 'react'
import './style.css'

const Card = ({ children, className }) => {
	return (
		<div className={className ? `${className} card` : 'card'}>
			{children}
		</div>
	)
}

export default Card
