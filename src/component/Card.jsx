import React from "react";
import { EuiCard } from  '@elastic/eui';

function Card({title, description, footer, className}) {
  return (
    <EuiCard
      textAlign="left"
      title={title}
      description={description}
      footer={footer}
      className={className}
    />
  );
}

export default Card;
