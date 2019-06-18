import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Vacina } from '../models/vacina';
import { VacinaService } from './vacina.service';
import { Animal } from '../models/animal';
import { stringify } from 'querystring';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.scss']
})
export class VacinaComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn', 'idVacina', 'dtVacina', 'peso', 'dosagem', 'aplicador', 'descMedicamento'];
  vacina: Vacina;
  vacinas: any;
  animais: any;
  edit: boolean;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private vacinaService: VacinaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.vacina = new Vacina();
    this.vacinas = new Array<Vacina>();
    this.animais = new Array<Animal>();
    this.dataSource = new MatTableDataSource<Vacina>(this.vacinas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.findAll();

  }

  salvar() {
    this.vacinaService.save(this.vacina).subscribe(response => {
      this.findAll();
    }, error => {
      console.log(error);
    });

  }

  excluir(vacinaId: number) {
    this.vacinaService.remove(vacinaId).subscribe(response => {
      if (response) {
        this.findAll();
      }
    }, error => {
      console.log(error);
    });
  }

  atualizar() {
    this.vacinaService.update(this.vacina).subscribe(response => {
      if (response) {
        this.findAll();
        this.edit = false;
      }
    }, error => {
      console.log(error);
    })
  }

  editar(vacina: any) {
    this.vacina = vacina;
    this.edit = true;
  }
  confirmDialog(id) {
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '550px',
      data: "Deseja realmente excluir a Vacina?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.excluir(id);
      }
    });
  }

  findAll() {
    this.vacinaService.findAllAnimais().subscribe(response => {
      if (response) {
        this.animais = response;
      }
    }, error => {
      console.log(error);
    })
    this.vacinaService.findAll().subscribe(response => {
      if (response) {
        this.loadTable(response);
      }
    }, error => {
      console.log(error);
    })
  }

  loadTable(vacinas: any) {
    this.vacinas = vacinas;
    this.dataSource = new MatTableDataSource<Vacina>(this.vacinas);
  }

}
