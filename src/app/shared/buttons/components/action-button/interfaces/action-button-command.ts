export declare interface ActionButtonCommand<Argument = unknown> {
  execute(argument: Argument): void;

  execute(argument?: Argument): void;
}
