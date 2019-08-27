import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, onShowOnly, value, text }) => (
	<li className="filter-l-item">
		<div className="filter-block">
			<label className="filter-label">
				<input
					type="checkbox"
					name={label}
					checked={isSelected}
					onChange={onCheckboxChange}
					value={value}
					className="checkbox"
				/>
				<span className="checkbox-text">{text}</span>
			</label>
			{label !== 'all' ? <span className="check-only" onClick={() => onShowOnly(label, value)}>только</span> : null}
		</div>
	</li>
);

export default Checkbox;