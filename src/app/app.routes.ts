import { Routes } from '@angular/router';
import { CatPmiComponent } from './components/cat-pmi/cat-pmi.component';

export const routes: Routes = [
  {path: '', redirectTo: 'cat-pmi', pathMatch:'full'},
  {path: 'cat-pmi', component: CatPmiComponent},
];
