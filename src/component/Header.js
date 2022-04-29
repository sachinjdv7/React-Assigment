import Link from "@mui/material/Link";
const Header = () => {
  return (
    <div>
      <h1>Form Details</h1> <hr />
      <nav className="nav">
        <Link href="#" underline="none">
          Add
        </Link>
        <Link href="#" underline="none">
          View
        </Link>
      </nav>
    </div>
  );
};

export default Header;
