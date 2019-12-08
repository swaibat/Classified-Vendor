import fs from 'fs';
import db from '../database/models';

const Uploads = {
  clearData(condition) {
    db.productFile.findAll({ where: condition, raw: true }).then(e => {
      console.log(e);
      e.map(file => {
        fs.unlink(`./api/uploads/products/${file.name}`, err => {
          if (err) return err;
          console.log('successfully deleted /tmp/hello');
        });
      });
    });
  }
};

export default Uploads;
