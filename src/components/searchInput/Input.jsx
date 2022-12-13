import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

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
  width : auto;


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
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: #303030;
  background: inherit;
  border: none;
  border-radius: inherit;
  margin-left :0.5rem;
  outline: 0;
`
);

const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  border: none;
  background: inherit;
  cursor: pointer;
  color:#303030;
  `
);

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
`;

const search = (searchValue) => {
  console.log(searchValue);
};

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
  const [values, setValues] = React.useState({
    amount: "",
    search: "",
    weight: "",
    weightRange: "",
  });

  return (
    <Box
      sx={{
        height: "2rem",
        marginRight: "2rem",
        display: "flex",
        "& > * + *": { ml: 1 },
      }}
    >
      <CustomInput
        aria-label="Búsqueda"
        placeholder="Buscar Manga..."
        endAdornment={
          <InputAdornment>
            <SearchIcon onClick={() => search(this)} />
          </InputAdornment>
        }
      />
    </Box>
  );
}
