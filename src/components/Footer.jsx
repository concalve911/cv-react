import React from "react";
import { Box, Typography } from "@mui/material";
import "./footer.style.scss";

export default () => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body1" className="Footer__text">
        Contacts: aleksandrgarkusha911@gmail.com
      </Typography>
      <Typography variant="body2" className="Footer__copyright">
        @2024 My Web Page
      </Typography>
    </Box>
  );
};
