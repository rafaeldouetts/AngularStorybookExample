import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { popUpInterface } from './interfaces/Ipop-up.interfaces';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {

  // @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-left';

  // @Input() positions?: popUpInterface;
  @Input() type: popUpInterface | undefined;
  @Input() conteudo?: string;

  // left:boolean = true;
  // right:boolean = false;
  // bottom:boolean = true;
  // top:boolean = true;

  constructor()
  {
    if(!this.conteudo)
      this.conteudo ="conteudo da modal!"
  }

  getModalClass() {
    switch (this.type) {
      case popUpInterface.alert:
        return 'alert';
      case popUpInterface.confirm:
        return 'confirm';
      case popUpInterface.info:
        return 'info';
      case popUpInterface.danger:
        return 'danger';
      default:
        return '';
    }
  }
}
