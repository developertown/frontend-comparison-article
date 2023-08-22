import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  framework = 'angular';
  status = 'ok'

  handleChange(newValue: string, name: 'framework' | 'status') {
    this[name] = newValue;
  }
}
