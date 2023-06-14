import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { PaginationItem } from "@mui/material";

export default function BasicPagination() {
  return (
    <Stack spacing={10}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: BiChevronsLeft, next: BiChevronsRight }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
