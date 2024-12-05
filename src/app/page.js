
export default function Home() {
  return (
    <div className="bodycontainer">      
      <main>
        <div className="topcontainer">
          <div className="top">            
            <h1>Reservas</h1>
            <button className="reserve">+</button>
          </div>
          <div className="inputcontainer">
            <img src="./assets/header_images/search.png" alt="Search Icon"></img>
            <input type="text" placeholder="Search Room" className="search"></input>          
          </div>
        </div>
        <div className="roomcontainer">
          <div className="room">
            <p className="info1">Sala</p>
            <p className="info2">Pessoa</p>
            <p className="info3">Data</p>
            <p className="info4">Horário</p>            
            <button className="moreinfo"><img src="assets/sidebar_images/more.png" alt="More Info"/></button>
          </div>
        </div>
        {/*<div className="pages_count"> 
          <div className="count">
            <p className="atual">1</p>
            <p>-</p>
            <p className="total">5</p>
          </div>
          <div className="arrows">
            <img src="" alt="left"></img>
            <img src="" alt="right"></img>
          </div>
        </div>*/}
      </main>
    </div>    
  );
}

