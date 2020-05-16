declare module "jQuery" {
  global {
    export interface JQuery {
      fn: {
        version: string;
        init?: (selector: string, context: HTMLElement) => void;
      };
      prototype: any;
    }
  }
}
