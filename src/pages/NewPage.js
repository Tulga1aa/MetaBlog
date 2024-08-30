import useSWR from "swr";
import { Shinee } from "./component/Shinee";

const url = "https://jsonplaceholder.typicode.com/users";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const NewPage = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...Sorry </p>;
  }
  return (
    <div>
      {data.map((user) => {
        return <Shinee key={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
};
export default NewPage;
