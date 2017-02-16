import React from "react";
import {
  Link,
  S
} from "spectacle";

const CustomLink = ({ children, href, target = "_blank" }) => (
    <Link href={href} target={target} textColor="white" ><S type="underline">{children}</S></Link>
);

export default CustomLink;
