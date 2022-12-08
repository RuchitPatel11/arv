import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [profiles, setProfiles] = useState([]);

  const onSubmit = (data, e) => {
    setProfiles((prev) => [...prev, data]);
    e.target.reset();
  };

  return (
    <div className="container flex flex-col justify-center">
      <div className="container flex flex-col justify-center">
        <h1 className="text-4xl text-center font-bold">Profile Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <input
              type="number"
              className="w-80 px-4 py-2 border"
              placeholder="Id"
              {...register("id", { required: "Id is required." })}
            />
            {errors.id && (
              <span className="text-red-500">{errors.id.message}</span>
            )}
            <input
              type="text"
              className="w-80 px-4 py-2 border"
              placeholder="Enter name"
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name must contains at least 3 characters.",
                },
              })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            <input
              type="text"
              className="w-80 px-4 py-2 border"
              placeholder="Enter address"
              {...register("address", {
                required: "Address is required.",
              })}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
            <input type="submit" value="Submit" className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
          </div>
        </form>
      </div>
      <div class="flex justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-8 bg-slate-300">Id</th>
              <th className="px-8 bg-slate-300">Name</th>
              <th className="px-8 bg-slate-300">Address</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => {
              return (
                <tr className="text-center">
                  <td className="py-2 px-5 bg-blue-200">{profile.id}</td>
                  <td className="py-2 px-5 bg-blue-200">{profile.name}</td>
                  <td className="py-2 px-5 bg-blue-200">{profile.address}</td>
                </tr>
              );
            })}
          </tbody>
         
        </table>
      </div>
    </div>
  );
}

export default App;
