import { Container } from "@mui/material";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100vh",
        alignItems: "center",
        width: "100%",
      }}
    >
      <PostForm />
      <PostList />
    </Container>
  );
}

export default App;
