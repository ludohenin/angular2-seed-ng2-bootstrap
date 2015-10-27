declare module 'systemjs-builder' {
  class Builder {
    constructor(options: any);
    bundle(source: string, target: string, options?: any): Promise<any>;
  }
  module Builder {}
  export = Builder;
}
