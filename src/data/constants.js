const c = (file) => `/campaign/${file}`;

export const SITE = {
  name: "Not Too Young To Vote",
  tagline: "Ma Vote 2025 na pawa",
  mission: "Promoting youth advocacy on civil rights and enhancing youth participation in elections across Cameroon.",
  phone: "+237 693 322 469",
  phoneAlt: "+237 679 814 442",
  email: "info@mddtcameroon.org",
  website: "www.mddtcameroon.org",
  address: "Express Exchange Building – Molyko, Buea, South West Region, Cameroon",
  hashtags: ["#NotTooYoungToVote", "#MaVoteNaPawa", "#PasTropJeunePourVoter"],
  social: {
    youtube: "https://www.youtube.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://x.com",
  },
};

export const IMGS = {
  hero: "/images/hero.png",
  community: c("community-gathering.jpg"),
  ballot: c("elecam-outreach.jpg"),
  parliament: c("advocacy-fists.jpg"),
  youth1: c("youth-leaders.jpg"),
  youth2: c("youth-volunteers.jpg"),
  advocacy: c("conference-speaker.jpg"),
  election: c("registration-queue.jpg"),
  vote_sign: c("banner-ntytv.jpg"),
  meeting: c("conference-buea.jpg"),
  panel: c("workshop-session.jpg"),
  crowd: c("inclusive-outreach.jpg"),
  africa_sky: c("mountain-outreach.jpg"),
  register: c("registration-biometric.jpg"),
  volunteer: c("youth-volunteers.jpg"),
  cameroon: c("mountain-outreach.jpg"),
  id_card: c("voter-card-holder.jpg"),
  fingerprint: c("registration-biometric.jpg"),
  speaker: c("conference-speaker.jpg"),
  handshake: c("team-group.jpg"),
  classroom: c("school-outreach.jpg"),
  portrait1: c("civic-pageant.jpg"),
  portrait2: c("partner-portrait.jpg"),
  portrait3: c("music-festival.jpg"),
  protest: c("advocacy-fists.jpg"),
  traditional: c("civic-pageant.jpg"),
  ballot_hand: c("voter-card-holder.jpg"),
  team1: c("team-office.jpg"),
  team2: c("team-group.jpg"),
  team3: c("youth-leaders.jpg"),
  map: c("conference-buea.jpg"),
  conference: c("conference-buea.jpg"),
  elecam: c("elecam-outreach.jpg"),
  banner: c("banner-ntytv.jpg"),
  civicPageant: c("civic-pageant.jpg"),
  filmFestival: c("film-festival-crowd.jpg"),
  missCivic: c("poster-miss-civic-swr.jpg"),
  workshop: c("workshop-session.jpg"),
  inclusive: c("inclusive-outreach.jpg"),
  musicFestival: c("music-festival.jpg"),
  registrationQueue: c("registration-queue.jpg"),
  teamGroup: c("team-group.jpg"),
  voterCard: c("voter-card-holder.jpg"),
  mountain: c("mountain-outreach.jpg"),
  school: c("school-outreach.jpg"),
  westPoster: c("west-ambassadors-poster.jpg"),
  youthRally: c("youth-rally.jpg"),
  registrationEvent: c("registration-event.jpg"),
  registrationTable: c("registration-table.jpg"),
};

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Voting & Registration",
    children: [
      { label: "Register to Vote", path: "/register" },
      { label: "How To Obtain A Voter's Card", path: "/blog/how-to-obtain-voters-card" },
      { label: "Electoral Process in Cameroon", path: "/blog/electoral-process-cameroon" },
    ],
  },
  { label: "Blog & News", path: "/blog" },
  {
    label: "Get Involved",
    children: [
      { label: "Partner With Us", path: "/get-involved/partner" },
      { label: "Volunteer With Us", path: "/get-involved/volunteer" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_LINKS = {
  quick: [
    { label: "About Us", path: "/about" },
    { label: "Upcoming Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
  ],
  resources: [
    { label: "FAQs", path: "/faqs" },
    { label: "Resources", path: "/services" },
  ],
  involved: [
    { label: "Become a Partner", path: "/get-involved/partner" },
    { label: "Register to Vote", path: "/register" },
    { label: "Volunteer With Us", path: "/get-involved/volunteer" },
  ],
};

export const ARTICLES = [
  {
    id: 1,
    slug: "how-to-obtain-voters-card",
    title: "How To Obtain A Voter's Card In Cameroon: A Detailed Guide",
    date: "JAN 23, 2025",
    displayDate: "January 23, 2025",
    excerpt: "Register at ELECAM with your National ID, complete biometric capture, and collect your voter card before election day.",
    img: IMGS.register,
    path: "/blog/how-to-obtain-voters-card",
    author: "Youth Advocacy Team",
  },
  {
    id: 2,
    slug: "electoral-process-cameroon",
    title: "The Electoral Process in Cameroon: Elections, Laws, and Institutions",
    date: "MAR 23, 2023",
    displayDate: "March 23, 2023",
    excerpt: "How presidential, parliamentary, municipal, and regional elections are organized under the Constitution and Electoral Code.",
    img: IMGS.meeting,
    path: "/blog/electoral-process-cameroon",
    author: "John Doe",
  },
  {
    id: 3,
    slug: "elecam-explained",
    title: "ELECAM Explained: Cameroon's Elections Management Body",
    date: "NOV 12, 2024",
    displayDate: "November 12, 2024",
    excerpt: "Elections Cameroon (ELECAM) runs voter registration, trains election officials, and supervises polling and results transmission.",
    img: IMGS.elecam,
    path: "/blog/elecam-explained",
    author: "Youth Advocacy Team",
  },
  {
    id: 4,
    slug: "presidential-elections-cameroon",
    title: "Presidential Elections in Cameroon: Terms, Timelines, and the Two-Round Vote",
    date: "OCT 05, 2024",
    displayDate: "October 5, 2024",
    excerpt: "The President is elected by direct universal suffrage for a seven-year term, with a possible second round if no candidate wins outright.",
    img: IMGS.conference,
    path: "/blog/presidential-elections-cameroon",
    author: "Youth Advocacy Team",
  },
  {
    id: 5,
    slug: "municipal-elections-cameroon",
    title: "Municipal Elections in Cameroon: Mayors, Councillors, and Local Democracy",
    date: "SEP 18, 2024",
    displayDate: "September 18, 2024",
    excerpt: "Municipal polls choose mayors and municipal councillors who deliver services in cities and communes across all ten regions.",
    img: IMGS.community,
    path: "/blog/municipal-elections-cameroon",
    author: "Youth Advocacy Team",
  },
  {
    id: 6,
    slug: "regional-elections-decentralization",
    title: "Regional Elections and Decentralization: What Changed in 2020",
    date: "AUG 02, 2024",
    displayDate: "August 2, 2024",
    excerpt: "Cameroon held its first regional council elections in December 2020, advancing the 1996 decentralization reforms.",
    img: IMGS.civicPageant,
    path: "/blog/regional-elections-decentralization",
    author: "Youth Advocacy Team",
  },
  {
    id: 7,
    slug: "voter-eligibility-cameroon",
    title: "Voter Eligibility in Cameroon: Age, Residency, and Civil Rights",
    date: "JUL 14, 2024",
    displayDate: "July 14, 2024",
    excerpt: "To vote you must be Cameroonian, at least 20 years old, resident in your municipality for six months, and not stripped of political rights.",
    img: IMGS.voterCard,
    path: "/blog/voter-eligibility-cameroon",
    author: "Youth Advocacy Team",
  },
  {
    id: 8,
    slug: "polling-day-cameroon",
    title: "Polling Day in Cameroon: From the Polling Station to Results",
    date: "JUN 28, 2024",
    displayDate: "June 28, 2024",
    excerpt: "What happens when you arrive at the polling station, how ballots are cast in secret, and how ELECAM announces results.",
    img: IMGS.banner,
    path: "/blog/polling-day-cameroon",
    author: "Youth Advocacy Team",
  },
];

export const COMMENTS = [
  { name: "Aminata N.", avatar: "AN", time: "2 hours ago", text: "The registration drive in Buea helped me understand exactly what documents ELECAM needs. I got my voter card the same week." },
  { name: "Brian T.", avatar: "BT", time: "5 hours ago", text: "Ma Vote 2025 na pawa is more than a slogan — our university group used these guides before the civic conference at Chariot Hotel." },
  { name: "Grace M.", avatar: "GM", time: "1 day ago", text: "I appreciated the article on regional elections. Decentralization finally makes sense in plain language." },
];

export const PARTNERS = ["MDDT Cameroon", "NED", "One Youth One Dream", "ELECAM", "CLIQ Empire", "Youth Dream"];

export const SERVICES = [
  { title: "Voter Registration Drives", desc: "On-the-ground registration with ELECAM, biometric capture, and help obtaining your National ID and voter card.", color: "bg-blue-50" },
  { title: "Youth Civic Education", desc: "Conferences, school outreach, and media campaigns including One Youth One Dream and Mr & Miss Civic Cameroon.", color: "bg-pink-50" },
  { title: "Mr & Miss Civic Cameroon", desc: "Ambassadors who represent regions and promote civil rights, voter registration, and non-violence.", color: "bg-yellow-50" },
  { title: "Inclusive Democracy Programs", desc: "Workshops on equal access to justice for persons with disabilities and marginalized youth.", color: "bg-gray-50" },
  { title: "Community Partnerships", desc: "Collaboration with NED, local NGOs, and regional councils to reach all ten regions.", color: "bg-green-50" },
  { title: "Election Observation & Advocacy", desc: "Training youth to observe polling stations and report issues through official channels.", color: "bg-purple-50" },
];

export const FAQ_SECTIONS = [
  {
    title: "General Question",
    items: [
      {
        q: "What are the type of elections in cameroon",
        a: [
          "Presidential Elections – elect the President of the Republic.",
          "Parliamentary Elections – elect members of the National Assembly.",
          "Municipal Elections – elect mayors and municipal councillors.",
          "Regional Elections – elect regional councillors.",
        ],
      },
      { q: "What is the criteria for Voting and am I eligible?", a: "You must be a Cameroonian citizen, at least 20 years old, have resided in your municipality for at least 6 months, and not be stripped of civil and political rights." },
      { q: "How do I register to vote?", a: "Visit any ELECAM registration centre from January through 31 August each year with your National Identity Card and proof of residency. Your biometric data will be captured; you receive a receipt, then your voter's card when ready. Check your status on elecam.cm after registering." },
    ],
  },
  {
    title: "Voting",
    items: [
      { q: "Where can I obtain my voter's card?", a: "At any ELECAM office in your municipality before election day." },
      { q: "What documents do I need?", a: "A valid National Identity Card is required for registration and voter identification." },
      { q: "Can I vote without a voter's card?", a: "If your card is lost, your name remains on the register and you may vote with your national identity card in some cases." },
    ],
  },
];

export const POPULAR_QUESTIONS = [
  { label: "Voter Eligibility in Cameroon: Age, Residency, and Civil Rights", path: "/blog/voter-eligibility-cameroon" },
  { label: "How To Obtain A Voter's Card In Cameroon", path: "/blog/how-to-obtain-voters-card" },
  { label: "The Electoral Process in Cameroon", path: "/blog/electoral-process-cameroon" },
];

export const EVENTS = [
  { title: "One Youth One Dream Conference", location: "Chariot Hotel, Buea", date: "Sat, 02 Nov 2024", time: "5:00pm – 8:00pm", img: IMGS.conference },
  { title: "Mr & Miss Civic Cameroon – SWR", location: "Chariot Hotel, Buea", date: "Sat, 02 Nov 2024", time: "5:00pm – 8:00pm", img: IMGS.missCivic },
  { title: "Cameroon International Music Festival Outreach", location: "Outdoor venue", date: "2024", time: "All day", img: IMGS.musicFestival },
  { title: "Regional Workshops of Trainers – Buea", location: "Buea, South West", date: "11–15 Mar 2024", time: "Full week", img: IMGS.workshop },
  { title: "Inclusive Democracy & Disability Rights", location: "Community centre", date: "2024", time: "TBA", img: IMGS.inclusive },
  { title: "School Voter Awareness – Track Event", location: "Secondary school", date: "2024", time: "Morning session", img: IMGS.classroom },
  { title: "Mountain Region Outreach – Not Too Young To Vote", location: "Rural commune", date: "2024", time: "All day", img: IMGS.africa_sky },
];

export const GALLERY_PHOTOS = [
  IMGS.conference, IMGS.registration, IMGS.elecam, IMGS.banner, IMGS.teamGroup,
  IMGS.civicPageant, IMGS.voterCard, IMGS.musicFestival, IMGS.inclusive, IMGS.mountain,
  IMGS.school, IMGS.registrationQueue, IMGS.team1, IMGS.filmFestival,
  IMGS.missCivic, IMGS.westPoster, IMGS.workshop, IMGS.youthRally, IMGS.community,
  IMGS.registrationEvent, IMGS.youth1, IMGS.parliament,
];

export const GALLERY_VIDEOS = [
  IMGS.conference, IMGS.workshop, IMGS.filmFestival, IMGS.registration,
  IMGS.missCivic, IMGS.inclusive, IMGS.community, IMGS.speaker, IMGS.elecam,
];
