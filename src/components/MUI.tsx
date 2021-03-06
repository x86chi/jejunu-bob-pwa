import React, { useState } from 'react'

import { styled } from '@material-ui/core/styles'

import {
  List,
  ListItemText,
  ExpansionPanelSummary,
  Typography,
  Paper,
  Fab,
  BottomNavigation
} from '@material-ui/core'

import { ExpandMore, Info as InfoIcon } from '@material-ui/icons'

import Dialog from './Dialog'

export const ItemText = ({ menu, type }: { menu: string[]; type: string }) => (
  <ListItemText
    style={{ wordBreak: 'keep-all' }}
    primary={menu.join(', ')}
    secondary={type}
  />
)

export const PanelByTime = ({ time }: { time: string }) => (
  <ExpansionPanelSummary
    style={{ padding: '0 1rem' }}
    expandIcon={<ExpandMore />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography>{time}</Typography>
  </ExpansionPanelSummary>
)

export const Ul = styled(List)({
  marginBottom: '2rem',
  paddingBottom: 0
})

export const TodayOfWeek = ({ weekday }: { weekday: string }) => (
  <Typography variant="h5" style={{ padding: '1rem' }} gutterBottom>
    {weekday}
  </Typography>
)

export const Wrapper = styled(Paper)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
})

export const BottomNav = styled(BottomNavigation)({
  top: 'auto',
  bottom: 0,
  justifyContent: 'space-around',
  position: 'fixed',
  width: '100%'
})

export const Info = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: 28,
          left: 0,
          right: 0,
          margin: '0 auto'
        }}
      >
        <InfoIcon onClick={handleOpen} />
      </Fab>
      <Dialog open={open} handleClose={handleClose} />
    </>
  )
}
