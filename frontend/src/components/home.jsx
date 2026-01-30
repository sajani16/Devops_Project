function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-orange-500 text-white text-center py-24 px-4">
        <h1 className="text-5xl font-bold mb-4">RecipeHub</h1>
        <p className="text-lg mb-6">
          Simple recipes with real ingredients. No fluff.
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded font-semibold hover:bg-orange-100 transition">
          Explore Recipes
        </button>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Quick Recipes</h3>
          <p className="text-gray-600">
            Cook tasty meals in under 30 minutes.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Healthy Choices</h3>
          <p className="text-gray-600">
            Balanced meals made with fresh ingredients.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Step-by-Step</h3>
          <p className="text-gray-600">
            Clear instructions anyone can follow.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
