import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from  './app.component';
import { HomeComponent } from "./home/home.component"
import { ProductComponent } from "./product/product.component"
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "home", component: HomeComponent },
	{ path: "product", component: ProductComponent },
	{ path: "shopping-cart", component: ShoppingCartComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
