import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter<Passagem>();
  constructor(
    public formBuscaService: FormBuscaService,
    private router: Router
  ) {}

  buscar() {
    const formBuscaValue = this.formBuscaService.obterFiltros();
    if(formBuscaValue){
      // this.router.navigate(['busca'], { queryParams: formBuscaValue });
      this.realizarBusca.emit(formBuscaValue);
    }
  }
}
