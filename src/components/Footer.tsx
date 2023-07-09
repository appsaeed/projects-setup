export default function Footer() {
  return (
    <footer className="footer">
      Copyright ©{new Date().getFullYear()}{" "}
      <a className="text" target="_blank" href="http://github.com/appsaeed">
        github appsaeed{" "}
      </a>{" "}
      All rights reserved.
    </footer>
  );
}
