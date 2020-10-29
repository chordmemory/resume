declare module '*.svg' {
  const content: unknown;
  export default content;
}

declare type Mixin<T, key extends keyof T> = NonNullable<T[key]>;
