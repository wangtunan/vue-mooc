export interface MoocResponseConfig<T> {
  code: number;
  msg?: string;
  data: T;
}

export interface MoocListResponseConfig<T> {
  list: T[];
  total: number;
}
