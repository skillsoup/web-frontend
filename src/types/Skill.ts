export type SkillType = "organization" | "personality";

export type OrganizationSkills =
  | "Goal setting"
  | "Decision making"
  | "Strategy thinking"
  | "Collaboration"
  | "Time management"
  | "Effective communication";

export type PersonalitySkills = "Amiable";

export type TSkills = {
  organization: OrganizationSkills[];
  personality: PersonalitySkills[];
};
