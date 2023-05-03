import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DropDownOptions } from '../../interfaces/interfaces';


@Component({
  selector: 'app-html-select',
  templateUrl: './html-select.component.html',
  styleUrls: ['./html-select.component.scss'],
  host: {
    '(document:keyUp)': 'handleKeyboardEvents($event)'
  }
})
export class HtmlSelectComponent {
  adults = 0;
  child = 0;
  infant = 0;

  result: DropDownOptions[] = []
  textPassengers = 'test text'

  @Input() options!: DropDownOptions[];
  @Input() title = '';
  @Output() currentValueChange = new EventEmitter();

  public dropdownOpen = false;
  public get dropdownElement(): Element {
    return this.elem.nativeElement.querySelector('.dropdown-list')
  }

  constructor(
      private elem: ElementRef
  ) { }

  ngOnInit(): void {
    this.textPassengers = this.writeLabelText(this.options)
  }

  handleKeyboardEvents($event: KeyboardEvent) {
      if (this.dropdownOpen) {
          $event.preventDefault();
      } else {
          return;
      }
      if ($event.code === 'Escape') {
          this.closeDropdown();
      }
  }

  closeDropdown() {
      this.dropdownElement.setAttribute('aria-expanded', "false");
      this.dropdownOpen = false;
      this.writeResult()
  }

  toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
      if(!this.dropdownOpen) {
        this.writeResult()
      }
  }

  mouseClickOutSide() {
    if(this.dropdownOpen) {
      this.dropdownOpen = false
      this.writeResult()
    }
  }

  writeLabelText(arr: DropDownOptions[]) {
    let str = ''
    arr.forEach(item=> {
      str += `${item.count} ${item.name}, `
    })
    return str
  }

  writeResult() {
    this.result = [
      {
        name: 'Adults',
        count: this.adults
      },
      {
        name: 'Child',
        count: this.child
      },
      {
        name: 'Infant',
        count: this.infant
      }
    ]
    this.textPassengers = this.writeLabelText(this.result)
    this.currentValueChange.emit(this.result)
  }
}
