
import "./Navbar.css"

 export const Navbar = ()=>{

  return (
  <header className="heading d-flex align-centter" >
    <h1 className="heading-1" >
      <a className="link" href="/">
      TravelO
      </a>
    </h1>

    <div className="form-container d-flex align-center cursor-pointer shadow" >
      <span className="form-option" >Any Where</span>
      <span className="border-right-1px "></span>
      <span className="form-option">Any Week</span>
      <span className="border-right-1px "></span>
      <span className="form-option">Add Guest</span>
      <span className="material-symbols-outlined search">search</span>

     
    </div>
    <nav className="d-flex align-center gap-large" >
      <div className="nav d-flex align-center cursor-pointer">
       <span  >
        <img className="flaticon menu" src="../src/assest/menufav.png" alt="favicon" />
        </span>
       <span >
        <img className="flaticon person" src="../src/assest/personfav.png" alt="favicon" />
        </span>

      </div>
    </nav>
    
 
  </header>

  )

}
// export default Navbar;