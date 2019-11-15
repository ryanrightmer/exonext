import { shallow } from "enzyme";
import React from "react";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('should render without throwing an error', () => {
    const app = shallow(<App data={{ cmsContent: "test" }} />);
    expect(app.find('.hero')).toHaveLength(1);
  });
});