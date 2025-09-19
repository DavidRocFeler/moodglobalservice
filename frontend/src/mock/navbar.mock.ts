export interface SubItem {
    title: string;
    description: string;
    href: string;
  }
  
  export interface MenuItem {
    label: string;
    href?: string;
    hasDropdown: boolean;
    subItems?: SubItem[];
  }
  
  export interface HeaderData {
    logo: string;
    menuItems: MenuItem[];
    ctaButton: {
      text: string;
      href: string;
    };
  }
  
  export const headerData: HeaderData = {
    logo: "MOVDs",
    menuItems: [
      {
        label: "Home",
        href: "/",
        hasDropdown: false,
      },
      {
        label: "Services",
        hasDropdown: true,
        subItems: [
          {
            title: "Web Development",
            description: "Custom web applications and websites",
            href: "/services/web-development"
          },
          {
            title: "Mobile Development",
            description: "iOS and Android app development",
            href: "/services/mobile-development"
          },
          {
            title: "UI/UX Design",
            description: "User interface and experience design",
            href: "/services/design"
          },
          {
            title: "Consulting",
            description: "Technical consulting and strategy",
            href: "/services/consulting"
          }
        ]
      },
      {
        label: "SiteLib",
        hasDropdown: true,
        subItems: [
          {
            title: "Components",
            description: "Reusable UI components library",
            href: "/sitelib/components"
          },
          {
            title: "Templates",
            description: "Pre-built website templates",
            href: "/sitelib/templates"
          },
          {
            title: "Documentation",
            description: "Complete usage documentation",
            href: "/sitelib/docs"
          },
          {
            title: "Examples",
            description: "Live examples and demos",
            href: "/sitelib/examples"
          }
        ]
      },
      {
        label: "BlockAI",
        hasDropdown: true,
        subItems: [
          {
            title: "AI Models",
            description: "Pre-trained artificial intelligence models",
            href: "/blockai/models"
          },
          {
            title: "API Access",
            description: "Integrate AI into your applications",
            href: "/blockai/api"
          },
          {
            title: "Training",
            description: "Custom model training services",
            href: "/blockai/training"
          },
          {
            title: "Analytics",
            description: "AI-powered data analytics",
            href: "/blockai/analytics"
          }
        ]
      },
      {
        label: "Blog",
        href: "/blog",
        hasDropdown: false,
      },
      {
        label: "About us",
        hasDropdown: true,
        subItems: [
          {
            title: "Our Story",
            description: "Learn about our company history",
            href: "/about/story"
          },
          {
            title: "Team",
            description: "Meet our talented team members",
            href: "/about/team"
          },
          {
            title: "Careers",
            description: "Join our growing team",
            href: "/about/careers"
          },
          {
            title: "Contact",
            description: "Get in touch with us",
            href: "/about/contact"
          }
        ]
      }
    ],
    ctaButton: {
      text: "Contact Us",
      href: "/contact"
    }
  };