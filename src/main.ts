var connector = null;

function initConnector() {
  if (connector === null) {
    connector = new ChartMogulConnector();
  }
  return connector;
}

function getConfig(request) {
  return initConnector().logAndExecute('getConfig', request);
}

function getSchema(request) {
  return initConnector().logAndExecute('getSchema', request);
}

function getAuthType() {
  return initConnector().logAndExecute('getAuthType');
}

function resetAuth() {
  return initConnector().logAndExecute('resetAuth');
}

function isAuthValid() {
  return initConnector().logAndExecute('isAuthValid');
}

function setCredentials(request) {
  return initConnector().logAndExecute('setCredentials', request);
}

function getData(request) {
  return initConnector().logAndExecute('getData', request);
}

function isAdminUser(request) {
	return initConnector().logAndExecute('isAdminUser', request);
}