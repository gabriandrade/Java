import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { map, } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosRef: AngularFireList<any>;
  remove: any;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.produtosRef = this.db.list('produtos/');
   }

  insert(produto: any) {
    // return this.produtosRef.push(produto);
    return this.save(produto, null);
  }

  update(produto: any, key: string) {
    // return this.produtosRef.update(key, produto);
    return this.save(produto, key);
  }

  private save(produto: any, key: string) {
    return new Promise( (resolve, reject) => {
      const produtoRef = {
        nome: produto.nome,
        edicao: produto.edicao,
        ano: produto.ano,
        descricao: produto.descricao,
      };

      if (key) {
        this.produtosRef.update(key, produtoRef)
          .then( () => resolve(key) )
          .catch( () => reject() );
      } else {
        this.produtosRef.push(produtoRef)
          .then( (result: any) => resolve(result.key));
      }

    });
  }

  getAll() {
    return this.produtosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string) {
    const path = 'produtos/' + key;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() });
      })
    );

  }
}
