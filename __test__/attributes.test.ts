import jQuery from "../src/jQuery";

const createTemplateDOM = () => {
  const templateElement = document.createElement("template");
  templateElement.innerHTML = `<div></div>`;

  return templateElement.content.childNodes[1];
};

describe("[Attributes]", () => {
  describe("addClass", () => {
    test("test", () => {
      expect("test addClass").toBe("test addClass");
    });
  });
});
