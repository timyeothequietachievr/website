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
    ]
  }
}

export default nextConfig