import ProjectDetail from "./ProjectDetail";

export default function CuisineCompassPage() {
  return (
    <ProjectDetail
      title="Cuisine Compass"
      subtitle="A digital cookbook experience built around discovery and inspiration"
      overview="Cuisine Compass was designed to help users discover recipes that match their mood, ingredients, and daily routines without the overwhelm of endless browsing."
      problem="Users often needed a faster, more intuitive way to find practical recipes and keep track of what they wanted to cook without juggling multiple scattered sources."
      approach="I focused on making recipe discovery feel personal and guided, building a clear structure for browsing, saving, and planning meals with confidence."
      impact="The concept created a more seamless recipe discovery flow that felt helpful, motivating, and tailored to real-life cooking habits."
      outcomes={[
        "Designed a recipe discovery experience that feels approachable and inspiring.",
        "Created a clearer path from exploring recipes to saving and planning meals.",
        "Focused on reducing decision fatigue while supporting user intent and personal preference."
      ]}
    />
  );
}