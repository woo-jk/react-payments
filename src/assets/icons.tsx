export const LeftArrowIcon = () => (
  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5" />
  </svg>
);

interface DotIconProps {
  color?: string;
}
export const DotIcon = ({ color }: DotIconProps) => (
  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="2.5" r="2.5" fill={color || "black"} />
  </svg>
);
