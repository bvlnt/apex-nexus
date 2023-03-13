interface Pricing {
  ref: string;
  quantity: number;
}

interface Content {
  ref: string;
  name: string;
  quantity: number;
}

export interface StoreItem {
  title: string;
  desc: string;
  tag: string;
  purchaseLimit: number;
  isAvailable: boolean;
  expireTimestamp: number;
  shopType: string;
  pricing: Pricing[];
  content: Content[];
  offerID: string;
  asset: string;
}
