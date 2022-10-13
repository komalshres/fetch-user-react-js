import React from "react";
import axios from "axios";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";
import SearchTab from "../../components/SearchTab";
import Heading from "../../components/Heading/Heading";
import Content from "../../components/Content/Content";

const Main = () => {
  const [userId, setUserId] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [user, setUser] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserId(value);
    setUser(false);
    setError(false);
  };

  const clickHandler = () => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((resp) => {
        console.log(resp.data);
        const { data } = resp;
        setTimeout(() => {
          setUser(data);
          setAddress(`${data.address.street}, ${data.address.city}`);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
          if (error.response.status === 404) setError(true);
        }, 3000);
      });
  };

  const handleKeypress = (e) => {
    console.log(e.which);

    if (e.which === 13) {
      clickHandler();
    }
  };

  const { name, username, email } = user;

  return (
    <Container>
      <SearchTab>
        <Input
          value={userId}
          onChange={handleChange}
          onKeyPress={handleKeypress}
          required
        />
        <Button onClick={clickHandler} disabled={!userId}>
          Search
        </Button>
      </SearchTab>
      <Content>
        {!userId ? null : loading ? (
          <Heading className="text-secondary">Loading...</Heading>
        ) : error ? (
          <Heading className="text-danger">
            Error 404 - User Id = "{userId}" not found
          </Heading>
        ) : !user ? null : (
          <Card
            img={name ? `https://robohash.org/${name}.png` : null}
            name={name}
            username={username}
            email={email?.toLowerCase()}
            address={address}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
