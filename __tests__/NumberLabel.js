import React from "react";
import { mount } from "enzyme";
import NumberLabel from "../src/NumberLabel.jsx";

describe("NumberLabel", () => {
  let props;
  let mountedNumberLabel;
  const numberLabel = () => {
    if (!mountedNumberLabel) {
      mountedNumberLabel = mount(
        <NumberLabel {...props} />
      );
    }
    return mountedNumberLabel;
  }

  beforeEach(() => {
    props = {
      number: undefined,
    };
    mountedNumberLabel = undefined;
  });

  it("It always renders a p", () => {
    const ps = numberLabel().find("p");
    expect(ps.length).toBeGreaterThan(0);
  });

  it("It shows 0 if no prop number is provided", () => {
    const ps = numberLabel().find("p");
    expect(ps.first().text()).toEqual('Obtained value: 0');
  });

  it("It shows the prop number if provided", () => {
    props = { number: 0.555 };
    const ps = numberLabel().find("p");
    expect(ps.first().text()).toEqual('Obtained value: 0.555');
  });
});
