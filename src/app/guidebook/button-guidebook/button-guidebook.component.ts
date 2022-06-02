import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

declare type Button = {
  theme: ThemePalette;
  disabled: boolean;
  label: string;
};

@Component({
  selector: 'app-button-guidebook',
  templateUrl: './button-guidebook.component.html',
  styleUrls: ['./button-guidebook.component.scss'],
})
export class ButtonGuidebookComponent {
  public buttons: Button[] = [
    {
      theme: 'primary',
      disabled: false,
      label: 'Primary',
    },
    {
      theme: 'accent',
      disabled: false,
      label: 'Accent',
    },
    {
      theme: 'warn',
      disabled: false,
      label: 'Warn',
    },
    {
      theme: 'primary',
      disabled: true,
      label: 'Primary disabled',
    },
    {
      theme: 'accent',
      disabled: true,
      label: 'Disabled accent',
    },
    {
      theme: 'warn',
      disabled: true,
      label: 'Disabled warn',
    },
  ];
}
