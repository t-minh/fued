import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterChartWidget,
  SalesChartWidget,
  CarouselWidget,
  TableWidget,
  NewsWidget,
  CalculatorWidget,
  PapperBlock
} from 'dan-components';
import styles from './dashboard-jss';
import RadialSimple from './RadialSimple';

class CrmDahboard extends PureComponent {
  render() {
    const title = brand.name + ' - Student Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Grid container className={classes.root}>
          <CounterChartWidget />
        </Grid>
        <Divider className={classes.divider} />
        <SalesChartWidget />
        {/* <PapperBlock title="Radial Bar Chart" icon="ios-pie-outline" desc="" overflowX>
          <div>
            <RadialSimple />
          </div>
        </PapperBlock> */}
        <Divider className={classes.divider} />
        {/* <TableWidget /> */}
        <Divider className={classes.divider} />
        <Grid container spacing={24} className={classes.root}>
          <Grid item md={4} xs={12}>
            <CarouselWidget />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <NewsWidget />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <CalculatorWidget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CrmDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrmDahboard);
