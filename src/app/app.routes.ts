import { Routes } from '@angular/router';
import { ExtratoComponent } from './pages/extrato/extrato.component';

export const routes: Routes = [
  { path: '', component: ExtratoComponent },
  
  { path: '**', redirectTo: '' }
];
