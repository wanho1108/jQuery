const jQuery: JQuery = (selector: string, context: HTMLElement) => {
  return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
  version: "1.0",
};

jQuery.fn.init = function (selector, context) {
  let elements;

  this.context = context instanceof Element ? context : document;

  if (typeof selector === "string") {
    elements = this.context.querySelectorAll(selector);
  }

  if (elements) {
    Array.prototype.forEach.call(elements, (element, i) => (this[i] = element));
    this.length = elements.length;
  }
};

export default jQuery;
