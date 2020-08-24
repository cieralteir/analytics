export default class RewardService {
  static analytics() {
    // axios.get('/rewards/analytics')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          issuedRewards: 175000,
          percentage: 20,
          percentageIncrease: true,
          rewardsRedeemed: 175000,
        });
      }, 2000);
    });
  }

  static overview(params = {}) {
    console.log(params);
    // axios.get('/rewards/overview') - rewards/overview?dateStart=00-00-000,dateEnd=00-00-0000
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "08-01-2020": {
            engagements: 50,
            average: 20,
          },
          "08-02-2020": {
            engagements: 50,
            average: 20,
          },
          "08-03-2020": {
            engagements: 50,
            average: 20,
          },
          "08-04-2020": {
            engagements: 50,
            average: 20,
          },
          "08-05-2020": {
            engagements: 50,
            average: 20,
          },
          "08-06-2020": {
            engagements: 50,
            average: 20,
          },
          "08-07-2020": {
            engagements: 50,
            average: 20,
          },
        });
      }, 2000);
    });
  }
}
