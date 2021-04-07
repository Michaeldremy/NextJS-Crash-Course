import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Crash</span> Course
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest Crash Courses!
      </p>
    </div>
  );
};

export default Header;
