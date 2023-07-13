import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  constructor(
    public formBuscaService: FormBuscaService,
    private router: Router
  ) {}

  buscar() {
    if (this.formBuscaService.formBusca.valid) {
      const formBuscaValue: Passagem = this.formBuscaService.formBusca.value;
      this.router.navigate(['busca'], { queryParams: formBuscaValue });
      // console.log(formBuscaValue);
    } else {
      console.error('Form invalido');
    }
  }
}
