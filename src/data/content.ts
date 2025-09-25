// Content Strategy for Neotaq - Based on NeoSOFT structure
export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  technologies: string[];
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  caseStudy?: string;
  icon: string;
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  icon: string;
}

export interface CompanyStats {
  yearsOfExperience: string;
  talentPool: string;
  clients: string;
  countries: string;
  offices: string;
  products: string;
  industries: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export const companyStats: CompanyStats = {
  yearsOfExperience: "15+",
  talentPool: "2,500+",
  clients: "800+",
  countries: "35+",
  offices: "12",
  products: "1,200+",
  industries: "18+"
};

export const services: Service[] = [
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    shortDescription: "Accelerate your digital journey with cutting-edge solutions",
    fullDescription: "Transform your business with our comprehensive digital transformation services. We help organizations modernize their operations, enhance customer experiences, and drive innovation through strategic technology implementation.",
    benefits: [
      "Accelerated time-to-market",
      "Enhanced operational efficiency",
      "Improved customer engagement",
      "Data-driven decision making",
      "Scalable digital infrastructure"
    ],
    technologies: ["Cloud Computing", "AI/ML", "IoT", "Big Data", "Blockchain"],
    icon: "🚀"
  },
  {
    id: "team-augmentation",
    name: "Team Augmentation",
    shortDescription: "Scale your development team with skilled professionals",
    fullDescription: "Expand your development capabilities with our expert professionals. Get access to specialized skills and experience across multiple technologies without the overhead of full-time hiring.",
    benefits: [
      "Access to specialized expertise",
      "Flexible scaling options",
      "Reduced hiring costs",
      "Faster project delivery",
      "Risk mitigation"
    ],
    technologies: ["React", "Angular", "Java", "Python", ".NET", "Node.js", "Flutter", "iOS", "Android"],
    icon: "👥"
  },
  {
    id: "application-development",
    name: "Application Development",
    shortDescription: "Custom software solutions tailored to your needs",
    fullDescription: "Build robust, scalable applications that drive business growth. Our development team creates custom solutions using modern technologies and best practices.",
    benefits: [
      "Custom-built solutions",
      "Scalable architecture",
      "Modern technology stack",
      "Agile development process",
      "Ongoing support and maintenance"
    ],
    technologies: ["React", "Angular", "Vue.js", "Node.js", "Java", "Python", ".NET"],
    icon: "💻"
  },
  {
    id: "cloud-consulting",
    name: "Cloud Consulting",
    shortDescription: "Migrate and optimize your cloud infrastructure",
    fullDescription: "Leverage the power of cloud computing with our comprehensive cloud consulting services. From migration strategies to optimization, we help you maximize cloud benefits.",
    benefits: [
      "Cost optimization",
      "Enhanced scalability",
      "Improved security",
      "Better disaster recovery",
      "Increased agility"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    icon: "☁️"
  },
  {
    id: "devops-consulting",
    name: "DevOps Consulting",
    shortDescription: "Streamline development and operations workflows",
    fullDescription: "Implement DevOps best practices to improve collaboration, automate processes, and accelerate software delivery while maintaining quality and security.",
    benefits: [
      "Faster deployment cycles",
      "Improved collaboration",
      "Enhanced quality assurance",
      "Reduced manual errors",
      "Better monitoring and alerting"
    ],
    technologies: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "Terraform", "Ansible"],
    icon: "⚙️"
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & ML",
    shortDescription: "Harness the power of AI for intelligent solutions",
    fullDescription: "Implement AI and machine learning solutions that drive insights, automate processes, and create intelligent applications that adapt and learn.",
    benefits: [
      "Intelligent automation",
      "Predictive analytics",
      "Enhanced decision making",
      "Personalized experiences",
      "Process optimization"
    ],
    technologies: ["TensorFlow", "PyTorch", "Python", "R", "OpenAI", "Computer Vision"],
    icon: "🤖"
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    shortDescription: "Create exceptional user experiences",
    fullDescription: "Design intuitive, engaging user interfaces that delight customers and drive business results through user-centered design principles.",
    benefits: [
      "Enhanced user satisfaction",
      "Increased conversion rates",
      "Better accessibility",
      "Brand consistency",
      "Reduced development costs"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
    icon: "🎨"
  },
  {
    id: "quality-engineering",
    name: "Quality Engineering",
    shortDescription: "Ensure software quality through comprehensive testing",
    fullDescription: "Implement comprehensive quality assurance processes that ensure your software meets the highest standards of reliability, performance, and security.",
    benefits: [
      "Reduced bugs and defects",
      "Improved user experience",
      "Lower maintenance costs",
      "Faster time to market",
      "Enhanced security"
    ],
    technologies: ["Selenium", "Jest", "Cypress", "TestNG", "Postman", "JMeter"],
    icon: "✅"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    shortDescription: "Protect your digital assets with advanced security",
    fullDescription: "Implement comprehensive security measures to protect your applications, data, and infrastructure from evolving cyber threats.",
    benefits: [
      "Enhanced data protection",
      "Compliance assurance",
      "Risk mitigation",
      "Incident response",
      "Security awareness"
    ],
    technologies: ["Penetration Testing", "Security Audits", "SIEM", "Zero Trust", "Identity Management"],
    icon: "🛡️"
  }
];

export const industries: Industry[] = [
  {
    id: "financial-services",
    name: "Financial Services",
    description: "Transforming financial services with secure, compliant, and innovative technology solutions.",
    challenges: [
      "Regulatory compliance",
      "Legacy system modernization",
      "Security and fraud prevention",
      "Customer experience enhancement"
    ],
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Risk management solutions",
      "Regulatory compliance tools"
    ],
    icon: "🏦"
  },
  {
    id: "ecommerce-retail",
    name: "eCommerce & Retail",
    description: "Powering retail transformation with omnichannel experiences and intelligent commerce solutions.",
    challenges: [
      "Omnichannel integration",
      "Inventory management",
      "Customer personalization",
      "Supply chain optimization"
    ],
    solutions: [
      "E-commerce platforms",
      "Mobile commerce apps",
      "Inventory management systems",
      "Customer analytics platforms"
    ],
    icon: "🛒"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Revolutionizing healthcare delivery with digital health solutions and patient-centric technologies.",
    challenges: [
      "Patient data management",
      "Telemedicine adoption",
      "Regulatory compliance",
      "Interoperability"
    ],
    solutions: [
      "Electronic health records",
      "Telemedicine platforms",
      "Patient management systems",
      "Healthcare analytics"
    ],
    icon: "🏥"
  },
  {
    id: "education",
    name: "Education & Learning",
    description: "Enabling digital transformation in education with innovative learning management and delivery systems.",
    challenges: [
      "Remote learning capabilities",
      "Student engagement",
      "Content management",
      "Assessment and grading"
    ],
    solutions: [
      "Learning management systems",
      "Virtual classrooms",
      "Educational content platforms",
      "Student information systems"
    ],
    icon: "🎓"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Driving Industry 4.0 transformation with smart manufacturing and IoT-enabled solutions.",
    challenges: [
      "Process automation",
      "Supply chain visibility",
      "Quality control",
      "Predictive maintenance"
    ],
    solutions: [
      "Manufacturing execution systems",
      "IoT sensor networks",
      "Predictive analytics platforms",
      "Supply chain management"
    ],
    icon: "🏭"
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    description: "Optimizing supply chain operations with intelligent logistics and real-time visibility solutions.",
    challenges: [
      "Supply chain visibility",
      "Inventory optimization",
      "Logistics coordination",
      "Demand forecasting"
    ],
    solutions: [
      "Supply chain management systems",
      "Warehouse management solutions",
      "Transportation management",
      "Demand planning tools"
    ],
    icon: "🚚"
  }
];

export const solutions: Solution[] = [
  {
    id: "crm",
    name: "CRM Solutions",
    description: "Comprehensive customer relationship management solutions that enhance customer engagement and drive sales growth.",
    features: [
      "Customer data management",
      "Sales pipeline tracking",
      "Marketing automation",
      "Customer service management",
      "Analytics and reporting"
    ],
    benefits: [
      "Improved customer relationships",
      "Increased sales conversion",
      "Enhanced customer service",
      "Better data insights",
      "Streamlined processes"
    ],
    technologies: ["Salesforce", "Microsoft Dynamics", "HubSpot", "Custom CRM Development"],
    icon: "👤"
  },
  {
    id: "ecommerce",
    name: "eCommerce Solutions",
    description: "End-to-end e-commerce platforms that deliver exceptional shopping experiences and drive online sales.",
    features: [
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment integration",
      "Order management",
      "Mobile responsiveness"
    ],
    benefits: [
      "Increased online sales",
      "Better customer experience",
      "Scalable architecture",
      "Mobile optimization",
      "Secure transactions"
    ],
    technologies: ["Shopify", "Magento", "WooCommerce", "Custom E-commerce Development"],
    icon: "🛍️"
  },
  {
    id: "erp",
    name: "ERP Solutions",
    description: "Enterprise resource planning systems that integrate and streamline business processes across your organization.",
    features: [
      "Financial management",
      "Human resources",
      "Supply chain management",
      "Manufacturing execution",
      "Business intelligence"
    ],
    benefits: [
      "Process integration",
      "Improved efficiency",
      "Better data accuracy",
      "Cost reduction",
      "Enhanced reporting"
    ],
    technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom ERP Development"],
    icon: "📊"
  },
  {
    id: "cms",
    name: "Content Management Systems",
    description: "Flexible content management solutions that empower teams to create, manage, and publish digital content effortlessly.",
    features: [
      "Content creation and editing",
      "Multi-channel publishing",
      "User management",
      "SEO optimization",
      "Analytics integration"
    ],
    benefits: [
      "Easy content management",
      "Improved collaboration",
      "Better SEO performance",
      "Faster time to market",
      "Cost-effective maintenance"
    ],
    technologies: ["WordPress", "Drupal", "Strapi", "Custom CMS Development"],
    icon: "📝"
  },
  {
    id: "rpa",
    name: "Robotic Process Automation",
    description: "Intelligent automation solutions that streamline repetitive tasks and improve operational efficiency.",
    features: [
      "Process automation",
      "Bot development",
      "Workflow optimization",
      "Exception handling",
      "Performance monitoring"
    ],
    benefits: [
      "Reduced manual effort",
      "Improved accuracy",
      "Cost savings",
      "Faster processing",
      "Employee satisfaction"
    ],
    technologies: ["UiPath", "Blue Prism", "Automation Anywhere", "Custom RPA Solutions"],
    icon: "🤖"
  }
];

export const leadership: TeamMember[] = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years of experience in technology and digital transformation. Sarah drives strategic initiatives and fosters innovation across all business units.",
    image: "/images/team/ceo.jpg"
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Technology expert with deep expertise in emerging technologies. Michael leads our technical vision and ensures we stay at the forefront of innovation.",
    image: "/images/team/cto.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Chief Operations Officer",
    bio: "Operations specialist focused on delivering excellence in service delivery and client satisfaction. Emily ensures smooth operations across all global offices.",
    image: "/images/team/coo.jpg"
  }
];

export const companyValues = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    icon: "💡"
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from code quality to client service.",
    icon: "⭐"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a culture of open communication and knowledge sharing.",
    icon: "🤝"
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
    icon: "🛡️"
  },
  {
    title: "Growth",
    description: "We are committed to continuous learning and development, both for our team and our clients.",
    icon: "📈"
  },
  {
    title: "Impact",
    description: "We measure success by the positive impact we create for our clients and communities.",
    icon: "🎯"
  }
];

export const globalOffices = [
  {
    country: "United States",
    city: "New York",
    address: "123 Tech Avenue, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "newyork@neotaq.com"
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "456 Innovation Street, London EC2A 4DP",
    phone: "+44 20 1234 5678",
    email: "london@neotaq.com"
  },
  {
    country: "India",
    city: "Bangalore",
    address: "789 Tech Park, Bangalore 560001",
    phone: "+91 80 1234 5678",
    email: "bangalore@neotaq.com"
  },
  {
    country: "Germany",
    city: "Berlin",
    address: "321 Digital Plaza, Berlin 10115",
    phone: "+49 30 1234 5678",
    email: "berlin@neotaq.com"
  }
];

export const testimonials = [
  {
    name: "John Smith",
    position: "CTO, TechCorp Inc",
    company: "TechCorp Inc",
    testimonial: "Neotaq transformed our digital infrastructure completely. Their expertise in cloud migration and AI implementation has driven significant business growth for us.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    position: "Digital Director, RetailPro",
    company: "RetailPro",
    testimonial: "The e-commerce solution developed by Neotaq increased our online sales by 200%. Their attention to user experience and technical excellence is outstanding.",
    rating: 5
  },
  {
    name: "David Park",
    position: "VP Technology, FinanceFlow",
    company: "FinanceFlow",
    testimonial: "Neotaq's team augmentation services provided us with world-class developers who seamlessly integrated with our team and delivered exceptional results.",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: "ai-transformation-2024",
    title: "AI-Driven Digital Transformation: Trends for 2024",
    excerpt: "Explore how artificial intelligence is reshaping business processes and creating new opportunities for innovation.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for Enterprise",
    excerpt: "Essential security measures every organization should implement when moving to the cloud.",
    author: "Michael Chen",
    date: "2024-03-10",
    category: "Cloud Computing",
    readTime: "6 min read",
    featured: false
  },
  {
    id: "agile-development-guide",
    title: "The Complete Guide to Agile Software Development",
    excerpt: "Learn how to implement agile methodologies to improve development speed and quality.",
    author: "Emily Rodriguez",
    date: "2024-03-05",
    category: "Software Development",
    readTime: "10 min read",
    featured: false
  }
];

export const caseStudies = [
  {
    id: "fintech-digital-transformation",
    title: "FinTech Digital Transformation",
    client: "Global Banking Corporation",
    industry: "Financial Services",
    challenge: "Legacy system modernization and customer experience enhancement",
    solution: "Cloud-native architecture with AI-powered customer insights",
    results: "40% improvement in customer satisfaction, 60% reduction in processing time",
    technologies: ["React", "Node.js", "AWS", "AI/ML", "Microservices"]
  },
  {
    id: "ecommerce-platform-development",
    title: "E-commerce Platform Development",
    client: "Fashion Retail Chain",
    industry: "Retail",
    challenge: "Building scalable omnichannel e-commerce platform",
    solution: "Custom e-commerce solution with mobile-first approach",
    results: "200% increase in online sales, 150% improvement in mobile conversions",
    technologies: ["React Native", "Python", "PostgreSQL", "Redis", "AWS"]
  }
];