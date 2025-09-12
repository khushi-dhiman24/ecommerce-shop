import ProductCard from "./ProductCard"; // ✅ correct import

const dummyProducts = [
  { id: 1, name: "T-Shirt", price: 20, image: "/images/tshirt.jpg" },
  { id: 2, name: "Shoes", price: 50, image: "/images/shoes.jpg" },
  { id: 3, name: "Watch", price: 80, image: "/images/watch.jpg" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
