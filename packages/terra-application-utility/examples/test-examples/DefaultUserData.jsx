import React from 'react';
import Image from 'terra-image';
import UserData from '../../src/UserData';
import Avatar from '../index-examples/FallBackAvatar.svg';

export default () => {
  const image = <Image src={Avatar} />;
  const userDetail = 'User Detail';
  const userName = 'User Name';
  return <UserData id={'default'} userDetail={userDetail} userName={userName} userPhoto={image} />;
};
