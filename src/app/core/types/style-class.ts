export type StyleClass =
  | string
  | string[]
  | Set<string>
  | {
      [className: string]: string;
    };
