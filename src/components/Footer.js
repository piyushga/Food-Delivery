const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "2rem",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    color: "#333",
  },
};

export default Footer;
