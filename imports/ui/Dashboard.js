import React from 'react';
import {Link} from 'react-router'

import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        <section style={{marginBottom:"1.5em"}}>
          <h2>Menu</h2>
          <Link to="/admin/entries">Edit Entries</Link>
        </section>
      </div>
    </div>
  );
};
