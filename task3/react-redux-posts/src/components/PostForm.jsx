import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addPost } from "../redux/slices/postSlice";

import { Paper, TextField, Button, Typography, Grid } from "@mui/material";

const PostForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: uuidv4(),
      userId: uuidv4(),
      title: formData.title,
      body: formData.body,
    };

    dispatch(addPost(post));
  };

  return (
    <Paper
      sx={{
        padding: "1rem",
        width: "50%",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PostForm;
