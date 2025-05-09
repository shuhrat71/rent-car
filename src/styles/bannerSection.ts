import { Box } from "@mui/material";
import styled from "styled-components";

export const BannerWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
export const BannerBox1 = styled(Box)(({ theme }) => ({
  maxWidth: "690px",
  width: "100%",
  padding: "20px",
  color: "#fff",
  backgroundColor: "#5CAFFC",
  borderRadius: "8px",
}));
export const StyledImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;
export const BannerBox2 = styled(Box)(({ theme }) => ({
  maxWidth: "690px",
  width: "100%",
  padding: "20px",
  color: "#fff",
  backgroundColor: "#3563E9",
  borderRadius: "8px",
}));
