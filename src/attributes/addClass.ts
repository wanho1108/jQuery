export default function (className: string): JQuery {
  const length = this.length;
  const classNames: string[] = className.split(" ");

  for (let i = 0; i < length; i++) {
    classNames.map((addClassName) => {
      this[0].classList.add(addClassName);
    });
  }

  return this;
}
