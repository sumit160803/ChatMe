import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'

const AppLayout = () => (WrappedComponent)=> {
  return(props) (
    <>
        <Title>
            <Header />

                <Grid container height={"calc(100vh-4rem)"}>
                
                <Grid item xs={3} height={"100%"} bgcolor={"primary.main"}> </Grid>

                </Grid>

            <WrappedComponent {...props} />
        </Title>

    </>
  )
}

export default AppLayout