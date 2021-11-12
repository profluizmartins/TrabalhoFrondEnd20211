import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pessoa} from "../../../../model/pessoa.model";
import {PessoaJuridica} from "../../../../model/pessoaJuridica.model";
import {PessoaJuridicaService} from "../../../../service/pessoa-juridica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PessoaService} from "../../../../service/pessoa.service";

@Component({
  selector: 'app-pessoa-juridica-update',
  templateUrl: './../pessoa-juridica-form/pessoa-juridica-form.component.html',
  styleUrls: ['./../pessoa-juridica-form/pessoa-juridica-form.component.css']
})
export class PessoaJuridicaUpdateComponent implements OnInit {
  titulo: string = "Cadastrar Pessoa Juridica";
  formulario:FormGroup;
  public pessoas: Pessoa[] = [];
  pessoaJuridica: PessoaJuridica = {
    pessoa:{
      nome: "",
      endereco: ""
    },
    cnpj: "",
    atividade: ""
  }
  constructor(private route: ActivatedRoute, private service: PessoaJuridicaService, private router: Router, private pessoaService: PessoaService) {
    this.formulario = new FormGroup({
      idPessoaJuridica: new FormControl(null),
      pessoa: new FormControl(null, Validators.required),
      cnpj: new FormControl(null, Validators.required),
      atividade: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.pessoaService.findAll().subscribe(pessoas =>{
      this.pessoas = pessoas;
    })
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(pessoaJuridica =>{
        this.pessoaJuridica = pessoaJuridica;
        this.formulario.setValue({idPessoaJuridica: this.pessoaJuridica.idPessoaJuridica,
          pessoa: this.pessoaJuridica.pessoa,
          cnpj: this.pessoaJuridica.cnpj,
          atividade: this.pessoaJuridica.atividade})
      })
    }
  }

  salvar(): void{
    if (this.formulario.valid) {
      this.service.update(this.formulario.value).subscribe(() => {
          this.service.showMessage("Pessoa juridica atualizada com sucesso");
          this.router.navigate(['/pessoaJuridica']);
        },
        err => {
          this.service.showMessage("Não foi possivel atualizar a pessoa juridica", true)
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
