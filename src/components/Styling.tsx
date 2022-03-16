interface StylingProps {
  styles: React.CSSProperties;
}

const Styling = ({ styles }: StylingProps) => {
  return <div style={styles}>Styling</div>;
};

export default Styling;
