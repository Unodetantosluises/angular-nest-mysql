import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MessageService } from 'primeng/api';
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CatPmibcc } from "../../models";
import { CatPmiBccService } from "../../services/cat-pmibcc.service";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: 'app-cat-pmibcc',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, ButtonModule, TooltipModule],
  providers: [MessageService],
  templateUrl: './cat-pmibcc.component.html',
  styleUrl: './cat-pmibcc.component.css'
})

export class CatPmiBccComponent implements OnInit {
  catPmiBccs: CatPmibcc[] = [];
  loading: boolean = true;

  constructor(
    private catPmiBccService: CatPmiBccService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
      this.loadCatPmiBccs();
  }

  loadCatPmiBccs(): void {
    this.loading = true;
    this.catPmiBccService.getcatpmiBccs().subscribe({
      next: (data) => {
        this.catPmiBccs = data;
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
