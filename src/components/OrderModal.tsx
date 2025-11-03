import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  productPrice: string;
}

const OrderModal = ({ open, onOpenChange, productName, productPrice }: OrderModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("12:00");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a delivery date and time.",
        variant: "destructive",
      });
      return;
    }

    const orderDetails = `New Order!\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice: ${productPrice}\nDelivery Date: ${format(date, "PPP")} at ${time}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(orderDetails)}`;
    
    window.open(whatsappUrl, "_blank");
    onOpenChange(false);
    
    toast({
      title: "Order Sent!",
      description: "Your order has been sent via WhatsApp.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Order {productName}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details below to place your order
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground">Delivery Date & Time</Label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "flex-1 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[120px] justify-start text-left font-normal"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {time}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3" align="start">
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button type="submit" variant="cta" className="w-full" size="lg">
            Send Order via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
