declare module "*.svg" {
    const content: any;
    export default content;
}

declare type Mixin <T, key extends keyof T> = NonNullable<T[key]>;
