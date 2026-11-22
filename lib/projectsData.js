export const projectsData = [
  {
    id: 'tutors-kushtia',
    slug: 'tutors-kushtia',
    name: 'Tutors Kushtia',
    shortName: 'Tutors Kushtia',
    category: 'Education Technology / EdTech',
    badge: 'EdTech Platform',
    tagline: 'Connecting Tutors, Guardians & Opportunities.',
    heroTitle: 'Better Learning. Stronger Connections.',
    heroDescription: 'One platform connecting those who teach with those who seek quality education.',
    shortDescription: 'Tutors Kushtia is a digital tuition connection platform designed to bring mentors and guardians together in one convenient place. Tutors can create accounts and offer their teaching services, while guardians can publish tuition requirements and find suitable tutors.',
    objective: 'Making tuition opportunities more accessible and organized throughout Kushtia.',
    developerBadge: 'Developed by TSS Soft',
    type: 'mobile-web',
    typeLabel: 'Web Platform & Mobile App',
    accentColor: '#8b5cf6',
    accentGradient: 'from-purple-600 via-indigo-600 to-purple-800',
    themeBg: 'bg-[#0f0c24]',
    themeBorder: 'border-purple-500/20 hover:border-purple-500/50',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    logo: '/projects/tutors-kushtia-logo.jpg',
    banner: '/projects/tutors-kushtia-banner.jpg',
    problem: 'Finding qualified home tutors can be difficult for guardians. At the same time, many capable tutors struggle to discover suitable tuition opportunities across the district due to fragmented offline notices.',
    solution: 'Tutors Kushtia creates a centralized digital platform where tutors and guardians can connect through dedicated accounts, verified credential showcases, and transparent tuition management features.',
    userRoles: [
      {
        role: 'Tutor / Mentor',
        description: 'Create an academic profile, showcase subject competencies, browse tuition posts, apply for opportunities, and manage teaching engagements.'
      },
      {
        role: 'Guardian',
        description: 'Post specific tuition requirements, specify class, medium and area, review tutor qualifications, and connect directly with trusted educators.'
      }
    ],
    keyFeatures: [
      { title: 'Tutor / Mentor Registration', desc: 'Streamlined account creation tailored specifically for academic educators and mentors.' },
      { title: 'Guardian Registration', desc: 'Dedicated portal for guardians to manage education requirements for their children.' },
      { title: 'Tutor Profile Creation', desc: 'Comprehensive profile displaying qualifications, teaching subjects, rates, and experience.' },
      { title: 'Tuition Post Publishing', desc: 'Structured post builder allowing guardians to publish exact requirements in minutes.' },
      { title: 'Browse Available Tuition', desc: 'Search and filter active tuition vacancies by class, subject, and geographic area.' },
      { title: 'Tuition Application / Booking', desc: 'Direct booking requests with real-time application tracking for educators.' },
      { title: 'Guardian Dashboard', desc: 'Centralized overview of published posts, received applications, and chosen tutors.' },
      { title: 'Tutor Dashboard', desc: 'Dedicated workspace to track applications, manage active engagements, and view status.' },
      { title: 'Tutor-Guardian Connection', desc: 'Secure direct communication channel to coordinate schedules and expectations.' }
    ],
    highlightFeature: {
      title: 'Smart Tutor Matching & Direct Booking',
      desc: 'Guardians can publish tuition requirements in seconds, and qualified mentors can browse, review, and apply directly through dedicated dashboards.'
    },
    workflow: [
      { step: '01', title: 'Account Onboarding', desc: 'Tutors and guardians sign up with dedicated role-based portals.' },
      { step: '02', title: 'Post Requirements', desc: 'Guardians publish specific class, curriculum, subject, and location needs.' },
      { step: '03', title: 'Application & Match', desc: 'Qualified tutors review tuition listings and submit direct applications.' },
      { step: '04', title: 'Direct Engagement', desc: 'Guardian reviews educator credentials and initiates direct educational partnership.' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Responsive Web'],
    relatedSlugs: ['cholo-jai', 'tss-pc-controller']
  },
  {
    id: 'cholo-jai',
    slug: 'cholo-jai',
    name: 'Cholo Jai (চলো যায়)',
    shortName: 'Cholo Jai App',
    category: 'Mobility Technology / Ride Sharing',
    badge: 'Mobile Application',
    tagline: 'Your Journey, Made Simpler.',
    heroTitle: 'Travel Smarter. Reach Faster.',
    heroDescription: 'A smarter way to request rides and move around Kushtia.',
    shortDescription: 'Cholo Jai is a local ride-sharing platform developed by TSS Soft to make transportation easier, faster and more affordable in Kushtia and its surrounding designated routes.',
    objective: 'Making local transportation more accessible, convenient and affordable.',
    developerBadge: 'Developed by TSS Soft',
    type: 'mobile',
    typeLabel: 'Cross-Platform Mobile App',
    accentColor: '#10b981',
    accentGradient: 'from-emerald-600 via-green-600 to-teal-800',
    themeBg: 'bg-[#061814]',
    themeBorder: 'border-emerald-500/20 hover:border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    logo: '/projects/cholo-jai-logo.jpg',
    banner: '/projects/cholo-jai-app-banner.jpg',
    problem: 'People often face transportation difficulties, unnecessary waiting, unpredictable pricing, and challenges finding convenient rides to their destinations within Kushtia and nearby routes.',
    solution: 'Cholo Jai allows customers to select their pickup location and destination through an intuitive mobile application and send ride requests to available verified riders in real-time.',
    userRoles: [
      {
        role: 'Passenger / Customer',
        description: 'Choose pickup and drop-off points, check upfront fare estimates, request rides, and travel safely.'
      },
      {
        role: 'Rider / Partner',
        description: 'Receive nearby ride requests through the dedicated rider app, navigate efficiently, and earn with transparency.'
      }
    ],
    serviceCategories: [
      { name: 'Passenger Ride Sharing', status: 'Core Service', desc: 'On-demand motorcycle and car rides for quick, comfortable daily commutes.' },
      { name: 'Parcel Delivery', status: 'Service Category', desc: 'Secure local courier and package transport across designated routes.' },
      { name: 'Food Delivery', status: 'Service Category', desc: 'Convenient delivery category connecting local food spots with customers.' }
    ],
    keyFeatures: [
      { title: 'Customer Registration & Login', desc: 'Fast, secure mobile onboarding with phone verification and personal profiles.' },
      { title: 'Rider Registration', desc: 'Structured rider verification workflow ensuring community safety and compliance.' },
      { title: 'Pickup Location Selection', desc: 'Interactive GPS pin selection and landmark search for pinpoint pickup accuracy.' },
      { title: 'Destination Selection', desc: 'Easy destination input with route calculation and estimated travel time.' },
      { title: 'Ride Request System', desc: 'Automated dispatch broadcasting ride requests to the closest active riders.' },
      { title: 'Ride Booking Management', desc: 'Real-time booking status tracking from driver acceptance to arrival.' },
      { title: 'Rider & Customer Connection', desc: 'Direct in-app communication between driver and passenger during active trips.' },
      { title: 'Fare Information', desc: 'Transparent upfront fare calculation with no hidden charges or surprises.' },
      { title: 'Ride Status Management', desc: 'Step-by-step progress from driver en-route, trip started, to completed.' },
      { title: 'Dedicated Rider Application', desc: 'Purpose-built interface for riders to accept requests and view daily trip records.' }
    ],
    highlightFeature: {
      title: 'Effortless Route Dispatch & Upfront Fare Display',
      desc: 'Passengers select their destination and see transparent fare details before booking, while nearby riders receive instant requests.'
    },
    workflow: [
      { step: '01', title: 'Set Locations', desc: 'Passenger inputs pickup point and final destination on the mobile app.' },
      { step: '02', title: 'Confirm & Request', desc: 'App calculates upfront fare and route; passenger taps to send ride request.' },
      { step: '03', title: 'Rider Connects', desc: 'Closest rider accepts the booking and navigates directly to the pickup point.' },
      { step: '04', title: 'Reach Destination', desc: 'Safe, prompt journey completed with smooth ride status confirmation.' }
    ],
    techStack: ['Flutter', 'Dart', 'Node.js', 'WebSockets', 'PostgreSQL', 'Map APIs'],
    relatedSlugs: ['cholo-jai-website', 'tss-pc-controller']
  },
  {
    id: 'tss-pc-controller',
    slug: 'tss-pc-controller',
    name: 'TSS PC Controller',
    shortName: 'TSS PC Controller',
    category: 'Remote Desktop / Windows Control Technology',
    badge: 'Desktop & Mobile Utility',
    tagline: 'Your PC. Your Control. Anywhere.',
    heroTitle: 'Your Windows PC, In the Palm of Your Hand.',
    heroDescription: 'Control, monitor and manage your Windows computer directly from your smartphone.',
    shortDescription: 'TSS PC Controller is a remote Windows PC management solution that enables users to control and monitor their computers directly from a smartphone.',
    objective: 'Making computer management seamless, remote and accessible from any smartphone.',
    developerBadge: 'Developed by TSS Soft',
    type: 'system',
    typeLabel: 'Windows Desktop & Mobile Control',
    accentColor: '#2563eb',
    accentGradient: 'from-blue-600 via-cyan-600 to-indigo-900',
    themeBg: 'bg-[#050b1e]',
    themeBorder: 'border-blue-500/20 hover:border-blue-500/50',
    glowColor: 'rgba(37, 99, 235, 0.25)',
    logo: '/projects/tss-pc-controller-logo.jpg',
    banner: '/projects/tss-pc-controller-banner.jpg',
    problem: 'Managing a Windows PC often requires being physically present in front of the computer. Users frequently need a reliable, low-latency way to inspect desktop progress, trigger downloads, control media, or shutdown their systems remotely without expensive enterprise setups.',
    solution: 'TSS PC Controller bridges a native mobile application with a lightweight Windows background host service, empowering users to execute full mouse and keyboard operations, run system tasks, and watch their PC display live from their handheld device.',
    specialHighlight: {
      badge: 'FLAGSHIP CAPABILITY',
      title: 'LIVE SCREEN MONITORING',
      desc: 'Users can stream and inspect their live Windows PC desktop directly from the mobile app interface in real-time, allowing continuous monitoring of renders, downloads, and system activity from anywhere in the room.'
    },
    userRoles: [
      {
        role: 'Computer Operator / Power User',
        description: 'Connect personal smartphone to one or multiple Windows machines for effortless remote command execution and live surveillance.'
      },
      {
        role: 'Host Windows Machine',
        description: 'Runs lightweight background service listening for authorized paired mobile commands over secure local or networked protocols.'
      }
    ],
    keyFeatures: [
      { title: 'Live PC Screen Viewing', desc: 'Real-time low-latency desktop frame streaming straight to your smartphone display.' },
      { title: 'Live Screen Monitoring', desc: 'Continuous surveillance of background tasks, game downloads, or encoding progress.' },
      { title: 'Dedicated PC Keyboard Layout', desc: 'Full PC keyboard with Windows keys, Ctrl, Alt, Shift, and function keys on mobile.' },
      { title: 'Remote Mouse Control', desc: 'Touchpad trackpad emulation with multi-touch click, drag, and scrolling.' },
      { title: 'System Command Execution', desc: 'Run predefined shortcuts, terminal commands, or launch designated programs.' },
      { title: 'Remote Shutdown', desc: 'Power down your Windows computer safely with a single tap from your bed or desk.' },
      { title: 'Remote Restart', desc: 'Reboot your machine remotely after updates or prolonged computational jobs.' },
      { title: 'Remote Lock', desc: 'Instantly lock the Windows desktop session to secure your workstation.' },
      { title: 'Sleep Control', desc: 'Put the PC into power-saving sleep mode and conserve energy on demand.' },
      { title: 'Multiple PC Management', desc: 'Switch between various paired workstations or media centers effortlessly.' },
      { title: 'Connected Device Management', desc: 'View paired devices and authorize only trusted smartphones for control.' },
      { title: 'PC Status Monitoring', desc: 'Check connectivity status and response times of your Windows workstation.' }
    ],
    highlightFeature: {
      title: 'Live Screen Streaming & Mobile Trackpad Emulation',
      desc: 'Users can view their live Windows screen and smoothly glide the mouse cursor with low-latency touch controls.'
    },
    workflow: [
      { step: '01', title: 'Launch Host Server', desc: 'Run the lightweight TSS PC Controller service on the Windows computer.' },
      { step: '02', title: 'Pair Smartphone', desc: 'Open mobile app and connect to the host computer with one-tap authentication.' },
      { step: '03', title: 'Live Screen & Controls', desc: 'Instantly view your live desktop display and navigate using the virtual trackpad.' },
      { step: '04', title: 'Execute Commands', desc: 'Trigger system power, keyboard inputs, media actions, or lock the machine.' }
    ],
    techStack: ['Windows Core API', 'C# / .NET', 'Flutter Mobile', 'WebSockets', 'Screen Capture API'],
    relatedSlugs: ['tutors-kushtia', 'cholo-jai']
  },
  {
    id: 'gramalo-solar-solution',
    slug: 'gramalo-solar-solution',
    name: 'GramAlo Solar Solution',
    shortName: 'GramAlo Solar',
    category: 'Solar Energy / Renewable Energy / Business Website',
    badge: 'Solar Business Website',
    tagline: 'Powering a Brighter Future with Solar Energy.',
    heroTitle: 'Clean Energy for a Brighter Tomorrow.',
    heroDescription: 'Explore our range of solar products, battery solutions and renewable energy systems for a sustainable future.',
    shortDescription: 'GramAlo Solar Solution is a solar energy business website designed to showcase solar products, battery-powered solutions and renewable energy products in a professional digital environment.',
    objective: 'Making Solar Energy Solutions More Accessible.',
    developerBadge: 'Developed by TSS Soft',
    type: 'web',
    typeLabel: 'Commercial Business Website',
    accentColor: '#16a34a',
    accentGradient: 'from-emerald-600 via-amber-500 to-green-700',
    themeBg: 'bg-[#07150e]',
    themeBorder: 'border-emerald-500/20 hover:border-emerald-500/50',
    glowColor: 'rgba(22, 163, 74, 0.25)',
    logo: '/projects/gramalo-solar-logo.png',
    banner: '/projects/gramalo-solar-banner.jpg',
    problem: 'Customers interested in solar energy products need clear product information and an organized way to explore available solutions. A professional digital presence is important for building brand recognition and communicating product offerings.',
    solution: 'TSS Soft developed a modern business website for GramAlo Solar Solution with an emphasis on product presentation, clean navigation and responsive design.',
    projectStory: 'GramAlo Solar Solution is a business focused on selling solar energy products and solar + battery-powered products. TSS Soft developed its website to provide a professional online presence and present its product range in an organized and accessible way. The website helps visitors explore different solar products, understand product information and learn about the company\'s offerings.',
    userRoles: [
      {
        role: 'Home & Business Owner',
        description: 'Browse residential and commercial solar panels, inverter solutions, and energy storage systems.'
      },
      {
        role: 'Renewable Energy Inquirer',
        description: 'Review product specifications, learn about solar efficiency, and request custom capacity consultations.'
      }
    ],
    keyFeatures: [
      { title: 'Solar Product Showcase', desc: 'Organized visual catalog of solar panels, inverters, and battery systems.' },
      { title: 'Solar Panel Products', desc: 'Detailed specifications of high-efficiency monocrystalline and polycrystalline panels.' },
      { title: 'Solar Battery Solutions', desc: 'Reliable deep-cycle and tubular solar batteries for resilient energy backup.' },
      { title: 'Solar + Battery Powered Products', desc: 'Integrated hybrid kits designed for rural homes, agricultural pumps, and businesses.' },
      { title: 'Product Categories', desc: 'Intuitive categorization allowing visitors to quickly find relevant energy hardware.' },
      { title: 'Product Information', desc: 'Clear, easily readable explanations of wattage, capacity, and application scope.' },
      { title: 'Product Specifications', desc: 'Technical sheets highlighting durability, cell quality, and operational parameters.' },
      { title: 'Business Information', desc: 'Transparent company profile, showroom details, and contact points.' },
      { title: 'Responsive Website Layout', desc: 'Seamlessly adaptable presentation across smartphones, tablets, and desktops.' },
      { title: 'Modern Product Presentation', desc: 'High-clarity product photography and clean typography aligned with green energy aesthetics.' }
    ],
    highlightFeature: {
      title: 'Organized Product Range & Technical Clarity',
      desc: 'Visitors can effortlessly browse solar panels, batteries, and integrated power kits with structured product specifications.'
    },
    workflow: [
      { step: '01', title: 'Explore Catalog', desc: 'Visitors browse categories covering panels, storage batteries, and hybrid kits.' },
      { step: '02', title: 'Inspect Specs', desc: 'Review wattage, backup capacity, and technical dimensions for each product.' },
      { step: '03', title: 'Learn About GramAlo', desc: 'Read company vision and sustainable energy commitments for rural communities.' },
      { step: '04', title: 'Connect Directly', desc: 'Use verified contact details to inquire regarding installation and procurement.' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
    relatedSlugs: ['cholo-jai-website', 'tutors-kushtia']
  },
  {
    id: 'cholo-jai-website',
    slug: 'cholo-jai-website',
    name: 'Cholo Jai — চলো যায় (Official Website)',
    shortName: 'Cholo Jai Web',
    category: 'Mobility Technology / Ride Sharing / Business Website',
    badge: 'Official Brand Website',
    tagline: 'Your Journey, Made Simpler.',
    heroTitle: 'Travel Smarter. Reach Faster.',
    heroDescription: 'The official digital home for Kushtia’s smart ride sharing platform.',
    shortDescription: 'Cholo Jai is a local ride-sharing platform serving Kushtia and designated surrounding routes. Alongside its mobile applications, TSS Soft developed the official website to communicate the platform\'s services, fares, mission, vision and company information.',
    objective: 'Making Local Transportation Smarter, Easier and More Accessible.',
    developerBadge: 'Developed by TSS Soft',
    type: 'web',
    typeLabel: 'Official Commercial Website',
    accentColor: '#10b981',
    accentGradient: 'from-emerald-600 via-teal-600 to-green-800',
    themeBg: 'bg-[#061814]',
    themeBorder: 'border-emerald-500/20 hover:border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    logo: '/projects/cholo-jai-logo.jpg',
    banner: '/projects/cholo-jai-website-banner.jpg',
    problem: 'People need a convenient way to understand local ride-sharing services, check transportation fares, explore available routes, and learn about the platform before using the mobile application.',
    solution: 'TSS Soft created an official website that presents Cholo Jai\'s services, transparent fare guidelines, routes, mission, and company information in a clear and organized format.',
    projectStory: 'Cholo Jai aims to make local transportation easier, more affordable and more convenient. TSS Soft developed both the Cholo Jai mobile platform and its official website. The website provides visitors with information about the transportation service, available routes, fare details, company mission, vision and the overall platform.',
    mission: 'Making everyday travel across Kushtia effortless, transparent, and accessible through reliable digital ride-sharing infrastructure.',
    vision: 'Establishing a modern, trusted mobility network that empowers commuters and riders with predictable fares and seamless transportation.',
    specialHighlight: {
      badge: 'CORE WEBSITE CAPABILITY',
      title: 'TRANSPARENT FARE VIEWING SYSTEM',
      desc: 'The official Cholo Jai website features an intuitive fare viewing experience that enables passengers and commuters to inspect route fares and understand pricing structures before traveling.'
    },
    userRoles: [
      {
        role: 'Prospective Commuter',
        description: 'Review route information, inspect standard fare structures, and discover how ride booking operates.'
      },
      {
        role: 'Prospective Rider Partner',
        description: 'Learn about onboarding standards, partnership advantages, and company background.'
      }
    ],
    serviceCategories: [
      { name: 'Passenger Ride Sharing', status: 'Core Service', desc: 'On-demand motorcycle and car transport across Kushtia.' },
      { name: 'Parcel Delivery', status: 'Service Category', desc: 'Express point-to-point item transportation across designated routes.' },
      { name: 'Food Delivery', status: 'Service Category', desc: 'Dedicated food delivery solutions connecting local culinary spots.' }
    ],
    keyFeatures: [
      { title: 'Official Brand Website', desc: 'High-trust digital headquarters presenting company identity and service standards.' },
      { title: 'Ride Sharing Service Information', desc: 'Detailed explanations of passenger travel, rider matching, and booking procedures.' },
      { title: 'Route Information', desc: 'Overview of supported travel routes across Kushtia and neighboring zones.' },
      { title: 'Fare Viewing System', desc: 'Interactive feature allowing visitors to explore route fare information transparently.' },
      { title: 'Mission & Vision', desc: 'Clear articulation of the company’s community impact and transport aspirations.' },
      { title: 'About Cholo Jai', desc: 'Background story and origin of the Kushtia-first mobility initiative.' },
      { title: 'Passenger Ride Information', desc: 'Safety guidelines, travel tips, and passenger conveniences.' },
      { title: 'Parcel Delivery Information', desc: 'Guidelines for sending lightweight parcels and time-sensitive packages.' },
      { title: 'Food Delivery Information', desc: 'Overview of upcoming culinary delivery channels.' },
      { title: 'Contact Information', desc: 'Direct corporate support, hotline details, and feedback channels.' },
      { title: 'Responsive Website Design', desc: 'Pixel-perfect responsiveness across mobile devices, tablets, and wide monitors.' }
    ],
    highlightFeature: {
      title: 'Transparent Route & Fare Information Display',
      desc: 'Enables commuters to review route fares and understand travel costs with complete confidence.'
    },
    workflow: [
      { step: '01', title: 'Visit Platform Site', desc: 'Commuter arrives at the official brand portal to explore services.' },
      { step: '02', title: 'Inspect Fare Details', desc: 'Check standard fare ranges and route coverage across Kushtia.' },
      { step: '03', title: 'Discover Services', desc: 'Learn about passenger rides, parcel transport, and community safety.' },
      { step: '04', title: 'Connect with Platform', desc: 'Engage with Cholo Jai support or initiate mobile ride requests.' }
    ],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'Edge Optimization'],
    relatedSlugs: ['cholo-jai', 'gramalo-solar-solution']
  }
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug) || null;
}

export function getAllProjectSlugs() {
  return projectsData.map((p) => p.slug);
}
