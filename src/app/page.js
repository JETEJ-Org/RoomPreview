
export default function Home() {
  return (
    <div className="bodycontainer">      
      <main>
        <div className="corpo">
          <div className="top">            
            <h1>Reservas</h1>
            <button className="reserve">New reserve</button>
          </div>
          <input type="text" placeholder="Search Room" className="search"></input>          
        </div>
        <div className="roomcontainer">
          <div className="room">
            <p>Sala</p>
            <p>Pessoa</p>
            <p>Data</p>
            <p>Horário</p>            
            <button className="moreinfo">...</button>
          </div>
        </div>
      </main>
    </div>    
  );
}

