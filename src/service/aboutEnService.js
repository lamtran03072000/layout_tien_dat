import { https } from './urlconfig';

export const aboutEnService = {
  getContent: () => {
    let uri = '/abouten/content';
    return https.get(uri);
  },
};
