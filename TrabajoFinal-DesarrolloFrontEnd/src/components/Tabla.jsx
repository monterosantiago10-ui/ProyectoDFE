import FilaProducto from './FilaProducto';

function Tabla() 
{
  const productosSimulados = [
    { id: 1, fecha: '2026-06-23', categoria: 'Bebidas', nombre: 'Agua Mineral', precioUnitario: 150, cantidad: 2 },
    { id: 2, fecha: '2026-06-23', categoria: 'Limpieza', nombre: 'Detergente', precioUnitario: 350, cantidad: 1 },
    { id: 3, fecha: '2026-06-23', categoria: 'Comestibles', nombre: 'Fideos 500g', precioUnitario: 120, cantidad: 3 }
  ];

  return (
    <div className="table-container"> 
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidt hhas-background-light">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosSimulados.map((prod) => (
            <FilaProducto key={prod.id} producto={prod} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;