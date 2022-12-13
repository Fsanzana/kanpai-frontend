import * as React from "react";
import Box from "@mui/material/Box";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  fontFamily: "Comic Neue",
  font-weight: 400;
  border-radius: 2rem;
  color: #303030;
  background: #cacaca;
  border: 2px solid #000000;
  box-shadow: 0px 2px 2px black;
  display: flex;
  align-items: center;
  width : 100%;

  &.${inputUnstyledClasses.focused} {
    border-color: #6c00b3;
    outline: 3px solid #6c00b3;
  }

  &:hover {
    border-color: #6c00b3;
  }
`
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
  margin-left:1rem;
  font-size: 2rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: #303030;
  background: inherit;
  border: none;
  border-radius: inherit;
  outline: 0;
  width : 100%;
`
);

const InputAdornment = styled("div")`
  margin-right: 1rem;
  display: inline-flex;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

export default function InputAdornments() {
  const [message, setMessage] = useState("");

  const search = () => {
    var aux = "/search-n/" + message;
    location.assign(aux);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const [values, setValues] = React.useState({
    amount: "",
    search: "",
    weight: "",
    weightRange: "",
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        "& > * + *": { ml: 1 },
      }}
    >
      <CustomInput
        aria-label="bigSearch"
        placeholder="Buscar Manga..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        endAdornment={
          <InputAdornment>
            <SearchIcon onClick={() => search()} />
          </InputAdornment>
        }
      />
    </Box>
  );
}
