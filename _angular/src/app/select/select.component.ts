import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})

export class SelectComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() options: string[] = [];
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  selectedValue: string = '';

  ngOnChanges() {
    this.selectedValue = this.value;
  }

  handleChange(e: Event): void {
    const newValue = (e.target as HTMLSelectElement).value;
    this.selectedValue = newValue;
    this.valueChange.emit(newValue);
  }
}
