import { ArrowUpDown, Check, Heart, Minus, Plus } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

import { ITEMS } from "@/types/items";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Image } from "../ui/image";
import { Rating, RatingButton } from "../ui/rating";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

type Props = {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
  item: ITEMS;
};

export const ItemViewer = ({ item, ...props }: Props) => {
  return (
    <Dialog>
      <DialogTrigger {...props} />
      <DialogContent
        closeButtonClass="bg-muted-foreground text-muted rounded-full sm:size-10 size-7 sm:[&_svg]:!size-6 flex items-center justify-center cursor-pointer"
        className="md:max-w-[60%] sm:max-w-[80%] p-0 gap-0"
      >
        <ScrollArea className="max-h-[90dvh] overflow-y-auto flex-col flex">
          <div className="md:p-16 p-8 grid gap-4">
            <DialogHeader className="space-y-3 border-b pb-6">
              <DialogTitle className="text-2xl font-semibold text-left">
                {item.name}
              </DialogTitle>
              <div className="flex items-center md:flex-nowrap flex-wrap gap-3 text-xs font-medium text-gray-800">
                <p>
                  <span className="text-muted-foreground">Brands:</span> Frito
                  Lay, Oreo, Welch&apos;s
                </p>
                <p>
                  <span className="text-muted-foreground">Amount:</span> 250
                  grams, 500 Grams, 1 KG
                </p>
                <div className="flex items-center md:gap-1 gap-2 md:border-x px-3">
                  <Rating defaultValue={item.ratings}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton
                        className="[&_svg]:size-3 w-3"
                        key={index}
                      />
                    ))}
                  </Rating>
                  <p className="font-dosis font-semibold uppercase">
                    {item.ratingCount} Review
                  </p>
                </div>
                <p>
                  <span className="text-muted-foreground">SKU:</span> BE4CURT
                </p>
              </div>
            </DialogHeader>

            <div className="lg:grid-cols-2 grid-cols-1 grid items-start py-3 gap-6">
              <div className="flex flex-col items-center gap-y-3 lg:pt-20">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="object-contain"
                  />
                </AspectRatio>
                {/* <section className="grid grid-cols-3 items-center gap-3 justify-center">
                  <Button
                    className="relative px-1 py-2 size-14 overflow-hidden rounded-xs"
                    variant="outline"
                  >
                    <Image
                      src={
                        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg"
                      }
                      alt="item"
                      className="object-cover"
                    />
                  </Button>
                  <Button
                    className="relative px-1 py-2 size-14 overflow-hidden rounded-xs"
                    variant="outline"
                  >
                    <Image
                      src={
                        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg"
                      }
                      alt="item"
                      className="object-cover"
                    />
                  </Button>
                  <Button
                    className="relative px-3 py-2 size-14 overflow-hidden rounded-xs"
                    variant="outline"
                  >
                    <Image
                      src={
                        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg"
                      }
                      alt="item"
                      className="object-cover"
                    />
                  </Button>
                </section> */}
              </div>
              <div className="space-y-6">
                <section className="space-y-2">
                  <p className="text-destructive font-semibold text-[26px] font-dosis">
                    {item.price}
                  </p>
                  <Badge className="font-dosis font-semibold text-xs bg-green-100 text-green-500 rounded-full">
                    IN STOCK
                  </Badge>
                </section>
                <p className="text-[13px] text-muted-foreground">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent
                </p>
                <section className="space-y-2">
                  <h6 className="text-[13px] text-gray-800">Brands</h6>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      Frito Lay
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      Oreo
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      Welch&apos;s
                    </Badge>
                  </div>
                </section>
                <section className="space-y-2">
                  <h6 className="text-[13px] text-gray-800">Amount</h6>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      150 Grams
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      500 Grams
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-xs py-1.5 px-2 font-normal hover:cursor-pointer"
                    >
                      1 KG
                    </Badge>
                  </div>
                </section>
                <section className="flex items-center gap-6">
                  <div className="flex items-center gap-6">
                    <Button
                      variant="secondary"
                      className="p-0 size-12 rounded-full"
                    >
                      <Minus />
                    </Button>
                    <p>1</p>
                    <Button
                      variant="secondary"
                      className="p-0 size-12 rounded-full"
                    >
                      <Plus />
                    </Button>
                  </div>
                  <Button
                    className="rounded-full font-medium text-[13px] text-white"
                    variant="tertiary"
                    size="lg"
                  >
                    Add to cart
                  </Button>
                </section>
                <section className="flex items-center gap-6">
                  <Button variant="outline" className="rounded-full" size="sm">
                    <Heart className="fill-muted-foreground stroke-muted-foreground" />
                    <p className="font-dosis font-semibold text-sm">
                      View wishlist
                    </p>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-muted-foreground"
                  >
                    <ArrowUpDown />
                    <p>Compare</p>
                  </Button>
                </section>
                <section>
                  <ul className="text-xs text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 size-4" /> Type: Organic
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 size-4" /> MFG: Jun
                      4.2021
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 size-4" /> LIFE: 70 days
                    </li>
                  </ul>
                </section>
                <Separator />
                <p className="font-medium text-muted-foreground text-xs">
                  <span className="font-normal">Category:</span> Biscuits &
                  Snacks
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
