import { Component, Input } from '@angular/core';
import { Icon } from '@shared/icons/enums/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() public icon!: Icon;
}
