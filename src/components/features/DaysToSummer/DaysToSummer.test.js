import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('renders correct classNames', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.hasClass('component')).toBe(true);
  });

  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return new Date(customDate).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDays = component.find(select.title).text();
    expect(renderedDays).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date / during summer', () => {
  checkDescriptionAtDate('2020-06-21', 'summer time :-)');
  checkDescriptionAtDate('2020-08-20', 'summer time :-)');
  checkDescriptionAtDate('2020-09-22', 'summer time :-)');
});

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020-06-20', 'only 1 day to summer!');
  checkDescriptionAtDate('2020-06-01', '20 days to summer...');
  checkDescriptionAtDate('2020-05-01', '51 days to summer...');
});