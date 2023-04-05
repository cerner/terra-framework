interface PropertiesObject {
    [key: string | symbol]: PropertyDescriptor;
}
export default function WebDriver(options: Record<string, any>, modifier?: Function, propertiesObject?: PropertiesObject): {
    (this: void, sessionId: string, commandWrapper?: Function): any;
    /**
     * Enhance monad prototype with function
     * @param  {String}   name          name of function to attach to prototype
     * @param  {Function} func          function to be added to prototype
     * @param  {Object}   proto         prototype to add function to (optional)
     * @param  {Function} origCommand   original command to be passed to custom command as first argument
     */
    lift(name: string, func: Function, proto: Record<string, any>, origCommand?: Function): void;
};
export {};
//# sourceMappingURL=monad.d.ts.map