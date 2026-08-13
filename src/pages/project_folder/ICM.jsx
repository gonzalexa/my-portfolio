import ProjectDetail from "./ProjectDetail";

export default function ICMPage() {
  return (
    <ProjectDetail
      title="ICM"
      subtitle="Internal case management experience redesign"
      overview="I redesigned a complex internal experience to help users complete high-stakes workflows with more clarity, less friction, and greater confidence."
      problem="Users were navigating dense information architecture and fragmented task flows, which led to confusion, slower completion times, and inconsistent decision-making."
      approach="I mapped the user journey, reduced cognitive load, clarified priority actions, and designed a cleaner information hierarchy that aligned operational needs with user behavior."
      impact="The work improved the usability of the system by making critical workflows easier to understand and complete while supporting team efficiency at scale."
      outcomes={[
        "Restructured task and status information to reduce user confusion.",
        "Created a more intuitive flow for high-priority actions and decision points.",
        "Aligned the experience around user needs, operational constraints, and clear hierarchy."
      ]}
    />
  );
}
