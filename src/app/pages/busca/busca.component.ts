import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PassagemService } from 'src/app/core/services/passagem.service';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent {
  resultados!: Passagem[];
  conteudoDeBusca!: Params;

  constructor(
    private route: ActivatedRoute,
    private passagemSrv: PassagemService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.conteudoDeBusca = params;
        console.log(this.conteudoDeBusca);
        this.passagemSrv.getPassagens(params).subscribe(
          resultado => {
            this.resultados = resultado.resultado;
            console.log(this.resultados);

          }
        )
      }
    )
  }
}
