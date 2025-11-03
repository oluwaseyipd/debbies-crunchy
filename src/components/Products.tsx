import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productSpicy from "@/assets/product-spicy.jpg";
import productSweet from "@/assets/product-sweet.jpg";
import productSavory from "@/assets/product-savory.jpg";

const products = [
  {
    id: 1,
    name: "Spicy Ginger Heat",
    description: "A bold fusion of fiery ginger and exotic chili spices",
    image: productSpicy,
    tag: "BEST SELLER",
    price: "$12.99",
  },
  {
    id: 2,
    name: "Honey Sesame Bliss",
    description: "Sweet honey glaze with toasted sesame perfection",
    image: productSweet,
    tag: "NEW",
    price: "$11.99",
  },
  {
    id: 3,
    name: "Herb Garden Crunch",
    description: "Savory blend of rosemary, thyme, and garlic",
    image: productSavory,
    tag: "CUSTOMER FAVORITE",
    price: "$12.99",
  },
];

const Products = () => {
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
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-card-foreground">{product.name}</h3>
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
