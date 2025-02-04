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

  @Input() positions?: popUpInterface;
  @Input() conteudo?: string;

  left:boolean = false;
  right:boolean = true;
  bottom:boolean = true;
  top:boolean = true;

  constructor()
  {
    if(!this.conteudo)
      this.conteudo ="conteudo da modal!"
  }
}
