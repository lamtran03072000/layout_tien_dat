import { https } from './urlconfig';

export const sanPhamService = {
  getSp: (idSp) => {
    let uri = `/san-pham/sp?idSp=${idSp}`;
    return https.get(uri);
  },
  getListSp: () => {
    let uri = `/san-pham/sp`;
    return https.get(uri);
  },
};
