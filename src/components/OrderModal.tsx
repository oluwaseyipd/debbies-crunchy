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
import { format, startOfDay, isBefore } from "date-fns";
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
  const [period, setPeriod] = useState<"AM" | "PM">("PM");

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

    const orderDetails = `New Order!\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice: ${productPrice}\nDelivery Date: ${format(date, "PPP")} at ${time} ${period}`;
    const whatsappUrl = `https://wa.me/2347089855253?text=${encodeURIComponent(orderDetails)}`;
    
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
                    disabled={(d) => isBefore(d, startOfDay(new Date()))}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[140px] justify-start text-left font-normal"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {time} {period}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3" align="start">
                  <div className="space-y-3">
                    <Label htmlFor="time">Time</Label>
                    <div className="flex gap-2">
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="01:00">01:00</option>
                        <option value="01:30">01:30</option>
                        <option value="02:00">02:00</option>
                        <option value="02:30">02:30</option>
                        <option value="03:00">03:00</option>
                        <option value="03:30">03:30</option>
                        <option value="04:00">04:00</option>
                        <option value="04:30">04:30</option>
                        <option value="05:00">05:00</option>
                        <option value="05:30">05:30</option>
                        <option value="06:00">06:00</option>
                        <option value="06:30">06:30</option>
                        <option value="07:00">07:00</option>
                        <option value="07:30">07:30</option>
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                      </select>
                      <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value as "AM" | "PM")}
                        className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
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
