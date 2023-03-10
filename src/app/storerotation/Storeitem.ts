export interface StoreItem {
  title: string;
  desc: string;
  tag: string;
  purchaseLimit: number;
  isAvailable: boolean;
  expireTimestamp: number;
  shopType: string;
  pricing: {
    ref: string;
    quantity: number;
  }[];
  content: {
    ref: string;
    name: string;
    quantity: number;
  }[];
  offerID: string;
  asset: string;
}
