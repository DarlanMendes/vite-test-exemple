
import "./index.css";

function App() {

  function handleFormSubmit(event){
    event.preventDefault();
  }
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-slate-200">
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 shadow-md h-auto py-4 px-6 bg-slate-500 rounded-md">
      <h1 className="text-2xl text-slate-950 font-semibold my-2 w-full text-center">Login</h1>
    <label className=" flex flex-col gap-1" htmlFor="email">
        Email:
        <input type="email" className="rounded-sm py-1 px-2"  id="email" name="email"  />
      </label>
      <label className="flex flex-col gap-1" htmlFor="senha">
        Senha:
        <input type="password" className="rounded-sm py-1 px-2"  id="senha" name="senha" />
      </label>
      <button className="bg-orange-500 rounded-md py-1 text-white mb-8"
      onClick={()=>{}}>Login</button>
    </form>
      

    </main>
  )
}

export default App
