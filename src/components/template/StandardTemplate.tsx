import { Box, Container } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import Header from '../organisms/Header';

type StandardTemplateProps = ComponentProps<typeof Container>;

const StandardTemplate = ({ ...props }: StandardTemplateProps) => {
  return (
    <div>
      <Header />
      {/* ヘッダー */}
      <Box as='main' p={8} {...props} />
    </div>
  );
};

export default StandardTemplate;
