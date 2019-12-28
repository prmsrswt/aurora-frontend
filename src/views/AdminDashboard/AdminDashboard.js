import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Loader from '../../components/Loader/Loader';
import UserTable from '../../components/AdminDash/UserTable/UserTable';
import TeamTable from '../../components/AdminDash/TeamTable/TeamTable';
import getAlert from '../../utils/getAlert';

import ADMIN_META from '../../graphQl/queries/protected/adminMetadata';

import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const [err, setErr] = useState(false);

  const handleErrors = error => {
    if (error && error.graphQLErrors.length > 0) {
      if (error.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
        setErr(error.graphQLErrors[0].message);
      } else {
        const toast = getAlert();
        toast.fire({
          icon: 'error',
          title: error.graphQLErrors[0].message,
        });
      }
    }
  };

  const { data, loading } = useQuery(ADMIN_META, {
    onError: handleErrors,
  });

  if (err)
    return (
      <div className={styles.adminDiv}>
        <h1>{err}</h1>
      </div>
    );

  if (loading || !data)
    return (
      <div className={styles.adminDiv} style={{ justifyContent: 'center' }}>
        <Loader fill="#000000" />
      </div>
    );

  const { isRoot, events } = data.adminMetadata;

  return (
    <div className={styles.adminDiv}>
      <h1 className={styles.heading}>ADMIN DASHBOARD</h1>
      {isRoot && <UserTable />}
      <TeamTable events={events} />
    </div>
  );
};

export default AdminDashboard;