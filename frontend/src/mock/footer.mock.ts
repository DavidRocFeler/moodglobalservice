// Footer Types
export interface FooterLink {
    title: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export interface SocialLink {
    name: string;
    href: string;
    icon: string; // Para los iconos de redes sociales
  }
  
  export interface FooterData {
    companyInfo: {
      name: string;
      description: string;
    };
    sections: FooterSection[];
    contact: {
      address: string;
      city: string;
      phone: string;
      email: string;
      kvk: string;
    };
    socialLinks: SocialLink[];
    copyright: string;
  }
  
  // Mock Data
  export const footerData: FooterData = {
    companyInfo: {
      name: "MOVDs",
      description: "A Blockchain firm dedicated to promoting business growth through digital infrastructure solutions."
    },
    sections: [
      {
        title: "Navigate",
        links: [
          { title: "Home", href: "/" },
          { title: "Services", href: "/services" },
          { title: "SiteLib", href: "/sitelib" },
          { title: "BlockAI", href: "/blockai" },
          { title: "About us", href: "/about" }
        ]
      },
      {
        title: "Legal",
        links: [
          { title: "Privacy Policy", href: "/privacy-policy" },
          { title: "Terms and Conditions", href: "/terms-conditions" },
          { title: "Cookie Policy", href: "/cookie-policy" }
        ]
      }
    ],
    contact: {
      address: "Overtoom 141, 1054 HG",
      city: "Amsterdam, Netherlands",
      phone: "+31-6-12345678",
      email: "info@moodglobalservices.com",
      kvk: "KVK: 90502581"
    },
    socialLinks: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
      { name: "GitHub", href: "https://github.com", icon: "github" },
      { name: "Instagram", href: "https://instagram.com", icon: "instagram" }
    ],
    copyright: "© 2024 Mood Global Services B.V. All rights reserved."
  };
  