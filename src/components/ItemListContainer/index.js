import './styles.css';

function ItemListContainer({greeting}) {
  return (
    <div className="container">
      <h2 className="text-principal">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;