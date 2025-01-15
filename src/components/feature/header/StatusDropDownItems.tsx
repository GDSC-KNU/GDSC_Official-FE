import styled from '@emotion/styled';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Text from '@gdg/components/common/typography/Text';
import { userDataInterface } from '@gdg/types/UserInterface';

import { DropdownItem } from './MainNavigation.style';

const handleLogout = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('user');
  window.location.href = '/';
};

const handleItemClick =
  (closeDropdown?: () => void) => (event: React.MouseEvent) => {
    event.stopPropagation();
    if (closeDropdown) {
      closeDropdown();
    }
  };

const commonDropdownItems = (
  // closeDropdown: (() => void) | undefined,
  additionalItems: React.ReactNode
) => (
  <>
    {/* <DropdownItem onClick={handleItemClick(closeDropdown)}>
      <NavLink to='/mypage'>
        <ResponsiveText size='sm' color='black'>
          마이페이지
        </ResponsiveText>
      </NavLink>
    </DropdownItem> */}
    {additionalItems}
    <DropdownItem onClick={handleLogout}>
      <ResponsiveText size='sm' color='black'>
        로그아웃
      </ResponsiveText>
    </DropdownItem>
  </>
);

export const renderDropdownItems = (
  MyData: userDataInterface,
  closeDropdown?: () => void
) => {
  let additionalItems;

  switch (MyData.role) {
    case 'ROLE_GUEST':
      additionalItems = null;
      break;
    case 'ROLE_MEMBER':
      additionalItems = (
        <DropdownItem onClick={handleItemClick(closeDropdown)}>
          <NavLink to='/team'>
            <ResponsiveText size='sm' color='black'>
              팀페이지
            </ResponsiveText>
          </NavLink>
        </DropdownItem>
      );
      break;
    case 'ROLE_CORE':
      additionalItems = (
        <React.Fragment>
          <DropdownItem onClick={handleItemClick(closeDropdown)}>
            <NavLink to='/team'>
              <ResponsiveText size='sm' color='black'>
                팀페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={handleItemClick(closeDropdown)}>
            <NavLink to='/admin'>
              <ResponsiveText size='sm' color='black'>
                어드민페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
        </React.Fragment>
      );
      break;
    default:
      return null;
  }

  return commonDropdownItems(additionalItems);
};

const ResponsiveText = styled(Text)`
  @media screen and (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;
