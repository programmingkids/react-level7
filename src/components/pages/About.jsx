import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';

export const About = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2">
      アプリケーションの紹介
      </Typography>
      <Typography variant="subtitle1" component="h3">
      予算に基づいて支出を管理するためのアプリです
      </Typography>
      <Box>
        <li>予算金額の設定</li>
        <li>支出の登録</li>
        <li>支出総額、残高の計算</li>
      </Box>
    </Stack>
  </Container>
);
