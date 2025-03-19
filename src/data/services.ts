import type { CloudStorageService } from '../types/CloudStorageService';

export const cloudServices: CloudStorageService[] = [
  {
    name: "PikPak",
    slug: "pikpak",
    rating: 4.8,
    order: 1,
    url: "https://mypikpak.com/drive/activity/invited?invitation-code=78927733",
    logo: "/logos/pikpak.svg",
    reviews: [
      {
        user: "James Wilson",
        rating: 5,
        comment: "Best cloud storage for large files and streaming",
        date: "2024-02-21"
      },
      {
        user: "Maria Chen",
        rating: 5,
        comment: "Amazing download speeds and unlimited storage",
        date: "2024-02-20"
      }
    ],
    pricing: {
      free_plan_storage: "10TB",
      basic_plan_cost: 3.99,
      premium_plan_cost: 8.99,
      business_plan_cost: 15.99
    },
    storage_features: {
      max_storage_capacity: "Unlimited",
      file_size_limit: "Unlimited",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["WebDAV", "Media Players", "Download Managers"]
    },
    notable_features: [
      "Unlimited cloud storage",
      "Online file extraction",
      "WebDAV support",
      "Media streaming"
    ]
  },
  {
    name: "Google Drive",
    slug: "google-drive",
    rating: 4.5,
    order: 2,
    url: "https://drive.google.com",
    logo: "/logos/google-drive.svg",
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Best integration with Google Workspace",
        date: "2024-02-15"
      }
    ],
    pricing: {
      free_plan_storage: "15GB",
      basic_plan_cost: 1.99,
      premium_plan_cost: 9.99,
      business_plan_cost: 12.00
    },
    storage_features: {
      max_storage_capacity: "30TB",
      file_size_limit: "5TB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: false,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: true,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["Microsoft Office", "Adobe", "Slack"]
    },
    notable_features: [
      "AI-powered search",
      "Smart suggestions",
      "Google Workspace integration"
    ]
  },
  {
    name: "Dropbox",
    slug: "dropbox",
    rating: 4.3,
    order: 3,
    url: "https://dropbox.com",
    logo: "/logos/dropbox.svg",
    reviews: [
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Great for business collaboration",
        date: "2024-02-14"
      }
    ],
    pricing: {
      free_plan_storage: "2GB",
      basic_plan_cost: 9.99,
      premium_plan_cost: 16.99,
      business_plan_cost: 20.00
    },
    storage_features: {
      max_storage_capacity: "5TB",
      file_size_limit: "2TB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: false,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: true,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["Microsoft Office", "Zoom", "Slack"]
    },
    notable_features: [
      "Paper collaboration",
      "Smart Sync",
      "Dropbox Transfer"
    ]
  },
  {
    name: "OneDrive",
    slug: "onedrive",
    rating: 4.2,
    order: 4,
    url: "https://onedrive.live.com",
    logo: "/logos/onedrive.svg",
    reviews: [
      {
        user: "Mike Johnson",
        rating: 4,
        comment: "Perfect with Microsoft 365",
        date: "2024-02-13"
      }
    ],
    pricing: {
      free_plan_storage: "5GB",
      basic_plan_cost: 1.99,
      premium_plan_cost: 6.99,
      business_plan_cost: 10.00
    },
    storage_features: {
      max_storage_capacity: "6TB",
      file_size_limit: "250GB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: false,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: true,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["Microsoft Office", "Windows", "Teams"]
    },
    notable_features: [
      "Microsoft 365 integration",
      "Personal Vault",
      "Windows backup"
    ]
  },
  {
    name: "iCloud",
    slug: "icloud",
    rating: 4.0,
    order: 5,
    url: "https://www.icloud.com",
    logo: "/logos/icloud.svg",
    reviews: [
      {
        user: "Sarah Lee",
        rating: 4,
        comment: "Seamless Apple ecosystem integration",
        date: "2024-02-12"
      }
    ],
    pricing: {
      free_plan_storage: "5GB",
      basic_plan_cost: 0.99,
      premium_plan_cost: 2.99,
      business_plan_cost: 9.99
    },
    storage_features: {
      max_storage_capacity: "2TB",
      file_size_limit: "50GB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: false,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: true,
      team_collaboration: false
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["Apple Apps"]
    },
    notable_features: [
      "Apple ecosystem integration",
      "Photo library",
      "Device backup"
    ]
  },
  {
    name: "Box",
    slug: "box",
    rating: 4.1,
    order: 6,
    url: "https://www.box.com",
    logo: "/logos/box.svg",
    reviews: [
      {
        user: "Tom Wilson",
        rating: 4,
        comment: "Enterprise-grade security features",
        date: "2024-02-11"
      }
    ],
    pricing: {
      free_plan_storage: "10GB",
      basic_plan_cost: 5.00,
      premium_plan_cost: 15.00,
      business_plan_cost: 25.00
    },
    storage_features: {
      max_storage_capacity: "Unlimited",
      file_size_limit: "5GB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: true,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: false,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: ["Microsoft Office", "Google Workspace", "Slack"]
    },
    notable_features: [
      "Box Sign",
      "Box Shield",
      "Enterprise security"
    ]
  },
  {
    name: "Mega",
    slug: "mega",
    rating: 4.0,
    order: 7,
    url: "https://mega.io",
    logo: "/logos/mega.svg",
    reviews: [
      {
        user: "Alex Brown",
        rating: 4,
        comment: "Best free storage and encryption",
        date: "2024-02-10"
      }
    ],
    pricing: {
      free_plan_storage: "20GB",
      basic_plan_cost: 4.99,
      premium_plan_cost: 9.99,
      business_plan_cost: 15.00
    },
    storage_features: {
      max_storage_capacity: "16TB",
      file_size_limit: "Unlimited",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "End-to-End",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: []
    },
    notable_features: [
      "End-to-end encryption",
      "Built-in chat",
      "MEGAcmd"
    ]
  },
  {
    name: "pCloud",
    slug: "pcloud",
    rating: 4.7,
    order: 3,
    url: "https://partner.pcloud.com/r/139081",
    logo: "/logos/pcloud.svg",
    reviews: [
      {
        user: "Emma Davis",
        rating: 5,
        comment: "Great lifetime plans",
        date: "2024-02-09"
      }
    ],
    pricing: {
      free_plan_storage: "10GB",
      basic_plan_cost: 4.99,
      premium_plan_cost: 9.99,
      business_plan_cost: 29.99
    },
    storage_features: {
      max_storage_capacity: "10TB",
      file_size_limit: "Unlimited",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "Zero-Knowledge",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: []
    },
    notable_features: [
      "Lifetime plans",
      "Built-in media player",
      "European data centers"
    ]
  },
  {
    name: "Sync.com",
    slug: "sync-com",
    rating: 4.3,
    order: 9,
    url: "https://www.sync.com",
    logo: "/logos/sync.svg",
    reviews: [
      {
        user: "David Clark",
        rating: 4,
        comment: "Best privacy features",
        date: "2024-02-08"
      }
    ],
    pricing: {
      free_plan_storage: "5GB",
      basic_plan_cost: 8.00,
      premium_plan_cost: 10.00,
      business_plan_cost: 15.00
    },
    storage_features: {
      max_storage_capacity: "Unlimited",
      file_size_limit: "Unlimited",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "Zero-Knowledge",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: []
    },
    notable_features: [
      "Zero-knowledge encryption",
      "HIPAA compliance",
      "Vault storage"
    ]
  },
  {
    name: "Tresorit",
    slug: "tresorit",
    rating: 4.2,
    order: 10,
    url: "https://tresorit.com",
    logo: "/logos/tresorit.svg",
    reviews: [
      {
        user: "Lisa Anderson",
        rating: 4,
        comment: "Excellent security features",
        date: "2024-02-07"
      }
    ],
    pricing: {
      free_plan_storage: "3GB",
      basic_plan_cost: 10.42,
      premium_plan_cost: 24.00,
      business_plan_cost: 30.00
    },
    storage_features: {
      max_storage_capacity: "Unlimited",
      file_size_limit: "10GB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "Zero-Knowledge",
      zero_knowledge_encryption: true,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: true
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: []
    },
    notable_features: [
      "End-to-end encryption",
      "DRM protection",
      "Admin center"
    ]
  },
  {
    name: "IDrive",
    slug: "idrive",
    rating: 4.1,
    order: 11,
    url: "https://www.idrive.com",
    logo: "/logos/idrive.svg",
    reviews: [
      {
        user: "Robert Taylor",
        rating: 4,
        comment: "Great backup features",
        date: "2024-02-06"
      }
    ],
    pricing: {
      free_plan_storage: "5GB",
      basic_plan_cost: 3.71,
      premium_plan_cost: 7.42,
      business_plan_cost: 14.84
    },
    storage_features: {
      max_storage_capacity: "10TB",
      file_size_limit: "10GB",
      versioning: true,
      backup_support: true
    },
    security: {
      encryption: "AES-256",
      zero_knowledge_encryption: false,
      two_factor_authentication: true
    },
    collaboration: {
      file_sharing: true,
      real_time_editing: false,
      team_collaboration: false
    },
    availability: {
      countries: "Worldwide",
      offline_access: true,
      multiple_device_sync: true
    },
    platform_support: {
      web_browser: true,
      desktop_app: true,
      mobile_app: true,
      third_party_integrations: []
    },
    notable_features: [
      "Physical backup shipping",
      "Server backup",
      "Snapshots"
    ]
  }
];