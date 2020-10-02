import React, { useState } from 'react';

import './ScrollTop.scss';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const ScrollTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 200) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 200) {
			setShowScroll(false);
		}
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<button
			className="scroll-to-top"
			style={{ display: showScroll ? 'block' : 'none' }}
			onClick={() => {
				window.scrollTo(0, 0);
			}}
		>
			<Arrow className="arrow-icon" />
		</button>
	);
};

export default ScrollTop;
