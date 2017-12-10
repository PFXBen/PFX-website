import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
    it('should render', () => {
        const component = shallow(<LandingPage />);
        expect(component.find('[data-test-id="landing-page"]')).toExist(true);
    });
});
