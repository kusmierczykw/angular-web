import { Component, Input } from '@angular/core';
import { Title } from '../../../title/models/title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() public title!: Title;
}
