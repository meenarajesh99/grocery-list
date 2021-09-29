import React from "react";

import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles.js";



export function Dropdown(props) {
  return (
    <div className="dropdown-menu">
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="items" name="items">
        {props.children}
      </StyledSelect>
     <StyledButton type="submit" value={props.buttonText} />
     
    </DropdownWrapper>
    </div>
  );
}

export function Option(props) {
  return (
    <StyledOption value={props.selected}>
      {props.value}
    </StyledOption>
  );
}