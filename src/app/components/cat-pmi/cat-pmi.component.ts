import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatPmi } from '../../models/cat-pmi.model';
import { CatPmiService } from '../../services/cat-pmi.service';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-cat-pmi',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, ButtonModule, TooltipModule],
  providers: [MessageService],
  templateUrl: './cat-pmi.component.html',
  styleUrl: './cat-pmi.component.css'
})

export class CatPmiComponent implements OnInit {
  catPmis: CatPmi[] = [];
  loading: boolean = true;

  constructor(
    private catPmiService: CatPmiService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
      this.loadCatPmis();
  }

  loadCatPmis(): void {
    this.loading = true;
    this.catPmiService.getCatPmis().subscribe({
      next: (data) => {
        this.catPmis = data;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los datos: ' + error.message
        });
        this.loading = false;
      }
    });
  }
}
