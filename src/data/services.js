export const resellerPackagesUrl = 'https://www.shakesolutions.net/billing/store/reseller-webhosting-packages'
export const webHostingPackagesUrl = 'https://billing.shakesolutions.net/store/webhosting-linux'
export const vpsHostingPackagesUrl = 'https://billing.shakesolutions.net/store/hosting-packages'

export const webDevelopmentPackages = [
  {
    name: 'Starter',
    price: 'MK 120,000',
    period: 'one-off',
    orderHref: '/contact',
    ctaLabel: 'Start a Project',
    features: ['Best for small businesses and personal brands', '5 Essential Pages', 'Google Maps', 'Social Media Integration']
  },
  {
    name: 'Basic',
    price: 'MK 150,000',
    period: 'one-off',
    orderHref: '/contact',
    ctaLabel: 'Start a Project',
    features: ['Mobile-friendly professional website', '5 Essential Pages', 'Google Maps', 'Social Media Integration']
  },
  {
    name: 'Standard',
    price: 'MK 200,000',
    period: 'one-off',
    orderHref: '/contact',
    ctaLabel: 'Start a Project',
    features: ['For regular content updates', 'Unlimited Pages', 'Google Maps', 'Social Media Integration']
  },
  {
    name: 'Professional',
    price: 'MK 300,000',
    period: 'one-off',
    orderHref: '/contact',
    ctaLabel: 'Start a Project',
    features: ['Built for stronger online visibility', 'Unlimited Pages', 'Google Maps', 'Social Media Integration', 'Blog Optional', 'Website Backend']
  },
  {
    name: 'E-commerce',
    price: 'MK 300,000',
    period: 'one-off',
    orderHref: '/contact',
    ctaLabel: 'Start a Project',
    features: ['Digital store for selling products or services', 'Unlimited Pages', 'Google Maps', 'Social Media Integration', 'Payment Gateways', 'Basic SEO']
  }
]

export const webHostingPackages = [
  {
    name: 'Basic Hosting',
    price: 'MK 90,000',
    period: '/year',
    orderHref: `${webHostingPackagesUrl}/basic-hosting-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['Free SSL Certificate', '1 Domain', '5GB Disk Space', '10 Email Accounts', '5GB Bandwidth', '1 Database', 'Free 24/7 Support']
  },
  {
    name: 'Standard Hosting',
    price: 'MK 150,000',
    period: '/year',
    orderHref: `${webHostingPackagesUrl}/standard-hosting-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['Free SSL Certificate', '3 Domains', '10GB Disk Space', '50 Email Accounts', '10GB Bandwidth', 'CPanel Included', 'Unlimited Databases']
  },
  {
    name: 'Professional Hosting',
    price: 'MK 240,000',
    period: '/year',
    orderHref: `${webHostingPackagesUrl}/professional-hosting-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['Free SSL Certificate', '5 Domains', '15GB Disk Space', '100 Email Accounts', '15GB Bandwidth', 'CPanel Included', 'Free 24/7 Support']
  },
  {
    name: 'Ultimate Hosting',
    price: 'MK 500,000',
    period: '/year',
    orderHref: `${webHostingPackagesUrl}/ultimate-hosting-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['Free SSL Certificate', 'Unlimited Domains', 'Unlimited Disk Space', 'Unlimited Email Accounts', 'Unlimited Bandwidth', 'CPanel Included', 'Priority 24/7 Support']
  }
]

export const vpsHostingPackages = [
  {
    name: 'VPS Basic',
    price: 'MK 30,000',
    period: '/mo',
    orderHref: `${vpsHostingPackagesUrl}/basic-vps-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['1 CPU Core', '2GB RAM', '40GB SSD Storage', '2TB Transfer', '10 Gbps Network', 'Root Access', 'Free Setup']
  },
  {
    name: 'VPS Standard',
    price: 'MK 40,000',
    period: '/mo',
    orderHref: `${vpsHostingPackagesUrl}/standard-vps-hosting-package`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['1 CPU Core', '4GB RAM', '80GB SSD Storage', '4TB Transfer', '10 Gbps Network', 'Root Access', 'Free Setup']
  },
  {
    name: 'VPS Professional',
    price: 'MK 50,000',
    period: '/mo',
    orderHref: vpsHostingPackagesUrl,
    external: true,
    ctaLabel: 'Order Now',
    features: ['2 CPU Cores', '6GB RAM', '120GB SSD Storage', '6TB Transfer', '10 Gbps Network', 'Root Access', 'Free Setup']
  },
  {
    name: 'VPS Ultimate',
    price: 'MK 60,000',
    period: '/mo',
    orderHref: `${vpsHostingPackagesUrl}/ultimate-vps-hosting`,
    external: true,
    ctaLabel: 'Order Now',
    features: ['2 CPU Cores', '8GB RAM', '160GB SSD Storage', '8TB Transfer', '10 Gbps Network', 'Root Access', 'Free Setup']
  }
]

export const resellerPackages = [
  {
    name: 'Starter Reseller Package',
    price: 'MWK 38,000.00',
    period: '/mo',
    orderHref: `${resellerPackagesUrl}/starter-reseller-package`,
    external: true,
    features: [
      '50GB Disk Space',
      '1000GB Bandwidth',
      'Unlimited Domains',
      'MK 960,000.00 Annual Price',
      'Windows / Linux Hosting Server'
    ]
  },
  {
    name: 'Beginner Reseller Package',
    price: 'MWK 52,000.00',
    period: '/mo',
    orderHref: `${resellerPackagesUrl}/beginner-reseller-package`,
    external: true,
    features: [
      '100GB Disk Space',
      '3000GB Bandwidth',
      'Unlimited Domains',
      'MK 1,360,000.00 Annual Price',
      'Windows / Linux Hosting Server'
    ]
  },
  {
    name: 'Expert Reseller Package',
    price: 'MWK 64,000.00',
    period: '/mo',
    orderHref: `${resellerPackagesUrl}/expert-reseller-package`,
    external: true,
    features: [
      '150GB Disk Space',
      '3000GB Bandwidth',
      'Unlimited Domains',
      'MK 1,200,000.00 Annual Price',
      'Windows / Linux Hosting Server'
    ]
  },
  {
    name: 'Professional Reseller Package',
    price: 'MWK 112,000.00',
    period: '/mo',
    orderHref: `${resellerPackagesUrl}/professional-reseller-package`,
    external: true,
    features: [
      '250GB Disk Space',
      '4000GB Bandwidth',
      'Unlimited Domains',
      'MK 1,568,000.00 Annual Price',
      'Windows / Linux Hosting Server'
    ]
  }
]

export const digitalMarketingPackages = [
  {
    name: 'SEO Basic',
    price: 'MK 40,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Plan SEO',
    features: ['Google Search Console', 'Google Sitemap', 'SEO Plugin Setup', 'Google Analytics', 'Website Auditing', 'Quarterly Reporting', 'Speed Optimization', '10 Keywords Tracking']
  },
  {
    name: 'SEO Standard',
    price: 'MK 70,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Plan SEO',
    features: ['Everything in Basic', '20 Keywords Tracking', 'Google My Business', 'Business Directories', 'Monthly Reporting', 'Competitor Analysis']
  },
  {
    name: 'SEO Professional',
    price: 'MK 100,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Plan SEO',
    features: ['Everything in Standard', '30 Keywords Tracking', '3 Social Media Accounts', 'Content Management', 'Link Building', 'Weekly Reporting']
  },
  {
    name: 'SEO Enterprise',
    price: 'MK 250,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Plan SEO',
    features: ['Everything in Professional', '45 Keywords Tracking', '4 Social Media Accounts', 'Ecommerce Support', 'Dedicated Manager', 'Daily Monitoring']
  },
  {
    name: 'Starter Management',
    price: 'MWK 150,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Start Management',
    features: ['One managed account', 'Facebook, Instagram, or LinkedIn', '1 post per week', 'Includes holidays', 'Annual option: MWK 1,800,000']
  },
  {
    name: 'Growth Management',
    price: 'MWK 200,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Start Management',
    features: ['Two managed accounts', 'Facebook, Instagram, and LinkedIn support', '3 posts per week', 'Includes holidays', 'Annual option: MWK 2,400,000']
  },
  {
    name: 'Business Management',
    price: 'MWK 300,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Start Management',
    features: ['Four managed accounts', 'Facebook, Instagram, and LinkedIn support', '3 posts per week', 'Includes holidays', 'Annual option: MWK 3,600,000']
  }
]

export const seoPackages = digitalMarketingPackages.filter((plan) => plan.name.startsWith('SEO '))

export const graphicsDesignPrices = [
  { name: 'Logo', price: 'MWK 100,000' },
  { name: 'Album Cover', price: 'MWK 50,000' },
  { name: 'Book Cover', price: 'MWK 100,000' },
  { name: 'Poster', price: 'MWK 35,000' },
  { name: 'Banner', price: 'MWK 40,000', note: 'per metre square' },
  { name: 'Flyer', price: 'MWK 20,000' },
  { name: 'Business Cards', price: 'MWK 20,000 / MWK 30,000', note: 'one side / both sides' },
  { name: 'Identification Cards', price: 'MWK 20,000 / MWK 30,000', note: 'one side / both sides' },
  { name: 'Newsletter/Magazine', price: 'MWK 8,000', note: 'per page' },
  { name: 'Product Packaging', price: 'MWK 30,000' },
  { name: 'Clothing or Apparel', price: 'MWK 15,000' },
  { name: 'Menu Design', price: 'MWK 30,000', note: 'starting price' }
]

export const gpsTrackingPackages = [
  {
    name: 'Starter',
    price: 'MWK 40,000',
    period: '/vehicle/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Assessment',
    features: [
      '1-5 vehicles',
      'MWK 200,000 one-time device and installation fee per vehicle',
      'SIM card data included',
      'Platform access and local support'
    ]
  },
  {
    name: 'Business',
    price: 'MWK 30,000',
    period: '/vehicle/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Assessment',
    features: [
      '6-15 vehicles',
      'MWK 200,000 one-time device and installation fee per vehicle',
      'SIM card data included',
      'Platform access and local support'
    ]
  },
  {
    name: 'Fleet',
    price: 'MWK 25,000',
    period: '/vehicle/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Assessment',
    features: [
      '16+ vehicles',
      'MWK 200,000 one-time device and installation fee per vehicle',
      'SIM card data included',
      'Volume rollout support available'
    ]
  }
]

export const storagePackages = [
  {
    name: 'Starter',
    price: 'MWK 20,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['200 GB storage', '1 TB transfer', '5 domains', 'DirectAdmin Control Panel']
  },
  {
    name: 'Essential',
    price: 'MWK 30,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['1 TB storage', '2 TB transfer', '10 domains', 'DirectAdmin Control Panel']
  },
  {
    name: 'Business',
    price: 'MWK 80,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['2 TB storage', '5 TB transfer', '20 domains', 'DirectAdmin Control Panel']
  },
  {
    name: 'Professional',
    price: 'MWK 150,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['4 TB storage', '10 TB transfer', '30 domains', 'DirectAdmin Control Panel']
  },
  {
    name: 'Enterprise',
    price: 'MWK 200,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['10 TB storage', '15 TB transfer', '50 domains', 'DirectAdmin Control Panel']
  },
  {
    name: 'Ultimate',
    price: 'MWK 250,000',
    period: '/mo',
    orderHref: '/contact',
    ctaLabel: 'Request Storage',
    features: ['20 TB storage', '20 TB transfer', '60 domains', 'DirectAdmin Control Panel']
  }
]

export const services = [
  {
    slug: 'web-system-development',
    imageSrc: '/images/services/web-system-development-placeholder.jpg',
    imageAlt: 'Web and system development service image',
    title: 'Web & System Development',
    description:
      'We develop state-of-the-art systems per user requirements. Expert in all languages including CSS, Bootstrap, HTML, PHP, WordPress, and ASP.Net with SQL or MySQL as backend database.',
    details:
      'From company websites to custom business systems, Shake Solutions builds practical digital tools that help teams work faster, communicate clearly, and serve customers better.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'Content Management Systems', 'API Development'],
    benefits: ['Responsive websites', 'Secure database-backed systems', 'Scalable architecture', 'Ongoing maintenance support'],
    ctaLabel: 'View Packages',
    ctaHref: '#packages',
    packagesTitle: 'Web Development Packages',
    packagesDescription:
      'Choose a website package based on your content, online selling, and backend needs. Website maintenance ranges from MK 10,000 to MK 25,000 per month depending on scope.',
    packages: webDevelopmentPackages
  },
  {
    slug: 'networking-solutions',
    imageSrc: '/images/services/networking-solutions-placeholder.jpg',
    imageAlt: 'Networking solutions service image',
    title: 'Networking Solutions',
    description:
      'Comprehensive solutions for Local and Wide Area Networks (LAN, WAN) and Remote Access, plus virtualization in Windows Server 2012 and Linux environments.',
    details:
      'We design, install, secure, and maintain network environments for offices, institutions, and growing teams that need dependable connectivity.',
    features: ['Network Design & Setup', 'VPN Configuration', 'Server Management', 'Network Security'],
    benefits: ['Reliable connectivity', 'Secure access controls', 'Server and workstation support', 'Remote access configuration'],
    ctaLabel: 'Discuss Networking',
    ctaHref: '/contact'
  },
  {
    slug: 'web-hosting-services',
    imageSrc: '/images/services/web-hosting-services-placeholder.jpg',
    imageAlt: 'Web hosting services image',
    title: 'Web Hosting Services',
    description:
      'Competitive website and email hosting at affordable prices. As an SNDP-accredited vendor, we are certified for .mw domain registration.',
    details:
      'Our hosting packages support business websites, email, databases, SSL, domain registration, and dependable support for teams that need their online presence to stay available.',
    features: ['Shared Hosting', 'Email Hosting', 'Domain Registration', '99.9% Uptime Guarantee'],
    benefits: ['Free SSL options', 'Business email hosting', 'Domain registration support', '24/7 technical assistance'],
    ctaLabel: 'View Packages',
    ctaHref: '#packages',
    packagesTitle: 'Web Hosting Packages',
    packagesDescription:
      'Select annual web hosting for business websites, email, databases, SSL, and dependable support.',
    packages: webHostingPackages
  },
  {
    slug: 'vps-hosting',
    imageSrc: '/images/services/vps-hosting.svg',
    imageAlt: 'VPS hosting service illustration',
    title: 'VPS Hosting',
    description:
      'Virtual private server packages for businesses that need dedicated resources, SSD storage, root access, and scalable monthly hosting.',
    details:
      'Our VPS hosting gives growing websites, applications, and business systems dedicated server resources without the cost of managing physical hardware. Choose the CPU, RAM, storage, and transfer level that fits your workload, with root access and local support from Shake Solutions.',
    features: ['Dedicated VPS Resources', 'SSD Storage', 'Root Access', '10 Gbps Network'],
    benefits: ['More control than shared hosting', 'Predictable monthly pricing', 'Scalable server capacity', 'Free setup support'],
    ctaLabel: 'View VPS Packages',
    ctaHref: '#packages',
    packagesTitle: 'VPS Hosting Packages',
    packagesDescription:
      'Choose a monthly VPS package when you need dedicated CPU, RAM, SSD storage, transfer allowance, and root access for your website or application.',
    packages: vpsHostingPackages
  },
  {
    slug: 'reseller-hosting',
    imageSrc: '/images/services/reseller.jpg',
    imageAlt: 'Reseller hosting service image',
    title: 'Reseller Hosting',
    description:
      'Hosting packages for agencies, developers, and entrepreneurs who want to manage multiple client websites under one reliable platform.',
    details:
      'Reseller hosting gives you room to manage client websites, create hosting accounts, and grow your own hosting offer with support from Shake Solutions infrastructure.',
    features: ['Multiple Client Accounts', 'White-label Hosting', 'cPanel Management', 'Scalable Resources'],
    benefits: ['Manage several clients from one place', 'Private nameserver support', 'cPanel/WHM access', 'Packages built for growth'],
    ctaLabel: 'View Packages',
    ctaHref: '#packages',
    packages: resellerPackages
  },
  {
    slug: 'digital-marketing',
    imageSrc: '/images/services/digital-marketing-placeholder.jpg',
    imageAlt: 'Digital marketing service image',
    title: 'Digital Marketing',
    description:
      'Expert team organizing and implementing strategies to optimize website ranking and boost your online presence to reach target audiences.',
    details:
      'We help brands improve visibility through search optimization, social media planning, content, campaign tracking, and practical reporting.',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
    benefits: ['Better online visibility', 'Campaign planning', 'Audience-focused messaging', 'Performance reporting'],
    ctaLabel: 'View Packages',
    ctaHref: '#packages',
    packagesTitle: 'SEO & Social Media Packages',
    packagesDescription:
      'Choose monthly SEO support, social media management, or combine both for a stronger online presence.',
    packages: digitalMarketingPackages
  },
  {
    slug: 'search-engine-optimization',
    imageSrc: '/images/services/search.jpg',
    imageAlt: 'Search engine optimization service image',
    title: 'Search Engine Optimization',
    description:
      'SEO services that improve website visibility, search ranking, local discovery, and qualified traffic from people already looking for what you offer.',
    details:
      'Shake Solutions helps businesses strengthen their search presence with technical SEO setup, website audits, keyword tracking, Google Search Console, analytics, local business listings, reporting, and ongoing optimisation focused on practical growth.',
    features: ['Website SEO Audits', 'Keyword Tracking', 'Google Search Console', 'Local SEO'],
    benefits: ['Improve search visibility', 'Reach higher-intent visitors', 'Track ranking performance', 'Strengthen local discovery'],
    ctaLabel: 'View SEO Packages',
    ctaHref: '#packages',
    packagesTitle: 'Search Engine Optimization Packages',
    packagesDescription:
      'Choose monthly SEO support for audits, search tracking, reporting, technical setup, and ongoing optimisation.',
    packages: seoPackages
  },
  {
    slug: 'graphics-designing',
    imageSrc: '/images/services/graphics-designing-placeholder.jpg',
    imageAlt: 'Graphics designing service image',
    title: 'Graphics Designing',
    description:
      'Professional design solutions bringing your ideas to life. From logos to websites and social media graphics, our skilled team delivers excellence.',
    details:
      'Our design work supports brand identity, promotions, print materials, and digital campaigns with clean visuals made for real business use.',
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'],
    benefits: ['Professional brand presentation', 'Social-ready graphics', 'Print and digital formats', 'Consistent visual identity'],
    ctaLabel: 'View Design Prices',
    ctaHref: '#pricing',
    pricesTitle: 'Graphic Design Pricing',
    pricesDescription:
      'Transparent pricing for common design work. Larger campaigns, full brand systems, and ongoing creative support can be quoted after a short consultation.',
    prices: graphicsDesignPrices
  },
  {
    slug: 'customer-support',
    imageSrc: '/images/services/customer-support-placeholder.jpg',
    imageAlt: 'Customer support service image',
    title: 'Customer Support',
    description:
      'Free 24/7 online support for everyone. Our dedicated team attends to all help requests and finds the best solutions for you.',
    details:
      'Shake Solutions supports clients with technical help, hosting assistance, website updates, troubleshooting, and guidance when something needs attention.',
    features: ['24/7 Availability', 'Technical Assistance', 'Remote Support', 'Priority Response'],
    benefits: ['Fast help when issues happen', 'Remote troubleshooting', 'Friendly technical guidance', 'Support for hosted services'],
    ctaLabel: 'Contact Support',
    ctaHref: '/contact'
  },
  {
    slug: 'cctv-installation',
    imageSrc: '/images/services/cctv-installation-placeholder.jpg',
    imageAlt: 'CCTV installation service image',
    title: 'CCTV Installation',
    description:
      'Professional CCTV installation services for homes, offices, and commercial spaces, helping you monitor and protect what matters most.',
    details:
      'We assess your location, recommend suitable camera coverage, install equipment, and help configure monitoring for homes and business spaces.',
    features: ['Site Assessment', 'Camera Installation', 'Remote Monitoring Setup', 'Maintenance & Support'],
    benefits: ['Improved property monitoring', 'Practical camera placement', 'Remote viewing setup', 'Ongoing maintenance support'],
    ctaLabel: 'Book an Assessment',
    ctaHref: '/contact'
  },
  {
    slug: 'gps-fleet-tracking',
    imageSrc: '/images/services/gps-fleet-tracking.jpg',
    imageAlt: 'GPS fleet tracking service illustration',
    title: 'GPS Fleet Tracking',
    description:
      'Real-time iTrackSafeX GPS vehicle tracking and fleet management for businesses that need live visibility, driver alerts, route history, and local support in Malawi.',
    details:
      'As the authorised local iTrackSafeX partner in Malawi, Shake Solutions supplies, installs, activates, and supports GPS tracking devices for business fleets. We help you monitor vehicles from your phone or computer, set geofences, review route history, receive speed and movement alerts, and respond quickly when a vehicle needs attention.',
    features: ['Real-Time Vehicle Tracking', 'Geofencing Alerts', 'Route Playback', 'Remote Immobilisation'],
    benefits: ['Know where every vehicle is', 'Reduce operational risk', 'Improve driver accountability', 'Get local installation and support'],
    ctaLabel: 'Book Fleet Assessment',
    ctaHref: '/contact',
    packagesTitle: 'GPS Fleet Tracking Packages',
    packagesDescription:
      'All packages include device hardware, professional installation, platform activation, SIM card data, and ongoing local support. Final pricing is confirmed after your free fleet assessment.',
    packages: gpsTrackingPackages
  },
  {
    slug: 'enterprise-storage-services',
    imageSrc: '/images/services/enterprise-storage-services.jpg',
    imageAlt: 'Enterprise storage services illustration',
    title: 'Enterprise Storage Services',
    description:
      'Secure, scalable business storage services including object storage, block storage, NAS file storage, backup and disaster recovery, colocation, and CDN edge storage.',
    details:
      'Shake Solutions helps businesses protect, organise, and scale their data with enterprise-grade storage services backed by local support. We design storage around your workload, from S3-compatible object storage and shared team file access to high-performance block storage, backup recovery plans, and dedicated storage environments.',
    features: ['Object Storage', 'Block Storage', 'NAS & File Storage', 'Backup & Disaster Recovery'],
    benefits: ['Scale storage as your data grows', 'Protect critical files and systems', 'Improve data access and collaboration', 'Get transparent monthly pricing'],
    ctaLabel: 'Discuss Storage Needs',
    ctaHref: '/contact',
    packagesTitle: 'Storage Plans & Pricing',
    packagesDescription:
      'All storage plans include DirectAdmin Control Panel, FTP/SFTP access, Rsync over SSH, web file delivery, and predictable monthly pricing with no surprise fees.',
    packages: storagePackages
  }
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
