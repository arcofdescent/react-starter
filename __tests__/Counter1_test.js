
jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Counter1 from '../src/components/Counter1/Counter1';

describe('Counter1', () => {
	it('renders text', () => {
		let counter1 = TestUtils.renderIntoDocument(
			<Counter1 
				val={0}
				increment={() => 0}
				decrement={() => 0}
			/>
		);
		let n = ReactDOM.findDOMNode(counter1);

		expect(n.textContent).toMatch(/Component1/);
	});
});


