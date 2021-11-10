import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pessoa} from "../../../../model/pessoa.model";
import {PessoaService} from "../../../../service/pessoa.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './../pessoa-form/pessoa-form.component.html',
  styleUrls: ['./../pessoa-form/pessoa-form.component.css']
})
export class PessoaUpdateComponent implements OnInit {
  titulo: string = "Alterar dados do Hospede";
  formulario:FormGroup;
  pessoa: Pessoa = {
    nome: "",
    endereco: ""
  }
  constructor(private route: ActivatedRoute, private service: PessoaService, private router: Router) {
    this.formulario = new FormGroup({
      idPessoa: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      endereco: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(pessoa =>{
        this.pessoa = pessoa;
        this.formulario.setValue({idPessoa: this.pessoa.idPessoa,
          nome: this.pessoa.nome,
          endereco: this.pessoa.endereco})
      })
    }
  }

  salvar(): void{
    if (this.formulario.valid) {
      this.service.update(this.formulario.value).subscribe(() => {
          this.service.showMessage("Pessoa atualizada com sucesso");
          this.router.navigate(['/pessoa']);
        },
        err => {
          this.service.showMessage("Não foi possivel atualizar a pessoa", true)
        });
    }
    else{
      this.service.showMessage("Preencha corretamente os campos destacados", true)
    }
  }
}
