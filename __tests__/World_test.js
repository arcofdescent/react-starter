
jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import World from '../src/components/World/World.js';

describe('World', () => {
	it('renders text', () => {
		let world = TestUtils.renderIntoDocument(
			<World />
		);
		let worldNode = ReactDOM.findDOMNode(world);

		expect(worldNode.textContent).toMatch(/Hello/);
	});
});


