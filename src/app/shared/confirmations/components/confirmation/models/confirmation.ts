import { ActionButton } from '@shared/buttons/components/action-button/models';

export class Confirmation {
  public constructor(
    public title: string,
    public body: string,
    public accept: ActionButton,
    public reject: ActionButton,
  ) {}
}
