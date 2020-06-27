declare module "jQuery" {
  global {
    export interface JQuery {
      fn: {
        version: string;
        init?: (
          selector: string | object | undefined,
          context: HTMLElement | undefined
        ) => void;
        extends?: (methods: object) => void;
      };
      prototype: any;
    }
  }
}
