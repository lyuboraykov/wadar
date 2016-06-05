var xhr = require('xhr');

export class FireBaseClient {
  static getTechnologies(onSuccess, onError) {
    let path = '/get-global-radar.php';
    xhr.get(path, (err, data) => {
      if (err || data.statusCode > 299 || data.statusCode < 200) {
        return onError(data);
      }
      return onSuccess(JSON.parse(data.body));
    });
  }

  static submitTechnologies(technologies, onSuccess, onError) {
    let path = '/submit-radar.php';

    xhr({
      uri: path,
      body: JSON.stringify(technologies),
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }, (err, data) => {
      if (err || data.statusCode > 299 || data.statusCode < 200) {
        return onError(data);
      }
      return onSuccess(data.body);
    });
  }
}
