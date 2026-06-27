function FilaProducto({ producto }) 
{
  const { fecha, categoria, nombre, precioUnitario, cantidad } = producto;
  const total = precioUnitario * cantidad;

  return (
    <tr>
      <td>{fecha}</td>
      <td>{categoria}</td>
      <td>{nombre}</td>
      <td>$ {precioUnitario}</td>
      <td>{cantidad}</td>
      <td>$ {total}</td>
      <td>
        <div className="buttons text-center">
          <button className="button is-warning is-small">
            Editar
          </button>
          <button className="button is-danger is-small">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default FilaProducto;