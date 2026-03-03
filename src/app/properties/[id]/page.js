import { properties } from "@/app/data/properties";

export default async function PropertyPage({ params }) {
  const { id } = await params;

  const property = properties.find((p) => String(p.id) === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <h1>{property.title}</h1>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
    </div>
  );
}
