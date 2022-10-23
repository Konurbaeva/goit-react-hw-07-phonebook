
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';


export function App() {

  return (
    <div
      style={{
        height: '30vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <ContactForm/>
      <Filter/>
      <ContactList />
    </div>
  );
}