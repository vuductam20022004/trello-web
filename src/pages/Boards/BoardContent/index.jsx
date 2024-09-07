import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      height:(theme) => `calc(100vh - ${theme.trello. boardBarHeight} - ${theme.trello. appBarHeight})`,
      width:'100%',
      backgroundColor:'primary.light',
      display:'flex',
      alignItems:'center'
    }}>
    Board Content
    </Box>
  )
}
export default BoardContent