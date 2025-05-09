import styled from "styled-components";

export const HeaderWtapper = styled.header`
  width: 100%;
  padding: 35px 0;
  border-bottom: 1px solid rgb(215, 215, 215);
  background-color: #fff;
  display: flex;
`;
export const SettingsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const SettingIconBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #c3d4e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitle = styled.div`
  p {
    font-size: 25px;
    color: #3563e9;
  }
`;
export const SearchInputWrapper = styled.div`
  width: 340px;
  border-radius: 15px;
  border: 1px solid rgb(215, 215, 215);
  padding: 0 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    width: 100%;
    padding: 15px 0;
    outline: none;
    border: 0;
    border-radius: 15px;
  }
`;
