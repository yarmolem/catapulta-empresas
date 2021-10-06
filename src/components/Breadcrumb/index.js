
const Breadcrumb = ({ route, routeFinal, separador }) => {
  return (
    <div className="bg-grey-light rounded font-sans">
      <ol className="list-reset flex text-grey-dark ">
        <li><a href="#" className="font-bold text-second text-lg">{route}</a></li>
        <li><img className="mx-2 mt-1" src={separador} /></li>
        <li className="font-bold text-gray-200 text-lg">{routeFinal}</li>
      </ol>
    </div>
  )
}

export default Breadcrumb
