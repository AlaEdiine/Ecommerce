import "./Header.css";

const Header = () => {
  return (
  <header className="header">
  <div className="aide">
    <div className="application">
      <span className="span">Application &gt; </span>
      <span className="text-wrapper-3">Dashboard</span>
    </div>
  </div>
  <div className="headerprofile">
    <div className="profile">
      <div className="nameprofile">
        <div className="name">
          <span className="text-wrapper-4">Hi, </span>
          <span className="text-wrapper-5">Alloui</span>
        </div>
        <div className="title-2">Your account is Admin</div>
      </div>
      <div className="photos">
        <img className="photoprofile" alt="Photoprofile" src="/img/photoprofile.png" />
        <div className="icone-connect">
          <div className="vert" />
        </div>
      </div>
    </div>
  </div>
</header>
    )
}

export default Header