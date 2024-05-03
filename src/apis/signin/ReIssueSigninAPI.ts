import { instance } from '@gdsc/apis/Api';

import { SigninAPIInterface } from '@gdsc/interface/OAuthInterface';

export const ReIssueSigninAPI = (): Promise<SigninAPIInterface> => {
  return new Promise((resolve, reject) => {
    const refreshToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('refreshToken='))
      ?.split('=')[1];

    if (!refreshToken) {
      reject(new Error('Refresh token not found in cookies'));
    }

    instance
      .post('/api/jwt/reissue', { refreshToken })
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
