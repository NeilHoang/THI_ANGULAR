import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() keyword = new EventEmitter();
  @Input() countArr;
  constructor() {
  }

  ngOnInit(): void {
  }

  search(event) {
    const keyword = event.target.value;
    this.keyword.emit(keyword);
  }

}
