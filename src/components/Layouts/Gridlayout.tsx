import * as React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
 const Gridlayout: React.SFC<any> = () => {
    
 return <div>
      <Grid container >
        <Grid item xs={12}>
          <Card>
          <CardContent>
             This is 1nd Card
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
          <CardContent>
             This is a Card
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
          <CardContent>
             This is 2nd Card
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
          <CardContent>
             This is 2nd Card
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
          <CardContent>
             This is 2nd Card
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card><CardContent>
             This is 2nd Card
          </CardContent></Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
          <CardContent>
             This is 2nd Card
          </CardContent>
          </Card>
        </Grid>
      </Grid>

  
      
     </div>
}
export default Gridlayout;