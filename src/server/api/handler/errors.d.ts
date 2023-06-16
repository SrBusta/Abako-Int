export interface InputError {
  message: string;
  path: string;
}

export interface Errors {
  inputError?: InputError[];
  basicError?: string;
}
