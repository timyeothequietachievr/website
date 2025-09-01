const amazonBookReviewsUrl = new URL(
  'https://www.amazon.com/Love-You-Like-No-Otter/dp/1728213746/ref=sr_1_1?dib=eyJ2IjoiMSJ9.iM2dGT47yCIAhd358-mJsLg6WbSZrU_Oi-cFjKmouzeuAKE81UK7Rr2C6sziWtsU2JdgSbVh7c2KrSzZSuV3BmM-e-VEE2nFKlcod16tv9Zfza2ydrcLZ5Box6BHWjj4GGHwTEG1Zjtk31jNkXO07bcZGSZHWwoLdhYyrVP8lWfcVw-JvzF72cy2Ouf-Tzt14D_hJ4pNPugimBS_r8usqMNpdFpUcBXRaxfmeacDUaU.YmWF5TZCLsrspj6KN51mNnqGkM5Ls4eASTcfkeJ9yRg&dib_tag=se&keywords=love+you+like+no+otter&qid=1720588521&sr=8-1#reviewsMedley'
);
const tipJarUrl = new URL(
  'https://thequietachievr.kit.com/products/tip-jar'
);
const BuyBookOnAmazonUrl = new URL(
  'https://mybook.to/thequietachiever/opt/1?iguid=xLjtcoXHrU-ZJo3Vz-0k1Q'
);
const newsletterUrl = new URL(
  'https://www.thequietachievr.com/book#newsletter'
);
const ConvinceYourBossUrl = new URL(
  'https://www.convinceyourboss.com/'
);
const TooValuableToLoseUrl = new URL(
  'https://www.toovaluabletolose.com/'
)
const MeetTheTrainerConvinceUrl = new URL(
  'https://calendar.app.google/YGkqSkuNjCGKhic5A'
);
const MeetTheTrainerTooValuableUrl = new URL(
  'https://calendar.app.google/G43SJXZsECYMP8xaA'
);
const MeetFreestUrl = new URL(
  'https://calendar.app.google/aqqqYLnrq8vePFnz7'
);
const MeetCoachingChemistryCall20minUrl = new URL(
  'https://calendar.app.google/g3oUK69XeEQ5ao4o6'
);
const MeetCoachingDeepDiveCallUrl = new URL(
  'https://calendar.app.google/chzxSEei1ANTBm5X6'
);
const FollowOnLinkedinUrl = new URL(
  'https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=timyeo'
);
const SubscribeOnYouTubeUrl = new URL(
  'https://www.youtube.com/@thequietachievr?sub_confirmation=1'
);
const SpeakBioUrl = new URL(
  'https://docs.google.com/document/d/1Fr3IjH0RIn8YzR8MWHUT-ZyLlACqhGTg6sn1GLBSSD0/edit?usp=sharing'
);
const ProposalUrl = new URL(
  'https://youtu.be/ACvWsSzJ3ns'
);
const StoryOfYouUrl = new URL(
  'https://youtu.be/g7L9x1J8SI4'
);
const MeetCoachingLarryTimUrl = new URL(
  'https://calendar.app.google/ChY14tzQHX6Btvik7'
);
const ApplyCoachingLarryTimUrl = new URL(
  'https://docs.google.com/forms/d/e/1FAIpQLSdfZ9iDHi22mNxI2vh1KwinaqgGJCuKtflCGhNAncaVz3sBnw/viewform?usp=sharing&ouid=113998785391257342366'
);
const ApplyCoachingUrl = new URL(
  'https://forms.gle/3NDnX989HwCbMeLQA'
);
const MeetCoachingSessionTimUrl = new URL(
  'https://calendar.app.google/WykZ1uk3QumuK5BU8'
);
const MeetResearchSessionUrl = new URL(
  'https://calendar.app.google/zpVsNckekLmVE3uX7'
);
const WriteAReviewUrl = new URL(
  'https://forms.gle/P3q28mSRBCz5ttMYA'
);


const nextConfig = {
  async redirects() {
    return [
      {
        source: '/bookreview',
        destination: amazonBookReviewsUrl.toString(),
        permanent: true,
      },
      {
        source: '/tipjar',
        destination: tipJarUrl.toString(),
        permanent: true,
      },
      {
        source: '/amazon',
        destination: BuyBookOnAmazonUrl.toString(),
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: newsletterUrl.toString(),
        permanent: true,
      },
      {
        source: '/convinceyourboss',
        destination: ConvinceYourBossUrl.toString(),
        permanent: true,
      },
      {
        source: '/toovaluabletolose',
        destination: TooValuableToLoseUrl.toString(),
        permanent: true,
      },
      {
        source: '/meetconvince',
        destination: MeetTheTrainerConvinceUrl.toString(),
        permanent: true,
      },
      {
        source: '/meettoovaluable',
        destination: MeetTheTrainerTooValuableUrl.toString(),
        permanent: true,
      },
      {
        source: '/freest',
        destination: MeetFreestUrl.toString(),
        permanent: true,
      },
      {
        source: '/chemistrycall',
        destination: MeetCoachingChemistryCall20minUrl.toString(),
        permanent: true,
      },
      {
        source: '/deepdive',
        destination: MeetCoachingDeepDiveCallUrl.toString(),
        permanent: true,
      },
      {
        source: '/coachingsession',
        destination: MeetCoachingSessionTimUrl.toString(),
        permanent: true,
      },
      {
        source: '/followonlinkedin',
        destination: FollowOnLinkedinUrl.toString(),
        permanent: true,
      },
      {
        source: '/youtube',
        destination: SubscribeOnYouTubeUrl.toString(),
        permanent: true,
      },
      {
        source: '/speakerbio',
        destination: SpeakBioUrl.toString(),
        permanent: true,
      },
      {
        source: '/proposal',
        destination: ProposalUrl.toString(),
        permanent: true,
      },
      {
        source: '/storyofyou',
        destination: StoryOfYouUrl.toString(),
        permanent: true,
      },
      {
        source: '/meetlarryandtim',
        destination: MeetCoachingLarryTimUrl.toString(),
        permanent: true,
      },
      {
        source: '/applylarryandtim',
        destination: ApplyCoachingLarryTimUrl.toString(),
        permanent: true,
      },
      {
        source: '/applyforcoaching',
        destination: ApplyCoachingUrl.toString(),
        permanent: true,
      },
      {
        source: '/write-a-review',
        destination: WriteAReviewUrl.toString(),
        permanent: true,
      },
      {
        source: '/research',
        destination: MeetResearchSessionUrl.toString(),
        permanent: true,
      },
       

    ]
  }
}

export default nextConfig 