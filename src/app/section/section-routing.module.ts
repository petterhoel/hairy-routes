import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section.component';
import {PartOneComponent} from "./part-one.component";
import {PartTwoComponent} from "./part-two.component";
import {PartThreeComponent} from "./part-three.component";

const children: Routes = [
  {
    path: '',
    redirectTo: `/section/42/one`,
    pathMatch: `full`
  },
  {
    path: `:jaja/one`,
    component: PartOneComponent
  },
  {
    path: `:jaja/two`,
    component: PartTwoComponent
  },
  {
    path: `:jaja/three`,
    component: PartThreeComponent
  }
  ];
const routes: Routes = [{
  path: '',
  component: SectionComponent,
  children
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
