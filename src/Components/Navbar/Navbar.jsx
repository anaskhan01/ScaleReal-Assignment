import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Navbar = ({ searchByTitle, sortMoviesByReleaseDate }) => {
  const [sort, setSort] = useState("year");
  const handleChange = (event) => {
    setSort(event.target.value);
    sortMoviesByReleaseDate(event.target.value);
  };
  return (
    <>
      <div className="Main_Container">
        <Box sx={{ minWidth: 100, padding: "0 20px",}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value={"episode"}>Episode</MenuItem>
              <MenuItem value={"year"}>Year</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="Second_Container">
          <CiSearch size={20} style={{ margin: "5px" }} />
          <input
           className="input_style"
            type="text"
            placeholder="Type to search..."
            onChange={(event) => searchByTitle(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
