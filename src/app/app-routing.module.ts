import { ProdutosComponent } from './components/produtos/produtos.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes  = [
  {path: '', component: ContentComponent},
  {path: 'produtos', component: ProdutosComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
