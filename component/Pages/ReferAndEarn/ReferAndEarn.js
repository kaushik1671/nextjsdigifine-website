import ReferralHero from "../../CourseComponents/ReferralHero/ReferralHero";
import EarningsCalculator from "../../CourseComponents/EarningsCalculator/EarningsCalculator";
import HowTheProgramWorks from "../../CourseComponents/HowTheProgramWorks/HowTheProgramWorks";
import TopReferrersLeaderboard from "../../CourseComponents/TopReferrersLeaderboard/TopReferrersLeaderboard";
import TransparentRewardStructure from "../../CourseComponents/TransparentRewardStructure/TransparentRewardStructure";

export default function Page() {
  const handleFormRedirect = () => {
    // Add your form scroll logic or modal toggle here
    console.log("Form button clicked!");
  };

  return (
    <main>

      <ReferralHero 
        onCtaClick={handleFormRedirect} 
      />
      <EarningsCalculator />
      <HowTheProgramWorks />
      <TopReferrersLeaderboard />
      <TransparentRewardStructure />
    </main>
  );
}