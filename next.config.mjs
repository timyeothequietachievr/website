const amazonBookReviewsUrl = new URL(
  'https://www.amazon.com/Love-You-Like-No-Otter/dp/1728213746/ref=sr_1_1?dib=eyJ2IjoiMSJ9.iM2dGT47yCIAhd358-mJsLg6WbSZrU_Oi-cFjKmouzeuAKE81UK7Rr2C6sziWtsU2JdgSbVh7c2KrSzZSuV3BmM-e-VEE2nFKlcod16tv9Zfza2ydrcLZ5Box6BHWjj4GGHwTEG1Zjtk31jNkXO07bcZGSZHWwoLdhYyrVP8lWfcVw-JvzF72cy2Ouf-Tzt14D_hJ4pNPugimBS_r8usqMNpdFpUcBXRaxfmeacDUaU.YmWF5TZCLsrspj6KN51mNnqGkM5Ls4eASTcfkeJ9yRg&dib_tag=se&keywords=love+you+like+no+otter&qid=1720588521&sr=8-1#reviewsMedley'
)

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/bookreviews',
        destination: amazonBookReviewsUrl.toString(),
        permanent: true,
      },
    ]
  }
}

export default nextConfig