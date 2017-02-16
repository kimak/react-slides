import React from 'react';
import {
  Appear,
  Heading,
  List,
  ListItem,
} from "spectacle";

const Title = ({title, list, size= 4}) => (
  <div>
    <Heading size={size} textColor="white">
        {title}
    </Heading>
    <List>
        {
            list.map((item, index)=>{
                return <Appear key={index}><ListItem textColor="white" textSize="30px">{item}</ListItem></Appear>;
            })
        }
    </List>
 </div>
);

export default Title;