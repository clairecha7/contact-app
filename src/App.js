import { useState, useEffect } from "react";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";

const initialValues = { username: "", phone_number: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const mainUrl = "http://22115.fullstack.clarusway.com/contacts/";

  useEffect(() => {
    fetch(mainUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        setData={setData}
        data={data}
        initialValues={initialValues}
        update={update}
        setUpdate={setUpdate}
      />
      <Contacts
        data={data}
        setData={setData}
        setUpdate={setUpdate}
        setInfo={setInfo}
      />
    </div>
  );
}

export default App;
