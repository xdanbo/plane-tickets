import React, { Component } from 'react';

import Checkbox from '../checkbox';
import { connect } from 'react-redux';
import { ticketsFiltered } from '../../actions';

import './filter.scss';

const OPTIONS = [
	{ label: 'all', text: 'Все', value: '' },
	{ label: '_0', text: 'Без пересадок', value: 0 },
	{ label: '_1', text: '1 пересадка', value: 1 },
	{ label: '_2', text: '2 пересадки', value: 2 },
	{ label: '_3', text: '3 пересадки', value: 3 }
];

class Filter extends Component {

	state = {
		checkboxes: OPTIONS.reduce(
			(options, option) => ({
				...options,
				[option.label]: true
			}),
			{}
		),
		filter: []
	}

	componentDidUpdate(prevProps, prevState) {
		const { filter } = this.state;
		if (prevState.filter !== filter) {
			if (filter.length === 0) {
				this.setState(prevState => ({
					checkboxes: {
						...prevState.checkboxes,
						'all': true
					}
				}));
			}
		}
	}

	createCheckbox = option => (
		<Checkbox
			label={option.label}
			isSelected={this.state.checkboxes[option.label]}
			onCheckboxChange={this.onCheckboxChange}
			value={option.value}
			text={option.text}
			onShowOnly={this.onShowOnly}
			key={option.label}
		/>
	);

	createCheckboxes = () => OPTIONS.map(this.createCheckbox);

	selectAllCheckboxes = isSelected => {
		Object.keys(this.state.checkboxes).forEach(checkbox => {
			this.setState(prevState => ({
				checkboxes: {
					...prevState.checkboxes,
					[checkbox]: isSelected
				}
			}));
		});
	};

	onCheckboxChange = (e) => {
		const { filter, checkboxes } = this.state;

		const { name, value } = e.target;

		this.setState(prevState => ({
			checkboxes: {
				...prevState.checkboxes,
				[name]: !prevState.checkboxes[name]
			}
		}));

		if (checkboxes[name] === true) {
			if (name !== 'all') {
				this.setState(prevState => ({
					checkboxes: {
						...prevState.checkboxes,
						'all': false
					},
					filter: [...prevState.filter, +value]
				}));

			} else {
				this.selectAllCheckboxes(false);
				this.setState({
					filter: OPTIONS.filter(check => check.value !== '').map(check => check.value)
				});
			}
		} else {
			if (name !== 'all') {
				const newArray = filter.filter(e => e !== +value);

				this.setState({
					filter: newArray
				});
			} else {
				this.selectAllCheckboxes(true);
				this.setState({
					filter: []
				});
			}
		}
	}

	onShowOnly = (name, value) => {
		this.selectAllCheckboxes(false);
		this.setState(prevState => ({
			checkboxes: {
				...prevState.checkboxes,
				[name]: true
			},
			filter: OPTIONS
				.filter(check => check.value !== +value && check.value !== '')
				.map(check => check.value)
		}));
	}

	render() {

		this.props.ticketsFiltered(this.state.filter);

		return (
			<div className="checkbox-group">
				<div className="hline hl-size-1 hline-v1-mod">Количество пересадок</div>
				<ul className="filter-list">
					{this.createCheckboxes()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ filterArr }) => {
	return { filterArr }
};

const mapDispatchToProps = {
	ticketsFiltered
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);