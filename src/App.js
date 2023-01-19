import './App.css';
import Cards from './components/Cards';

export default function App() {
  return (
    <div>
      <Cards image="https://pictures.telegram-store.com/channels/hochu-znayu/4663_2022_05_17_1_.jpg">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#1" className="btn btn-primary">
          Go somewhere
        </a>
      </Cards>
      <Cards>
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#1" className="card-link">
          Card link
        </a>
        <a href="#2" className="card-link">
          Another link
        </a>
      </Cards>
    </div>
  );
}
