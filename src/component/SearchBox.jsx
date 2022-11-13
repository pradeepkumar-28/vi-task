import React from "react";
import { EuiFieldSearch } from "@elastic/eui";

const SearchBox = () => {
  return (
    <EuiFieldSearch
      className="euiSearchBox"
      placeholder="Search any topic or anyone in the community"
      isClearable={false}
      aria-label="Use aria labels when no actual label is in use"
    />
  );
};
export default SearchBox