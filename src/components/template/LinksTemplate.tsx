import { List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';

const LinksTemplate = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon color='green.500' />
        @walnut-pro
      </ListItem>
      <ListItem>
        <ListIcon color='green.500' />
        @walnut_pro
      </ListItem>
    </List>
  );
};

export default LinksTemplate;
