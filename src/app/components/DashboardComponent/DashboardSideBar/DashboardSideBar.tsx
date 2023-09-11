import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation";
import DashboardLogo from "../DashboardLogo/DashboardLogo";

const DashboardSidebar = ({ collapse } : {collapse: boolean}) => (
  <React.Fragment>
    <Box w="full"  color={"gray.50"} padding={10}>
      <DashboardLogo/>
      <Divider marginY={5}/>
      <DashboardNavigation collapse={collapse}/>
    </Box>
  </React.Fragment>
);

export default DashboardSidebar