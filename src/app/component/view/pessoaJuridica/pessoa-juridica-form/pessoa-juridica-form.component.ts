import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PessoaJuridicaService} from "../../../../service/pessoa-juridica.service";
import {PessoaService} from "../../../../service/pessoa.service";
import {Router} from "@angular/router";
import {Pessoa} from "../../../../model/pessoa.model";

@Component({
  selector: 'app-pessoa-juridica-form',
  templateUrl: './pessoa-juridica-form.component.html',
  styleUrls: ['./pessoa-juridica-form.component.css']
})
export class PessoaJuridicaFormComponent implements OnInit {
  titulo: string = "Cadastrar Pessoa Juridica";
  formulario:FormGroup;
  public pessoas: Pessoa[] = [];
  constructor(private service: PessoaJuridicaService, private router: Router, private pessoaService: PessoaService) {
    this.formulario = new FormGroup({
      pessoa: new FormControl(null, Validators.required),
      cnpj: new FormControl(null, Validators.required),
      atividade: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.pessoaService.findAll().subscribe(pessoas =>{
      this.pessoas = pessoas;
    })
  }
  salvar(): void{
    if (this.formulario.valid) {
      this.service.create(this.formulario.value).subscribe(() => {
          this.service.showMessage("Pessoa juridica cadastrada com sucesso");
          this.router.navigate(['/pessoaJuridica']);
        },
        err => {
          this.service.showMessage("Não foi possivel cadastrar a pessoa juridica", true)
        });
    }
    else{
      this.service.showMessage("Preencha corretamente os campos destacados", true)
    }
  }

  comparePessoa(object1: Pessoa, object2: Pessoa){
    return object1 && object2 && object1.idPessoa == object2.idPessoa;
  }
}
