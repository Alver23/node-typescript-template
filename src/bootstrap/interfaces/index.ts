export interface IBootstrap {
  initialize(): Promise<void | string | number | unknown>;
}
