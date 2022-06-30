import Card            from "./components/Card";
import Header          from "./components/Header";
import HorisontalRuler from "./components/HorisontalRuler";

import { CARDS } from "./consts/data";

const App = () =>
  <>
    <Header />
    { CARDS.map( ( card, index ) =>
      <>
        <Card key={ card.id } data={ card } />
        { index !== CARDS.length - 1 && <HorisontalRuler /> }
      </>
    )}
  </>

export default App;
