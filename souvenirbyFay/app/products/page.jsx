
// app/products/page.jsx
export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <h1 className="text-4xl font-serif mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-medium mb-3">Made to Order</h2>
          <p className="text-gray-600">
            Personalized products crafted especially for you.
          </p>
        </div>

        <div className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-medium mb-3">Ready Products</h2>
          <p className="text-gray-600">
            Ready-made designs available for quick delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
