const jQuery: JQuery = (selector: string, context: HTMLElement) => {
  return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
  version: "1.0",
};

jQuery.fn.init = function (selector, context) {
  if (!selector) {
    return this;
  }

  if (typeof selector === "string") {
    let elements: NodeList;
    this.context = context instanceof Element ? context : document;
    elements = this.context.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, (element, i) => (this[i] = element));
    this.length = elements.length;
  } else if (Array.isArray(selector)) {
    selector.forEach((item, i) => (this[i] = item));
    this.length = selector.length;
  } else if (typeof selector === "object") {
    this[0] = selector;
    this.length = 1;
  }
};

jQuery.fn.init.prototype = jQuery.fn;

jQuery.fn.extends = function (methods) {
  jQuery.prototype = Object.assign(jQuery.prototype, methods);
};

export default jQuery;
