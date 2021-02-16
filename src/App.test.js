
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// configuração de adaptador para enzyme trabalhar com react;
Enzyme.configure({adapter: new Adapter()});

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App/>)

const findByTestAtrr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const simulateDecrement = (button) => {
  button.simulate('Click')
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAtrr(wrapper,"component-app")
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAtrr(wrapper,"increment-button")
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAtrr(wrapper,"counter-display");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAtrr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('clicking on button increments counter display', () => {
  const wrapper = setup();
  const button = findByTestAtrr(wrapper,"increment-button")
  button.simulate('click')
  const count = findByTestAtrr(wrapper, "count").text();
  expect(count).toBe("1");
});

test('clicking on button decrements counter display until 0', () =>{
  const wrapper = setup();
  const button = findByTestAtrr(wrapper, 'decrement-button')
  button.simulate('click')
  const count = findByTestAtrr(wrapper, "decrement").text();
  expect(count).toBe(0)
})
