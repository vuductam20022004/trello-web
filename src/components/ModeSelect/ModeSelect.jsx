import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const ModeSelect = event.target.value
    setMode(ModeSelect)
  }
  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel
        id="select-mode"
        sx={{
          color:'white',
          '&.Mui-focused':{ color:'white' }
        }}
      >
          Mode
      </InputLabel>
      <Select
        labelId="select-mode"
        id="select-small-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color:'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '.MuiSvgIcon-root':{ color:'white' }
        }}
      >
        <MenuItem value="light" >
          <Box style={{ display:'flex', alignItems:'center', gap:'8px' }}><LightModeIcon fontSize='small'/>Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <DarkModeIcon fontSize='small'/>
              Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
            <SettingsBrightnessIcon fontSize='small'/>
              System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default ModeSelect