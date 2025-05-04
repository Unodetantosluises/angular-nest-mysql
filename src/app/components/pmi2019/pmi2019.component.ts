import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { Pmi2019 } from "../../models";
import { Pmi2019Service } from "../../services/pmi2019.service";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector:'app-pmi2019',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, ButtonModule, TooltipModule],
  providers: [MessageService],
  templateUrl: './pmi2019.component.html',
  styleUrl: './pmi2019.component.css'
})

export class pmi2019Component implements OnInit {
  pmi2019s: Pmi2019[] = [];
  loading: boolean = true;

  constructor(
    private pmi2019service: Pmi2019Service,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
      this.loadPmi2019s();
  }

  loadPmi2019s(): void {
    this.loading = true;
    this.pmi2019service.getPmi2019s().subscribe({
      next:(data) => {
        this.pmi2019s = data;
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
