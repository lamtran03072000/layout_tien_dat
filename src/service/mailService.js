import { https } from './urlconfig';

export const mailService = {
  postFormLienHe: (formLienHe) => {
    let uri = `/mailer/formLienHe`;
    return https.post(uri, formLienHe);
  },
};
