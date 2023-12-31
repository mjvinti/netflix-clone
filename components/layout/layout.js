import NavBar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
