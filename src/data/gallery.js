import { IMGS } from "./constants";
import { LEGACY_GALLERY_ITEMS } from "./legacyImages";
import { TEAM_MEMBERS } from "./team";

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All photos" },
  { id: "events", label: "Events & forums" },
  { id: "outreach", label: "Outreach & registration" },
  { id: "archive", label: "Archive" },
  { id: "team", label: "Team" },
];

const CAMPAIGN_ITEMS = [
  {
    id: "miss-civic-awards",
    src: IMGS.missCivicAwards,
    alt: "Miss and Mister Civic Cameroon award winners at a youth forum",
    category: "events",
  },
  {
    id: "event-group",
    src: IMGS.eventGroup,
    alt: "MDDT Cameroon partners and civic ambassadors at a youth forum",
    category: "events",
  },
  {
    id: "advocacy-speaker",
    src: IMGS.advocacySpeaker,
    alt: "Youth advocate speaking at a civic engagement event",
    category: "events",
  },
  {
    id: "forum-stage",
    src: IMGS.forumStage,
    alt: "National Youth Forum for Peace stage ceremony in Yaoundé",
    category: "events",
  },
  {
    id: "nyfp-symposium",
    src: IMGS.nyfpSymposiumSpeaker,
    alt: "Speaker at the National Youth Forum for Peace symposium",
    category: "events",
  },
  {
    id: "nyfp-woman-speaker",
    src: IMGS.nyfpWomanSpeaker,
    alt: "Youth advocate addressing a peace and security forum",
    category: "events",
  },
  {
    id: "nyfp-podium",
    src: IMGS.nyfpPodiumSpeaker,
    alt: "Speaker at Yaahot Hotel during a youth advocacy symposium",
    category: "events",
  },
  {
    id: "youth-forum-speaker",
    src: IMGS.youthForumSpeaker,
    alt: "Youth forum speaker promoting advocacy and civic engagement",
    category: "events",
  },
  {
    id: "miss-civic-north",
    src: IMGS.missCivicNorth,
    alt: "Miss Civic North celebration with community supporters",
    category: "events",
  },
  {
    id: "civic-ambassadors",
    src: IMGS.civicAmbassadors,
    alt: "Mr and Miss Civic Cameroon ambassadors at an official event",
    category: "events",
  },
  {
    id: "elections-workshop",
    src: IMGS.electionsWorkshop,
    alt: "Youth elections workshop — enhancing participation in elections",
    category: "outreach",
  },
  {
    id: "workshop-session",
    src: IMGS.workshopSession,
    alt: "Voter education workshop session with young participants",
    category: "outreach",
  },
  {
    id: "registration-table",
    src: IMGS.registrationTableEvent,
    alt: "Youth voter registration at an election information table",
    category: "outreach",
  },
  {
    id: "election-billboard",
    src: IMGS.electionBillboard,
    alt: "Youth advocates in front of a 2025 presidential election billboard",
    category: "outreach",
  },
  {
    id: "cdhc-outreach",
    src: IMGS.cdhcOutreach,
    alt: "MDDT outreach team at the Cameroon Human Rights Commission",
    category: "outreach",
  },
  {
    id: "youth-advocacy-group",
    src: IMGS.youthAdvocacyGroup,
    alt: "MDDT youth advocacy team promoting Ma Vote 2025 na pawa",
    category: "outreach",
  },
  {
    id: "hero",
    src: IMGS.hero,
    alt: "Not Too Young To Vote — Ma Vote 2025 na pawa campaign",
    category: "outreach",
  },
];

const TEAM_ITEMS = TEAM_MEMBERS.map((member) => ({
  id: member.id,
  src: member.image,
  alt: `${member.name} — ${member.role}, MDDT Cameroon`,
  category: "team",
}));

/** Deduplicated gallery items used across the site */
export const GALLERY_ITEMS = [...CAMPAIGN_ITEMS, ...LEGACY_GALLERY_ITEMS, ...TEAM_ITEMS].filter(
  (item, index, items) => items.findIndex((entry) => entry.src === item.src) === index
);

export function filterGalleryItems(category = "all") {
  if (category === "all") return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((item) => item.category === category);
}

/** @deprecated Use GALLERY_ITEMS from this module */
export const GALLERY_PHOTOS = CAMPAIGN_ITEMS.map((item) => item.src);
