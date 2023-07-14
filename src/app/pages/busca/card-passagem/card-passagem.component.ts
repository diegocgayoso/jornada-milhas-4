import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-passagem',
  templateUrl: './card-passagem.component.html',
  styleUrls: ['./card-passagem.component.scss']
})
export class CardPassagemComponent {
  @Input() infoPassagem! : Passagem;
  constructor(private ufService: UnidadeFederativaService){}
  ngOnInit(): void {
   this.ufService.listar().subscribe({

   })
  }
}
