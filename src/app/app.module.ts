import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio'

import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';
import { HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './shared/form-busca/dropdown-uf/dropdown-uf.component';
import { SeletorPassageiroComponent } from './shared/seletor-passageiro/seletor-passageiro.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { CardRecomendadoComponent } from './pages/busca/card-recomendado/card-recomendado.component';
import { ParadasComponent } from './pages/busca/paradas/paradas.component';
import { PrecosComponent } from './pages/busca/precos/precos.component';
import { CardPassagemComponent } from './pages/busca/card-passagem/card-passagem.component';
import { CompanhiaComponent } from './pages/busca/companhia/companhia.component';
import { PeriodoComponent } from './pages/busca/periodo/periodo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocoesComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    DepoimentosComponent,
    BuscaComponent,
    CardRecomendadoComponent,
    ParadasComponent,
    PrecosComponent,
    CardPassagemComponent,
    CompanhiaComponent,
    PeriodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
