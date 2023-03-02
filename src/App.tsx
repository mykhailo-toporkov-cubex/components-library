import { Input, InputVariantEnum } from "@components/Input";


function App() {
  return (
    <div className="page_wrapper">
      <Input errorText=""  type={InputVariantEnum.password}/>
    </div>
  );
}

export default App;
