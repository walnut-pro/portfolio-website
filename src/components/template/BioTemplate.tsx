import { Box, Table, Tbody, Tr, Td, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const BioTemplate = () => {
  return (
    <VStack>
      <Box>
        <Text>Bio</Text>
      </Box>
      <Box>
        <Table>
          <Tbody>
            <Tr>
              <Td>1997</Td>
              <Td>Born in Ibaraki, Japan</Td>
            </Tr>
            <Tr>
              <Td>2019</Td>
              <Td>
                Researched and Developed system which can detect and predict epileptic seizure using
                EEG and Image Recognition Method which called ResNet.
              </Td>
            </Tr>
            <Tr>
              <Td>2022</Td>
              <Td>
                Completed the Master&apors;s Program in the Graduate School of Information and
                Engineering in Tsukuba University.
              </Td>
            </Tr>
            <Tr>
              <Td>2022 now</Td>
              <Td>Working as Application Engineer at Rakuten</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default BioTemplate;
