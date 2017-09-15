import { Component } from '@angular/core';
import { Product } from '../model/product';
import { FormGroup, FormControl } from '@angular/forms'

@Component({ 
	selector: "Product",
	templateUrl: "./product.component.html",
	styleUrls: [ "./product.component.css" ]
})
export class ProductComponent {
	private products: Product[] = []
	private form: FormGroup = new FormGroup({
		name: new FormControl(),
		price: new FormControl(),
		description: new FormControl()
	})

	constructor() {
		this.products.push({name: "Apple", price: 5000});
		this.products.push({name: "Pear", price: 2500});
	}

	didSubmit() {
		this.products.push(this.form.value);
	}
}