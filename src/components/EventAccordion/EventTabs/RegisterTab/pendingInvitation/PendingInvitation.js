/* eslint-disable array-callback-return */
import React from 'react';

import { useMutation } from '@apollo/react-hooks';

import style from '../invitation/invitation.module.css';

import Button from '../../../../Button/Button';
import { ReactComponent as Cross } from '../../../../../assets/icons/cross.svg';
import CANCEL_INVITE from '../../../../../graphQl/mutations/cancelInvite';
import USER_QUERY from '../../../../../graphQl/queries/user';
import Loader from '../../../../Loader/Loader';

const PendingInvitation = ({ sr, invites, teamid }) => {
  const [runCancelInvite, cancelInvite] = useMutation(CANCEL_INVITE, {
    update: (cacheStore, { data: newData }) => {
      const userData = cacheStore.readQuery({ query: USER_QUERY });
      const newTeams = [];
      userData.teams.map(team => {
        if (team.id !== teamid) newTeams.push(team);
      });
      newTeams.push(newData.data.cancelInvite.team);
      cacheStore.writeQuery({
        query: USER_QUERY,
        data: {
          user: {
            ...userData.user,
            teams: newTeams,
          },
        },
      });
    },
  });
  return (
    <div className={style.invitation_container}>
      <span className={style.invitation_content_sr}>{sr}</span>
      <span className={style.invitation_content}>{invites.name}</span>
      <span className={style.invitation_content}>{invites.id}</span>
      <div className={style.invitation_button_container_single}>
        <Button
          iconPosition="right"
          text={cancelInvite.loading ? <Loader fill="#000000" /> : 'CANCEL'}
          Icon={cancelInvite.loading ? null : Cross}
          className={style.member_button}
          onClick={() => runCancelInvite({ variables: { teamId: teamid, arId: invites.id } })}
          disabled={cancelInvite.loading}
        />
      </div>
    </div>
  );
};
export default PendingInvitation;
