
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

// export function App() {
//   const [filter, setFilter] = useState('');
//   const [contacts, setContacts] = useState([]);
//   const formSubmitHandler = ({ name, number }) => {
//     const newName = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const find = contacts.find(
//       ({ name }) =>
//         newName.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//     );

//     if (find) {
//       alert(`${find.name} is alredy in contact`);
//       return;
//     }

//     setContacts([newName, ...contacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContact =>
//       prevContact.filter(contact => contact.id !== contactId)
//     );
//   };

//   const handleSearch = e => {
//     let lowerCase = e.target.value.toLowerCase();
//     setFilter(lowerCase);
//   };

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       setContacts(parsedContacts);
//     }
//   }, []);

//   // const filteredContacts = contacts.filter(({ name }) =>
//   //   name.toLowerCase().includes(filter.toLowerCase())
//   // );

//   return (
//     <div
//       style={{
//         height: '30vh',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 30,
//         color: '#010101',
//       }}
//     >
//       <ContactForm onFormSubmit={formSubmitHandler} />
//       <Filter filter={filter} handleSearch={handleSearch} />
//       {/* <ContactList contacts={filteredContacts} deleteContact={deleteContact} /> */}
//       <ContactList deleteContact={deleteContact} />
//     </div>
//   );
// }
