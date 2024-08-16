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
        <h2 className="card-title">{product_name}</h2>
      </div>
      <div className="flex justify-between px-3">
        <h1>Brand: {brand}</h1>
        <h1>Price: {price}</h1>
        <h1>Ratings: {ratings}</h1>
      </div>
      <div className="flex justify-between px-3">
        <h1>{category}</h1>
        <h1>{creation_date}</h1>
      </div>
      <div className="text-justify px-3">
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default AllDataCard;
