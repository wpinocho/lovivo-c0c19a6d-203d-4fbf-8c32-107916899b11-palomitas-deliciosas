export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          ¡Bienvenido a PopCorn Palace! 🍿
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Las palomitas más deliciosas y frescas, hechas con amor y los mejores ingredientes.
          Desde clásicas hasta gourmet, tenemos el sabor perfecto para ti.
        </p>
        <div className="flex justify-center space-x-8 text-lg">
          <div className="flex items-center">
            <span className="text-2xl mr-2">✨</span>
            <span>Frescas diariamente</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🌟</span>
            <span>Ingredientes premium</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🚚</span>
            <span>Envío gratis</span>
          </div>
        </div>
      </div>
    </section>
  );
};