import { useMediaQuery } from 'react-responsive';
export const DesktopReponsive = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return isDesktop ? children : null;
};
export const TabletReponsive = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });
  return isTablet ? children : null;
};
export const MobileReponsive = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return isMobile ? children : null;
};
