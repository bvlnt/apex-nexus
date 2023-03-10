export interface CraftsData {
  bundle: string;
  start?: number;
  end?: number;
  startDate?: string;
  endDate?: string;
  bundleType: 'daily' | 'weekly' | 'permanent';
  bundleContent: {
    item: string;
    cost: number;
    itemType: {
      name: string;
      rarity: 'Common' | 'Rare' | 'Epic';
      asset: string;
      rarityHex: string;
    };
  }[];
}
[];
