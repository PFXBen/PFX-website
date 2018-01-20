import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
    test('should render', () => {
        const component = shallow(<LandingPage />);
        expect(component.find('[data-test-id="landing-page"]').length).toEqual(1);
    });
});
