import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  valor: number;
  total: number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  imports: [CommonModule, FormsModule] // Importa FormsModule para usar ngModel
})
export class ProductTableComponent {
  @Input() productos: Producto[] = [];
  productoEnEdicion: number | null = null; // Para controlar qué producto está en edición

  get sumaTotal(): number {
    return this.productos.reduce((sum, producto) => sum + producto.total, 0);
  }

  editarProducto(index: number): void {
    this.productoEnEdicion = index;
  }

  guardarProducto(): void {
    this.productos[this.productoEnEdicion!].total = 
    this.productos[this.productoEnEdicion!].cantidad * this.productos[this.productoEnEdicion!].valor;
    this.productoEnEdicion = null;
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
}
