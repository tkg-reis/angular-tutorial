import { Component, output } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  standalone: true,
  imports: [],
  template: `
    
  `,
  styleUrl: './mycomp.component.scss'
})
export class MycompComponent {
  onNameChange = output<string>() 

  setNewName(name: string) {
    this.onNameChange.emit(name);
  }
}
