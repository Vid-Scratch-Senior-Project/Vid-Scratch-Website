import AboutUsPageContent from "@/components/AboutUsPage/AboutUsPageContent";
import AboutUsPageHeader from "@/components/AboutUsPage/AboutUsPageHeader";
import AboutUsPageTeamMember from "@/components/AboutUsPage/AboutUsPageTeamMembers";

export default function AboutVidScratchPage() {
  return (
    <div>
      <AboutUsPageHeader />
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <AboutUsPageContent />
        <AboutUsPageTeamMember />
      </div>
    </div>
  )
}