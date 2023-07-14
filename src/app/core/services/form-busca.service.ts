import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Passagem } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);
    this.formBusca = new FormGroup({
      somenteIda,
      adultos: new FormControl(3),
      criancas: new FormControl(0),
      bebes: new FormControl(1),
      tipo: new FormControl('Executiva'),
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      precoMin: new FormControl(null),
      precoMax: new FormControl(null),
      conexoes: new FormControl(null),
      tempoVoo: new FormControl(null),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      companhiaId: new FormControl(null),
      pagina: new FormControl(1),
      porPagina: new FormControl(25),
    });

    somenteIda.valueChanges.subscribe((somenteIda) => {
      if (somenteIda) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity;
    });
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${
        criancas > 1 ? 's' : ''
      }`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${
        bebes > 1 ? 's' : ''
      }`;
    }

    return descricao;
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem,
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      });
      console.log('Tipo de passagem alterado para: ', tipo);
    }
  }

  obterFiltros(): Passagem | null {
    if (!this.formBusca.valid) {
      console.error('Invalido');
      return null;
    }
    const params = {
      somenteIda: this.obterControle('somenteIda').value,
      passageirosAdultos: this.obterControle('adultos').value,
      passageirosCriancas: this.obterControle('criancas').value,
      passageirosBebes: this.obterControle('bebes').value,
      tipo: this.obterControle('tipo').value,
      origemId: this.obterControle('origem').value.id,
      destinoId: this.obterControle('destino').value.id,
      precoMin:  this.obterControle('precoMin').value,
      precoMax:  this.obterControle('precoMax').value,
      conexoes:  this.obterControle('conexoes').value,
      tempoVoo:  this.obterControle('tempoVoo').value,
      dataIda: this.obterControle('dataIda').value.toISOString(),
      dataVolta: this.obterControle('dataVolta').value
        ? this.obterControle('dataVolta').value.toISOString()
        : null,
      companhiaId:  this.obterControle('companhiaId').value,
      pagina: this.obterControle('pagina').value,
      porPagina: this.obterControle('porPagina').value,
    };
    return params;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }
}
