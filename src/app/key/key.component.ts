import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {

  @Input() key: string = '';
  @Input() status?: string = '';
  @Input() user?: string = '';
  @Input() latitud?: string = '';
  @Input() longitud?: string = '';
  @Input() column?: string = '';
  @Input() bigScreen: boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
