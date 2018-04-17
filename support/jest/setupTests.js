import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import "jest-enzyme";
import "jest-extended";
import "./matchers/toBeConstants";
import "./matchers/toImplementHIGInterfaceOf";
import "./matchers/toHavePropTypesAndDocgenInfo";

configure({ adapter: new Adapter() });
