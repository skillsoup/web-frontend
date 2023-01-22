export type SkillCategory =
  | "communication"
  | "resilience"
  | "teamwork"
  | "organization"
  | "technical";

export type ExploreResponse = {
  job_position: string;
  skills: string[];
  advice: string;
};
