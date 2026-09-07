function Header({ name, age, companyInfo }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>

      <h2>{companyInfo.name}</h2>
      <p>{companyInfo.address}</p>
      <p>{companyInfo.contact}</p>
    </div>
  );
}

export default Header;