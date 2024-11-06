import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  valor: number;
  total: number;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  imports: [FormsModule] // Asegúrate de importar FormsModule
})
export class ProductFormComponent {
  @Output() productoAgregado = new EventEmitter<Producto>();
  nuevoProducto: Partial<Producto> = {
    nombre: '',
    cantidad: 0,
    valor: 0
  };

  agregarProducto(): void {
    const productoConId: Producto = {
      ...this.nuevoProducto,
      id: Date.now(),
      total: (this.nuevoProducto.cantidad || 0) * (this.nuevoProducto.valor || 0)
    } as Producto;
    this.productoAgregado.emit(productoConId);
    this.nuevoProducto = { nombre: '', cantidad: 0, valor: 0 };
  }
}
