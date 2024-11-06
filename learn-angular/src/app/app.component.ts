import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  valor: number;
  total: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, ProductFormComponent, ProductTableComponent]
})
export class AppComponent {
  title = 'learn-angular';
  productos: Producto[] = []; // Define la propiedad 'productos'

  agregarProducto(producto: Producto): void { // Define el método 'agregarProducto'
    this.productos.push(producto);
  }
}
