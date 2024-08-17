const AllDataCard = ({singleData}) => {
  const {
    product_name,
    product_image,
    brand,
    description,
    price,
    category,
    ratings,
    creation_date,
  } = singleData || {};
  return (
    <div className="card bg-base-100 w-full shadow-xl space-y-2">
      <figure className="px-4 pt-10">
        <img
          src={product_image}
          alt="image"
          className="w-full rounded-xl h-72"
        />
      </figure>
      <div className="text-center mx-auto">
        <h2 className="card-title lg:text-3xl text-green-500">
          {product_name}
        </h2>
      </div>
      <div className="flex justify-between px-3">
        <h1>
          <span className="font-bold">Brand:</span> {brand}
        </h1>
        <h1>
          <span className="font-bold">Price:</span>{" "}
          <span className="text-green-500 font-bold">${price}</span>
        </h1>
        <h1>
          <span className="font-bold">Ratings:</span>{" "}
          <span className="text-red-600 font-semibold">{ratings}</span>
        </h1>
      </div>
      <div className="flex justify-between px-3">
        <h1>
          <span className="font-bold">Category:</span> {category}
        </h1>
        <h1>
          <span className="font-bold">Date:</span> {creation_date}
        </h1>
      </div>
      <div className="text-justify px-3">
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default AllDataCard;
