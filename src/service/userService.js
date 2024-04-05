import { https } from './urlconfig';

export const userServie = {
  postLogin: (user) => {
    let uri = '/user/login';
    return https.post(uri, user);
  },
  postRegister: (user) => {
    let uri = '/user/register';
    return https.post(uri, user);
  },
  postGetCodeForgotPass: (user) => {
    let uri = '/user/get-code';
    return https.post(uri, user);
  },
  postVerifiCode: (code) => {
    let uri = '/user/verifi-code';
    return https.post(uri, code);
  },
  postResetPass: (user) => {
    let uri = '/user/reset-pass';
    return https.post(uri, user);
  },
};
