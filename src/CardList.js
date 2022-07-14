import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
		return (
			<div>
			{
				robots.map((robot, id) => {
					return (
						<Card 
						key={id} 
						id={robots[id].id} 
						name={robots[id].name} 
						email={robots[id].email}/>
						// can use i (index) or id
						// robot can be any word
					);
				})
			}
		</div>
	);
}



export default CardList;