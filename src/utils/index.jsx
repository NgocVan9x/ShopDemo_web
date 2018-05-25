export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function checkHttpStatus_fromdaemon(response) {
  if (response.status_code >= 200 && response.status_code < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function getStatusExcel(success, fail, partial) {
  if ((success > 0 && fail > 0) || (partial && partial > 0)) {
    return 'Partial';
  } else if (success > 0) {
    return 'Success';
  } else if (fail > 0) {
    return 'Fail';
  }
}

export function getStatusConfigByTextExcel(status) {
  if (status.toLowerCase() === 'success') {
    return excelStyle.status.Success;
  } else if (status.toLowerCase() === 'fail') {
    return excelStyle.status.Fail;
  }
}
export function parseJSON(response) {
  return response.json();
}

export function getBrowserInfo() {
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  if (isOpera) {
    return {
      name: 'opera',
    };
  }

  const isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) {
    return {
      name: 'firefox',
    };
  }

  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  }(!window.safari || safari.pushNotification));
  if (isSafari) {
    return {
      name: 'safari',
    };
  }

  const isIE = false || !!document.documentMode;
  if (isIE) {
    return {
      name: 'ie',
    };
  }

  const isEdge = !isIE && !!window.StyleMedia;
  if (isEdge) {
    return {
      name: 'edge',
    };
  }

  const isChrome = !!window.chrome && !!window.chrome.webstore;
  if (isChrome) {
    return {
      name: 'chrome',
    };
  }
  return {
    name: '',
  };
}
