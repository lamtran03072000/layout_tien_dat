import { https } from './urlconfig';

export const aboutVnService = {
  getContent: () => {
    let uri = '/aboutvn/content';
    return https.get(uri);
  },
  updateContent: (data) => {
    let uri = '/aboutvn/content';
    return https.put(uri, data);
  },
};
