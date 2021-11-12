import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PessoaService} from "../../../../service/pessoa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  titulo: string = "Cadastrar Pessoa";
  formulario:FormGroup;
  constructor(private service: PessoaService, private router: Router) {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      endereco: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  salvar(): void{
    if (this.formulario.valid) {
      this.service.create(this.formulario.value).subscribe(() => {
          this.service.showMessage("Pessoa cadastrada com sucesso");
          this.router.navigate(['/pessoa']);
        },
        err => {
          this.service.showMessage("Não foi possivel cadastrar a pessoa", true)
        });
    }
    else{
      this.service.showMessage("Preencha corretamente os campos destacados", true)
    }
  }
}
