import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassagemService } from 'src/app/core/services/passagem.service';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent {
  resultados!: Passagem[];

  constructor(
    private route: ActivatedRoute,
    private passagemSrv: PassagemService
  ) {}

  ngOnInit() {
    this.passagemSrv.getPassagens({}).subscribe((resultado) => {
      this.resultados = resultado.resultado;
    });
  }
}
