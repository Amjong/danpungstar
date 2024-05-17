export type starforceInfo = {
  target_item: string;
  world_name: string;
  character_name: string;
  before_starforce_count: number;
  after_starforce_count: number;
  date_create: string;
  starforce_event_list: any[];
  destroy_defence: string;
  starcatch_result: string;
  item_upgrade_result: string;
  change_time: string;
};

export type starforceHistory = {
  date: Date;
  infoArray: starforceInfo[];
};

export type starforceAchievement = {
  mostConsecutiveSuccess: {
    count: number;
    itemName: string;
    date: Date;
    firstStarforceCount: number;
    lastStarforceCount: number;
  };
  mostConsecutiveFailure: {
    count: number;
    itemName: string;
    date: Date;
    firstStarforceCount: number;
    lastStarforceCount: number;
  };
  destroyCount: {
    eternel: number;
    jetBlack: number;
    total: number;
  };
  totalStarforceCount: number;
  totalStarcatchSuccessCount: number;
  totalCost: number;
  totalDiscountCost: number;
};
