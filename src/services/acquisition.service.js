export default class AcquisitionService {
  static analytics() {
    // axios.get('/acquisitions/analytics')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          dailyAverage: 57,
          registeredUsers: 285,
          percentage: 20,
          percentageIncrease: true,
        });
      }, 2000);
    });
  }

  static overview(params = {}) {
    console.log(params);
    // axios.get('/acquisitions/overview') - acquisitions/overview?dateStart=00-00-000,dateEnd=00-00-0000
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
