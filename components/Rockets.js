import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query FetchRockets {
    rockets {
      id
      name
      description
    }
  }
`;

export default function Users() {
  const { data, loading, error } = useQuery(QUERY);

  if (error) {
    console.error(error);
    return null;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const rockets = data.rockets.slice(0, 4);

  return (
    <div className={styles.grid}>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={styles.card}>
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
        </div>
      ))}
    </div>
  );
}
