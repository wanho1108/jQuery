export default function (className: string) {
  const $this = this;
  const length = $this.length;

  for (let i = 0; i < length; i++) {
    $this[0].classList.add(className);
  }
}
