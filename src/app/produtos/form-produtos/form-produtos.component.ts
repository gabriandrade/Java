import { ProdutosService } from './../shared/produtos.service';
import { Component, OnInit } from '@angular/core';
// import { CategoriasService } from '../../categorias/shared/categorias.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  formProduto: FormGroup;
  key: string;
  categorias: Observable<any[]>;

  private file: File = null;
  imgUrl = '';
  filePath = '';
  result: void;

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                // private categoriasService: CategoriasService,
                private produtosService: ProdutosService,
                private toastr: ToastrService,
                private router: Router
      ) { }

    ngOnInit() {
      this.criarFormulario();
      // this.categorias = this.categoriasService.getAll();

      this.key = this.route.snapshot.paramMap.get('key');
      if (this.key) {
        const subscribe = this.produtosService.getByKey(this.key)
          .subscribe((produtos: any) => {

            subscribe.unsubscribe();
            this.formProduto.setValue({
              nome: produtos.nome,
              edicao: produtos.edicao,
              ano: produtos.ano,
              descricao: produtos.descricao,
              img: ''
            });

            this.imgUrl = produtos.img || '';
            this.filePath = produtos.filePath || '';

          });
      }

    }

    get nome() { return this.formProduto.get('nome'); }
    get ano() { return this.formProduto.get('ano'); }
    get edicao() { return this.formProduto.get('edicao'); }
    get descricao() { return this.formProduto.get('descricao'); }


    criarFormulario() {
      this.key = null;
      this.formProduto = this.formBuilder.group({
        nome: ['', Validators.required],
        edicao: ['', Validators.required],
        ano: [''],
        descricao: [''],
        img: ['']
      });

      this.file = null;
      this.imgUrl = '';
      this.filePath = '';

    }

    upload(event: any) {
      if (event.target.files.length) {
        this.file = event.target.files[0];
      } else {
        this.file = null;
      }
    }

    removerImg() {
      this.produtosService.removerImg(this.filePath, this.key);
      this.imgUrl = '';
      this.filePath = '';
    }

    // setCategoriaNome(categorias: any) {
    //   if (categorias && this.formProduto.value.categoriaKey) {
    //     const categoriaNome = categorias[0].text;
    //     this.nome.setValue(categoriaNome);
    //     this.formProduto.value.categoriaNome.setValue();
    //   } else {
    //     this.nome.setValue('');
    //   }
    // }

    onSubmit() {
      if (this.formProduto.valid) {
        let result: Promise<{}>;

        if (this.key) {
          result = this.produtosService.update(this.formProduto.value, this.key);
        } else {
          result = this.produtosService.insert(this.formProduto.value);
        }

        if (this.file) {
          result.then( (key: string) => {
            this.produtosService.uploadImg(key, this.file);
            this.criarFormulario();
          });
        } else {
          this.criarFormulario();
        }

        this.router.navigate(['produtos']);
        this.toastr.success('Jornal salvo com sucesso!!!');
      }
    }

}
