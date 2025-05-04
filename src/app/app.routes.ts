import { Routes } from '@angular/router';
import { CatPmiComponent } from './components/cat-pmi/cat-pmi.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { pmi2019Component } from './components/pmi2019/pmi2019.component';
import { CatPmiBccComponent } from './components/cat-pmibcc/cat-pmibcc.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'cat-pmi', pathMatch: 'full'},
      {path: 'cat-pmi', component: CatPmiComponent},
      {path: 'pmi2019', component: pmi2019Component},
      {path: 'cat-pmibcc', component: CatPmiBccComponent}
    ]
  }
];
