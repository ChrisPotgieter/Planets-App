import './App.css';
import Card from './core/services/ui/Card';
import React, { useState } from 'react';
import { Api } from './core/services/Api';
import styled from 'styled-components';
import img1 from "./images/Mars.jpg";

const options = [ 'Neptune', 'Mars', 'moon' ];

function App () {
	const CardContainer = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	`;

	const Separator = styled.span`
		margin-left: 10px;
		margin-right: 10px;
	`;

	const Main = styled('div')`
  font-family: sans-serif;
  height: 10vh;
`;

	const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
`;

	const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

	const DropDownListContainer = styled('div')``;

	const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

	const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
`;

	const [ isOpen, setIsOpen ] = useState(false);
	const [ selectedOption, setSelectedOption ] = useState(null);
	const [ currentData, setCurrentData ] = useState([]);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
		console.log(selectedOption);
		Api(value).then((data) => {
			setCurrentData(data[0]);
			console.log(data[0]);
		});
	};
/*
host_star_mass
: 
1
host_star_temperature
: 
6000
mass
: 
0.000338
name
: 
"Mars"
period
: 
687
radius
: 
0.0488
semi_major_axis
: 
1.542
temperature
: 
210
*/
	return (
		<div className='App'>
		<div>
				<Main>
					<DropDownContainer>
						<DropDownHeader onClick={toggling}>{selectedOption || 'Select planets'}</DropDownHeader>
						{isOpen && (
							<DropDownListContainer>
								<DropDownList>
									{options.map((option) => (
										<ListItem onClick={onOptionClicked(option)} key={Math.random()}>
											{option}
										</ListItem>
									))}
								</DropDownList>
							</DropDownListContainer>
						)}
					</DropDownContainer>
				</Main>

				
			</div>
      
      <CardContainer>
					<Card title={currentData.name} imgUrl={"Mars.jpg"} planetData={currentData}/>
					<Separator />
				</CardContainer>
		</div>
	);
}

export default App;
