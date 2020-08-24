export default class SaleService {
  static analytics() {
    // axios.get('/sales/analytics')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          averageOrderValue: 1000,
          lifetimeSales: 175000,
          percentage: 20,
          percentageIncrease: true,
          revenueSales: 170000,
        });
      }, 2000);
    });
  }

  static overview(params = {}) {
    console.log(params);
    // axios.get('/sales/overview') - sales/overview?dateStart=00-00-000,dateEnd=00-00-0000
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "08-01-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-02-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-03-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-04-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-05-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-06-2020": {
            sales: 10000,
            revenue: 10000,
          },
          "08-07-2020": {
            sales: 10000,
            revenue: 10000,
          },
        });
      }, 2000);
    });
  }
}
