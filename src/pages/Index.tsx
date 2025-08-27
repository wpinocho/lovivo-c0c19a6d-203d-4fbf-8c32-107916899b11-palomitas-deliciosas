import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { toast } from "sonner";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Palomitas Clásicas",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Deliciosas palomitas con mantequilla y sal",
    category: "Clásicas"
  },
  {
    id: 2,
    name: "Palomitas de Caramelo",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=400&h=300&fit=crop",
    description: "Palomitas cubiertas con caramelo dulce",
    category: "Dulces"
  },
  {
    id: 3,
    name: "Palomitas de Queso",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=300&fit=crop",
    description: "Palomitas con sabor a queso cheddar",
    category: "Saladas"
  },
  {
    id: 4,
    name: "Palomitas de Chocolate",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Palomitas bañadas en chocolate negro",
    category: "Dulces"
  },
  {
    id: 5,
    name: "Palomitas Picantes",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=300&fit=crop",
    description: "Palomitas con chile y limón",
    category: "Picantes"
  },
  {
    id: 6,
    name: "Mix Gourmet",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=400&h=300&fit=crop",
    description: "Mezcla de palomitas dulces y saladas",
    category: "Premium"
  }
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("Index component rendered with cart items:", cartItems);

  const addToCart = (product: Product) => {
    console.log("Adding product to cart:", product);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("Updated cart items (existing product):", updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        console.log("Updated cart items (new product):", newItems);
        return newItems;
      }
    });
    toast.success(`${product.name} agregado al carrito`);
  };

  const removeFromCart = (productId: number) => {
    console.log("Removing product from cart:", productId);
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      console.log("Updated cart items after removal:", updatedItems);
      return updatedItems;
    });
    toast.success("Producto eliminado del carrito");
  };

  const updateQuantity = (productId: number, quantity: number) => {
    console.log("Updating quantity for product:", productId, "to:", quantity);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      console.log("Updated cart items after quantity change:", updatedItems);
      return updatedItems;
    });
  };

  const getTotalItems = () => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    console.log("Total items in cart:", total);
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Index;