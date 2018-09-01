// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("should return true for an xml with multiple top level nodes, each with a child node different", () => {
    expect(isValidXML("<a><d/></a><b><d/></b><c><d/></c>")).toBeTruthy();
  });

  it("should return true for an xml with multiple top level nodes, each with child nodes with unique tags", () => {
    expect(
      isValidXML("<a><d/><e/></a><b><e/><d/></b><c><d/><e/></c>")
    ).toBeTruthy();
  });

  it("should return true for an xml with non-consecutive node with same tag", () => {
    expect(isValidXML("<a/><b/><a/><b/>")).toBeTruthy();
  });

  it("should return false for an empty string", () => {
    expect(isValidXML("")).toBeFalsy();
  });

  it("should return false for an random string", () => {
    expect(isValidXML("dsaf{{L<PL<KLLL@!#12")).toBeFalsy();
  });

  it("should return false for no input", () => {
    expect(isValidXML()).toBeFalsy();
  });

  it("should return false for integer input", () => {
    expect(isValidXML(123)).toBeFalsy();
  });

  it("should return false for float input", () => {
    expect(isValidXML(123.1)).toBeFalsy();
  });

  it("should return false for null input", () => {
    expect(isValidXML(null)).toBeFalsy();
  });

  it("should return false for undefined input", () => {
    expect(isValidXML(undefined)).toBeFalsy();
  });

  it("should return false for boolean input", () => {
    expect(isValidXML(true)).toBeFalsy();
    expect(isValidXML(false)).toBeFalsy();
  });

  it("should return false for object input", () => {
    expect(isValidXML({})).toBeFalsy();
  });

  it("should return false for array input", () => {
    expect(isValidXML([])).toBeFalsy();
    expect(isValidXML([1, 3, 3])).toBeFalsy();
    expect(isValidXML(["a", "b", "c"])).toBeFalsy();
    expect(isValidXML(["<a/>", "<b/>", "<c/>"])).toBeFalsy();
  });

  it("should return false for an xml with child nodes, one of which has same tag as its parent", () => {
    expect(isValidXML("<a><d/><a/></a>")).toBeFalsy();
  });

  it("should return false for an xml with one of the non-first top level node with depth more than 2", () => {
    expect(isValidXML("<b/><a><b><c/><d/></b></b><c/>")).toBeFalsy();
  });
});
