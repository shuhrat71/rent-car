"use client";

import { Box, Container, Typography } from "@mui/material";
import {
  BannerBox1,
  BannerBox2,
  BannerWrapper,
  StyledImage,
} from "../../styles/bannerSection";

export default function BannerSection() {
  return (
    <Container maxWidth="xl">
      <BannerWrapper>
        <BannerBox1>
          <Box maxWidth={340}>
            <Typography variant="h6">
              The Best Platform for Car Rental
            </Typography>
            <Typography variant="body1">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <StyledImage src="/img/onix.webp" />
          </Box>
        </BannerBox1>
        <BannerBox2>
          <Box maxWidth={340}>
            <Typography variant="h6">
              Easy way to rent a car at a low price
            </Typography>
            <Typography variant="body1">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <StyledImage src="/img/cobalt.webp" />
            </Box>
          </Box>
        </BannerBox2>
      </BannerWrapper>
    </Container>
  );
}
