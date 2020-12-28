export interface MoocResponseConfig<T> {
  code: number;
  msg?: string;
  data: T | any;
}
