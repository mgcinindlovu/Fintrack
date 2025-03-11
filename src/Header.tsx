import React from 'react';
import styled from 'styled-components';
import image from './assets/Rectangle-68.jpg';

// Styled components for the header
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #060a22;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    margin-left: 0; /* Remove margin on smaller screens */
    padding: 10px 15px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  /* Media query for small screens */
  @media (max-width: 768px) {
    margin-bottom: 10px; /* Space between profile pic and search bar */
  }
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 20px;
  padding: 5px 10px;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 10px;
  width: 200px;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface HeaderProps {
  onSearch?: (searchQuery: string) => void;
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearch, collapsed }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <HeaderWrapper style={{ marginLeft: collapsed ? '0' : '250px' }}>
      <ProfileWrapper>
        <ProfilePic src={image} alt="Profile Picture" />
      </ProfileWrapper>

      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </SearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
