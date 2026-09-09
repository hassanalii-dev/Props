function Header({ name, age, companyInfo }) {
  return (
    <div>
      <div>
        This is Header.
        <hr />
        <h1>User Details:</h1>
        User logged in is {name}.
        <br />
        User age is {age}
        <br />
      </div>

      <div>
        <h1>Company Info:</h1>
        {companyInfo.name}
        <br />
        {companyInfo.address}
        <br />
        {companyInfo.contact}
      </div>
    </div>
  );
}

export default Header;