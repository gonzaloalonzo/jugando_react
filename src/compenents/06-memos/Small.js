import React, { memo } from 'react'
                    //React.memo
export const Small = memo(({ value }) => {
  console.log("Me volvi a llamar");

  return <small>{value}</small>;
});
