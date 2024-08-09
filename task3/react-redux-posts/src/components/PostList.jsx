import React, { useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/postSlice";

const columns = [
  { field: "userId", headerName: "User ID", flex: 0.1 },
  { field: "id", headerName: "ID", flex: 0.1 },
  { field: "title", headerName: "Title", flex: 0.3 },
  { field: "body", headerName: "Body", flex: 0.5 },
];

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <DataGrid
      sx={{ width: "100%" }}
      loading={loading}
      rows={posts}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      rowsPerPageOptions={[5]}
    />
  );
};

export default PostList;
