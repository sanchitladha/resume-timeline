export interface DescriptionGroup {
  heading?: string;
  items: string[];
}

export interface FeaturedContent {
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
}

export interface WorkExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description?: string[];
  groupedDescription?: DescriptionGroup[];
  featuredContent?: FeaturedContent;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    location?: string;
  };
  workExperience: WorkExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
}

export const resumeData: ResumeData = {
  name: 'Sanchit Ladha',
  title: 'Product Strategy & Operations Leader',
  summary: 'Product Strategy & Operations leader with 11+ years of experience spanning 0-to-1 product incubation, GenAI-focused product strategy & commercialization, and strategy consulting. Currently lead Adobe\'s Incubator, where I work directly with product, engineering, design, and GTM teams to identify, sequence, and operationalize new AI product bets from concept to validation to launch.',
  contact: {
    email: 'sanchit.ladha@gmail.com',
    phone: '404.375.9140',
    location: 'San Francisco, CA',
  },
  workExperience: [
    {
      company: 'Adobe Inc.',
      position: 'Principal, Adobe Incubator Product Strategy & Ops',
      duration: 'Mar 2024 - Present',
      location: 'San Francisco, CA',
      color: '#FF0000',
      description: [
        'Built Adobe\'s first 0-to-1 product Incubator (modeled after YC & Google\'s Area120), defining how early-stage AI product ideas are evaluated, prioritized, resourced, and translated into executable roadmaps',
        'Defined product adjacencies and whitespaces for Incubator to invest informed by GenAI developments, evolving user workflows, and competitive dynamics; designed and ran an annual venture Pitch Day growing submissions 265% YoY (46 to 168)',
        'Led product strategy for 7 AI-first product ventures; 3 products successfully graduated into the BU (<a href="https://firefly.adobe.com/boards" target="_blank" rel="noopener noreferrer">Firefly Boards</a>, <a href="https://business.adobe.com/products/brand-concierge.html" target="_blank" rel="noopener noreferrer">Brand Concierge</a>, <a href="https://podcast.adobe.com/en" target="_blank" rel="noopener noreferrer">Adobe Podcast</a>) based on early PMF signals',
        'Manage $30M operating budget across Incubator portfolio, allocating headcount and other spend based on milestone-based gating criteria',
        'Authored 150+ editions of "This Week in GenAI" newsletter tracking developments and implications for Adobe - circulated to Executive Leadership',
      ],
      featuredContent: {
        image: '/incubator-pitch-day.png',
        imageAlt: 'Adobe Incubator Pitch Day 2025 - Team photo',
        link: 'https://blog.adobe.com/en/publish/2025/11/17/adobes-new-incubator-creates-future?sdid=V6NZKF7Z&mv=social&mv2=owned-organic&linkId=100000392585252',
        linkText: 'Blog post covering Incubator\'s Pitch Day in 2025',
      },
    },
    {
      company: 'Adobe Inc.',
      position: 'Sr. Manager Corporate Strategy',
      duration: 'Sep 2022 - Mar 2024',
      location: 'San Francisco, CA',
      color: '#FF0000',
      description: [
        'Led Experience Cloud\'s 3-year product strategy, identifying adjacencies unlocked by GenAI; one initiative progressed from strategy to internal incubation and toward productization (<a href="https://business.adobe.com/products/genstudio-for-performance-marketing.html" target="_blank" rel="noopener noreferrer">GenStudio</a>)',
        'Drove Adobe\'s "3D for 2D" AI strategy, building the investment case for licensing high-quality 3D datasets to improve generative video and image models; resulted in product releases like <a href="https://www.youtube.com/watch?v=gfct0aH2COw" target="_blank" rel="noopener noreferrer">Project Turntable</a>',
        'Crafted Adobe\'s AI narrative for Investor Day 2023, framing the shift in time spent by creatives from precision editing to ideation and democratization of creation',
      ],
    },
    {
      company: 'McKinsey & Company',
      position: 'Engagement Manager / Associate',
      duration: 'Sep 2019 - Aug 2022',
      location: 'New York, NY',
      color: '#00539B',
      groupedDescription: [
        {
          heading: 'Select, Relevant Project Experience',
          items: [],
        },
        {
          heading: 'Product, Pricing and GTM Strategy – B2B MarTech / AdTech player',
          items: [
            'Defined 3-year product vision and roadmap through qualitative and quantitative "voice of customer" research, articulating where to play, how to compete, and buy/build/partner decisions',
            'Drove 5% ARR uplift by transitioning from feature-level selling to a value-based "Good, Better, Best" enterprise platform pricing model, informed by customer value perception and competitor benchmarks',
            'Designed a new Enterprise sales motion to support 25% annual growth while cutting 15% in costs – developed segmentation, coverage model, and role architecture to enable scale',
          ],
        },
        {
          heading: 'Commercialization strategy for a Public Health awareness product with MIT Media Lab',
          items: [
            'Secured 3 launch partners – including Massachusetts Dept. of Public Health – by crafting differentiated value propositions for a sentiment-tracking product built on real-time Twitter data',
            'Delivered 10 p.p shift in vaccine sentiment through targeted influencer campaign based on audience clusters',
          ],
        },
      ],
    },
    {
      company: 'Berkshire Partners',
      position: 'Associate, Value Creation Group',
      duration: 'Jun 2016 - May 2017',
      location: 'Boston, MA',
      color: '#1B4D3E',
      description: [
        'Worked with portfolio companies on value creation initiatives in upper middle-market PE firm (>$6B AUM)',
        'Led operational improvement projects across portfolio companies',
      ],
    },
    {
      company: 'Columbia Business School',
      position: 'MBA Student - Graduate Education',
      duration: 'Aug 2017 - May 2019',
      location: 'New York, NY',
      color: '#B9D9EB',
      description: [
        'Pursued MBA in Strategy and Management',
        'VP of Events on Student Executive Board, Peer Advisor',
        'Recipient of Student Service Award',
        'Focused on corporate strategy, product management, and entrepreneurship',
      ],
    },
    {
      company: 'Monitor Deloitte',
      position: 'Consultant / Analyst',
      duration: 'Jul 2012 - May 2016',
      location: 'Atlanta, GA & New York, NY',
      color: '#86BC25',
      description: [
        'Strategy consulting across multiple industries and functions',
        'Led client engagements on corporate strategy, growth, and operational excellence',
      ],
    },
  ],
  skills: [
    {
      category: 'Core Expertise',
      skills: ['Product Strategy', 'GenAI/AI Strategy', 'Product Ops', '0-to-1 Incubation'],
    },
    {
      category: 'Product & GTM',
      skills: ['Product Management', 'Commercialization', 'Pricing Strategy', 'Sales Motion Design'],
    },
    {
      category: 'Strategic',
      skills: ['Strategy Consulting', 'Roadmap Planning', 'Portfolio Management', 'Budget Management'],
    },
    {
      category: 'Industry',
      skills: ['Enterprise SaaS', 'MarTech/AdTech', 'Creative Tools', 'B2B Platforms'],
    },
  ],
  education: [
    {
      institution: 'Columbia Business School',
      degree: 'MBA, Strategy and Management',
      year: '2017 - 2019',
      details: 'VP of Events Student Executive Board, Student Service Award',
    },
    {
      institution: 'Georgia Tech',
      degree: 'BS, Electrical Engineering',
      year: '2008 - 2012',
      details: 'Minor: Economics, Certificate: Finance, 2012 International Student Leader of the Year',
    },
  ],
};
