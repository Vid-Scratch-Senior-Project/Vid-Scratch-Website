import AboutUsPageContent from "@/components/AboutUsPage/AboutUsPageContent";
import AboutUsPageHeader from "@/components/AboutUsPage/AboutUsPageHeader";
import AboutUsPageTeamMember from "@/components/AboutUsPage/AboutUsPageTeamMembers";

export default function AboutVidScratchPage() {
  return (
    <div>
      <AboutUsPageHeader />
      <div>
        <AboutUsPageContent />
        <AboutUsPageTeamMember />
      </div>
    </div>
  )
}