export declare interface ButtonCommand<Argument = unknown> {
  execute(argument: Argument): void;

  execute(argument?: Argument): void;
}
