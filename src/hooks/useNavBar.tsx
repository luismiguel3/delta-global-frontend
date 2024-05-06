import React, { useState } from "react";
import { logout } from "./useAuth";

export default function useNavBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseUserMenu = (option: string) => {
    option === "logout" && logout();
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = () => logout();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  return {
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  };
}
