import '../../styles/common/ToggleButton.scss';
import { useState } from 'react';

const ToggleButton = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
		<div className='toggle-button'>
			<label>
				<strong>{label}</strong>
				<input type="checkbox" defaultChecked={isToggled} onClick={callback} />
				<span></span>
			</label>
		</div>
  );
};

export default ToggleButton;