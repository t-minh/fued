import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
  PieChart, Pie, Cell
} from 'recharts';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';
import { data1, data2 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import { CounterWidget } from 'dan-components';
import styles from 'dan-components/Widget/widget-jss';
import Button from '@material-ui/core/Button';

const colors = [red[300], blue[300], cyan[300], lime[300]];

class ChartInfographicTeacher extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={16}>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[6]}
              start={0}
              end={4}
              duration={3}
              title="8A"
            >
              <Button variant="outlined" color="white" className={classes.button} style={{ color: 'white' }}>
                Start Class
              </Button>
              {/* <PieChart width={100} height={100}>
                <Pie
                  data={data2}
                  cx={50}
                  cy={50}
                  dataKey="value"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#FFFFFF"
                  paddingAngle={5}
                >
                  {
                    data2.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
                  }
                </Pie>
              </PieChart> */}
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={1}
              duration={3}
              title="8C"
            >
              <Button variant="outlined" color="white" className={classes.button} style={{ color: 'white' }}>
                Start Class
              </Button>
              {/* <BarChart width={100} height={40} data={data1}>
                <Bar dataKey="uv" fill="#ffffff" />
              </BarChart> */}
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[5]}
              start={0}
              end={1}
              duration={3}
              title="8D"
            >
              {/* <AreaChart width={100} height={60} data={data1}>
                <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
              </AreaChart> */}
              <Button variant="outlined" color="white" className={classes.button} style={{ color: 'white' }}>
                Start Class
              </Button>
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[4]}
              start={0}
              end={2}
              duration={3}
              title="8F"
            >
              {/* <LineChart width={100} height={80} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart> */}
              <Button variant="outlined" color="white" className={classes.button} style={{ color: 'white' }}>
                Start Class
              </Button>
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ChartInfographicTeacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartInfographicTeacher);
