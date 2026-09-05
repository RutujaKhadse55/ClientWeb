export const authorsData = [
  {
    id: "ananya-sengupta",
    name: "Ananya Sengupta",
    role: "Senior Bureau Chief — Economy & Macro Policy",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    bio: "Ananya covers the Reserve Bank of India, Ministry of Finance, macro-economic policy, and fiscal trends. She has over 14 years of experience across leading Indian financial dailies and holds a Master’s in Economics from the Delhi School of Economics.",
    location: "New Delhi",
    twitter: "@ananya_sengupta_ibc",
    email: "ananya.sengupta@indianbusinesschronicle.in",
    articleCount: 6
  },
  {
    id: "raghavan-nair",
    name: "Raghavan Nair",
    role: "Markets & Derivatives Editor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    bio: "Raghavan tracks Dalal Street, institutional capital flows (FII/DII), primary market IPOs, and SEBI regulatory enforcement. A Chartered Financial Analyst (CFA) by training, he previously headed equity research at an institutional brokerage.",
    location: "Mumbai",
    twitter: "@raghavan_markets",
    email: "raghavan.nair@indianbusinesschronicle.in",
    articleCount: 5
  },
  {
    id: "vikram-malhotra",
    name: "Vikram Malhotra",
    role: "Corporate Strategy & Conglomerates Bureau",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    bio: "Vikram reports on Indian conglomerates, cross-border M&A, executive leadership shakeups, and corporate governance. He has reported on corporate India for over 16 years and was awarded the Ramnath Goenka Excellence in Journalism Award in 2021.",
    location: "Mumbai",
    twitter: "@vmalhotra_biz",
    email: "vikram.malhotra@indianbusinesschronicle.in",
    articleCount: 5
  },
  {
    id: "pooja-sundaram",
    name: "Pooja Sundaram",
    role: "Tech, AI & Startup Desk Lead",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    bio: "Based in Bengaluru, Pooja covers venture capital trends, SaaS unicorns, quick-commerce battles, generative AI deployments in Indian enterprise, and founder governance across India's startup ecosystem.",
    location: "Bengaluru",
    twitter: "@poojasun_tech",
    email: "pooja.sundaram@indianbusinesschronicle.in",
    articleCount: 4
  },
  {
    id: "arun-k-sharma",
    name: "Arun K. Sharma",
    role: "Banking & Financial Services Editor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
    bio: "Arun specializes in the banking system, NBFC liquidity, credit cycles, fintech compliance, and digital payment infrastructure. He is a regular commentator on television business panels and public policy forums.",
    location: "Mumbai",
    twitter: "@arunsharma_banking",
    email: "arun.sharma@indianbusinesschronicle.in",
    articleCount: 4
  },
  {
    id: "devika-menon",
    name: "Devika Menon",
    role: "Energy, Infrastructure & EV Bureau",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    bio: "Devika writes about the green energy transition, national highway infrastructure, logistics corridors, automotive manufacturing, and India's semiconductor supply chain investments.",
    location: "New Delhi",
    twitter: "@devikamenon_energy",
    email: "devika.menon@indianbusinesschronicle.in",
    articleCount: 3
  },
  {
    id: "sanjay-venkatesh",
    name: "Dr. Sanjay Venkatesh",
    role: "Contributing Columnist & Consulting Economist",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    bio: "Dr. Venkatesh is a Senior Fellow at the Centre for Asian Economic Studies and former Advisor to multilateral trade bodies. His fortnightly column 'The Macro Pulse' provides deep structural critique on Indian trade policy and industrial competitiveness.",
    location: "New Delhi / Singapore",
    twitter: "@sanjay_econ_pulse",
    email: "sanjay.venkatesh@ibc-contributors.in",
    articleCount: 3
  }
];

export function getAuthorById(id) {
  return authorsData.find(a => a.id === id) || authorsData[0];
}
