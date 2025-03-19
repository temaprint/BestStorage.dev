export interface CloudStorageService {
  name: string;
  slug: string;
  rating: number;
  order: number;
  url: string;
  logo: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  pricing: {
    free_plan_storage: string;
    basic_plan_cost: number;
    premium_plan_cost: number;
    business_plan_cost: number;
  };
  storage_features: {
    max_storage_capacity: string;
    file_size_limit: string;
    versioning: boolean;
    backup_support: boolean;
  };
  security: {
    encryption: string;
    zero_knowledge_encryption: boolean;
    two_factor_authentication: boolean;
  };
  collaboration: {
    file_sharing: boolean;
    real_time_editing: boolean;
    team_collaboration: boolean;
  };
  availability: {
    countries: string;
    offline_access: boolean;
    multiple_device_sync: boolean;
  };
  platform_support: {
    web_browser: boolean;
    desktop_app: boolean;
    mobile_app: boolean;
    third_party_integrations: string[];
  };
  notable_features: string[];
}