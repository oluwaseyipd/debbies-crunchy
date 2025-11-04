import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.jpg";
import OrderModal from "./OrderModal";

const products = [
  {
    id: 1,
    name: "Mini Plantain Chips",
    description: "Crispy, golden plantain slices with a hint of natural sweetness. A wholesome, satisfying crunch.",
    image: product1, 
    tag: "BEST SELLER",
    price: "₦100",
  },
  {
    id: 2,
    name: "Medium Plantain Chips",
    description: "Perfectly ripened plantains, thinly sliced and fried to a delightful crisp. Irresistibly savory.",
    image: product2,
    tag: "NEW",
    price: "₦1000",
  },
  {
    id: 3,
    name: "Big Size Plantain Chips",
    description: "Generous cuts of premium plantains, achieving a rich, hearty crunch with every golden bite.",
    image: product3, 
    tag: "CUSTOMER FAVORITE",
    price: "₦4000",
  },
  {
    id: 4,
    name: "Mini Potato Chips",
    description: "Thinly sliced potatoes, lightly seasoned and fried to a classic, airy crispness. Pure, simple delight.",
    image: product4, 
    tag: "CLASSIC", 
    price: "₦100",
  },
  {
    id: 5,
    name: "Big Size Potato Chips",
    description: "Hearty, golden potato chips with a satisfying crunch. The perfect staple for any snack moment.",
    image: product5, 
    tag: "GO-TO SNACK", 
    price: "₦4000",
  },
];
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (name: string, price: string) => {
    setSelectedProduct({ name, price });
    setIsModalOpen(true);
  };

  return (
    <section id="flavors" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Signature Flavors
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each flavor crafted with premium ingredients and unique spice blends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold px-3 py-1 shadow-lg">
                    {product.tag}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-card-foreground">{product.name}</h3>
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={() => handleOrderClick(product.name, product.price)}
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <OrderModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
        />
      )}
    </section>
  );
};

export default Products;
