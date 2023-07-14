import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PassagemService } from 'src/app/core/services/passagem.service';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent {
  resultados: Passagem[] = [];
  conteudoDeBusca!: Params;

  constructor(
    private route: ActivatedRoute,
    private passagemSrv: PassagemService,
    private router: Router,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(
    //   params => {
    //     this.conteudoDeBusca = params;
    //     console.log(params);
    //     this.passagemSrv.getPassagens(params).subscribe(
    //       resultado => {
    //         this.resultados = resultado.resultado;
    //         if(this.resultados){
    //           console.log(this.resultados);
    //         }else{
    //           console.log(this.resultados);
    //         }
    //       }
    //     )
    //   }
    // )
    this.atualizarPassagens();
  }

  atualizarPassagens() {
    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: ev,
    //    queryParamsHandling: 'merge'
    // })
    const filtros = this.formBuscaService.obterFiltros();
    this.passagemSrv.getPassagens(filtros).subscribe((resultado) => {
      this.resultados = resultado.resultado;
      if (this.resultados) {
        console.log(this.resultados);
      } else {
        console.log(this.resultados);
      }
    });
  }
}
