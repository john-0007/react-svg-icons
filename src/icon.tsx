import React from 'react'
import icons from './icons/sprite.svg'

const icon = ({ name = 'find-my-cat', width = 20, hieght = 20, fill = 'red' }) => {
	return (
		<div>
			<svg className={`icon ${name}`} width={width} height={hieght} fill={fill}>
				<use xlinkHref={`${icons}#icon-i-${name}`} />
			</svg>
		</div>
	)
}

export default icon
