const dummyApi = {
  showThemeSwitch: true,
  showTicTac: false,
  showLoadMore: false,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApi) {
      setTimeout(() => resolve(dummyApi), 500);
    } else {
      reject("Some error occured please,try again");
    }
  });
}

export default featureFlagsDataServiceCall;
