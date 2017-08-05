import React from "react";
import { mount } from "enzyme";
import ValueLabel from "../src/RandomGenerators/ValueLabel.jsx";

describe("ValueLabel", () => {
  let props;
  let mountedValueLabel;
  const valueLabel = () => {
    if (!mountedValueLabel) {
      mountedValueLabel = mount(
        <ValueLabel {...props} />
      );
    }
    return mountedValueLabel;
  }

  beforeEach(() => {
    props = {
      number: undefined,
    };
    mountedValueLabel = undefined;
  });

  it("It always renders a p", () => {
    const ps = valueLabel().find("p");
    expect(ps.length).toBeGreaterThan(0);
  });

  it("It shows '#' if no prop value is provided", () => {
    const ps = valueLabel().find("p");
    expect(ps.first().text()).toEqual('Obtained value: #');
  });

  it("It shows the prop value if provided", () => {
    props = { value: 0.555 };
    const ps = valueLabel().find("p");
    expect(ps.first().text()).toEqual('Obtained value: 0.555');
  });
});
