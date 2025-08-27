import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log("ProductCard rendered for product:", product.name);
  
  const handleAddToCart = () => {
    console.log("Add to cart clicked for product:", product.name);
    onAddToCart(product);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Clásicas":
        return "bg-blue-100 text-blue-800";
      case "Dulces":
        return "bg-pink-100 text-pink-800";
      case "Saladas":
        return "bg-green-100 text-green-800";
      case "Picantes":
        return "bg-red-100 text-red-800";
      case "Premium":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getCategoryColor(product.category)}`}>
          {product.category}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="text-2xl font-bold text-orange-600">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};