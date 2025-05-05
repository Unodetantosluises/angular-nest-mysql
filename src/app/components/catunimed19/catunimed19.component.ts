import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { TooltipModule } from "primeng/tooltip";
import { Catunimed19 } from "../../models/catunimed19.model";
import { CatUniMed19Service } from "../../services/catunimed19.service";

@Component({
  selector: 'catunimed19',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, ButtonModule, TooltipModule],
  providers: [MessageService],
  templateUrl: './catunimed19.component.html',
  styleUrl: './catunimed19.component.css'
})

export class CatUniMed19 implements OnInit {
  catUniMed19s : Catunimed19[] = [];
  loading: boolean = true;

  constructor(
    private catUniMed19Service: CatUniMed19Service,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
      this.loadCatUniMed19s();
  }

  loadCatUniMed19s(): void {
    this.loading = true;
    this.catUniMed19Service.getCatUniMed19s().subscribe({
      next: (data) => {
        this.catUniMed19s = data;
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
    })
  }

}
