import { BlogList } from "@/components/blog/blog-list";
import { Categoryitems } from "@/components/home/category-items";
import { HomeBanner } from "@/components/home/home-banner";
import { HomeCategoriesCarousel } from "@/components/home/home-categories-carousel";
import { OfferTimer } from "@/components/home/offer-timer";
import { WeekendDiscountBannersOne } from "@/components/home/weekend-discount-banners-one";
import { WeekendDiscountBannersTwo } from "@/components/home/weekend-discount-banners-two";
import { WeekendDiscountedItems } from "@/components/home/weekend-discounted-items";
import { OffersBanner } from "@/components/layout/offers-banner";
import {
  ALCOHOL_CATEGORIES,
  ALCOHOL_CATEGORY_ITEMS,
  FRUITS_CATEGORIES,
  FRUITS_CATEGORY_ITEMS,
} from "@/constants/data";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="pt-8 pb-16 space-y-8">
      <OffersBanner />
      <HomeBanner />
      <HomeCategoriesCarousel />
      <OfferTimer />
      <WeekendDiscountedItems />
      <WeekendDiscountBannersOne />
      <Categoryitems
        categories={FRUITS_CATEGORIES}
        items={FRUITS_CATEGORY_ITEMS}
        imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-17.jpg"
        title="FRUIT & VEGETABLES"
        subtitle="The freshest greengrocer products are waiting for you"
      />
      <WeekendDiscountBannersTwo />
      <Categoryitems
        categories={ALCOHOL_CATEGORIES}
        items={ALCOHOL_CATEGORY_ITEMS}
        title="DRINKS & ALCOHOL"
        subtitle="The freshest greengrocer products are waiting for you"
        imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-16.jpg"
      />
      <BlogList />
    </main>
  );
}
