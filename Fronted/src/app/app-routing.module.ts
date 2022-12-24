import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./core/layout/layout.component";

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: 'auth',
          loadChildren: () =>
            import('./modules/auth/auth.module').then(m => m.AuthModule)
        },
        {
          path: 'home',
          loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'adopter',
          loadChildren: () =>
            import('./modules/adopter/adopter.module').then(m => m.AdopterModule)
        },
        {
          path: 'admin',
          loadChildren: () =>
            import('./modules/admin/admin.module').then(m => m.AdminModule)
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
