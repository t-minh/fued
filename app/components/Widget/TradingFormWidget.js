import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import TrendingUp from '@material-ui/icons/TrendingUp';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class TradingFormWidget extends PureComponent {
  state = {
    value: 0,
    coin: 'BTC',
    amount: 1
  };

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChangeCoin = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeAmount = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { coin, amount, value } = this.state;
    return (
      <PapperBlock whiteBg noMargin title="Trade Assets" icon="ios-swap" desc="">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Buy" />
            <Tab label="Sell" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir="ltr">
            <div className={classes.tabContainer}>
              <Grid container spacing={16}>
                <Grid item xs={6}>
                  <FormControl fullWidth className={classes.formControlTrade}>
                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                    <Input
                      id="adornment-amount"
                      value={amount}
                      onChange={this.handleChangeAmount('amount')}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <FormHelperText>Total USD assets: $ 67.98</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControlTrade}>
                    <InputLabel htmlFor="coin-simple">Coin</InputLabel>
                    <Select
                      value={coin}
                      onChange={this.handleChangeCoin}
                      inputProps={{
                        name: 'coin',
                        id: 'coin-simple',
                      }}
                    >
                      <MenuItem value="BNB">BNB (Binance)</MenuItem>
                      <MenuItem value="BTC">BTC (Bitcoin)</MenuItem>
                      <MenuItem value="BCN">BCN (Bytecoin)</MenuItem>
                      <MenuItem value="ADA">ADA (Cardano)</MenuItem>
                      <MenuItem value="DCR">DCR (Decred)</MenuItem>
                      <MenuItem value="ICX">ICX (Iconic)</MenuItem>
                      <MenuItem value="IOTA">IOTA (Iota)</MenuItem>
                      <MenuItem value="LTC">LTC (Litecoin)</MenuItem>
                      <MenuItem value="XMR">XMR (Monero)</MenuItem>
                      <MenuItem value="NANO">NANO (Nano Coin)</MenuItem>
                      <MenuItem value="NEM">NEM (Nem)</MenuItem>
                      <MenuItem value="PPT">PPT (Papulous)</MenuItem>
                      <MenuItem value="XRP">XRP (Ripple)</MenuItem>
                      <MenuItem value="XLM">XLM (Stellar Lumens)</MenuItem>
                      <MenuItem value="STRAT">STRAT (Stratis)</MenuItem>
                      <MenuItem value="TRX">TRX (Tron)</MenuItem>
                    </Select>
                    <FormHelperText className={classes.tradeUp}>
                      <TrendingUp />
                      &nbsp;$ 67.98
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <div className={classes.btnArea}>
                <Typography variant="subtitle1">Estimation: 0.02 BTC</Typography>
                <Button color="secondary" variant="contained" className={classes.button}>
                  Exchange Now
                </Button>
              </div>
            </div>
          </TabContainer>
          <TabContainer dir="ltr">
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <FormControl className={classes.formControlTrade}>
                  <InputLabel htmlFor="coin-simple">Coin</InputLabel>
                  <Select
                    value={coin}
                    onChange={this.handleChangeCoin}
                    inputProps={{
                      name: 'coin',
                      id: 'coin-simple',
                    }}
                  >
                    <MenuItem value="BNB">BNB (Binance)</MenuItem>
                    <MenuItem value="BTC">BTC (Bitcoin)</MenuItem>
                    <MenuItem value="BCN">BCN (Bytecoin)</MenuItem>
                    <MenuItem value="ADA">ADA (Cardano)</MenuItem>
                    <MenuItem value="DCR">DCR (Decred)</MenuItem>
                    <MenuItem value="ICX">ICX (Iconic)</MenuItem>
                    <MenuItem value="IOTA">IOTA (Iota)</MenuItem>
                    <MenuItem value="LTC">LTC (Litecoin)</MenuItem>
                    <MenuItem value="XMR">XMR (Monero)</MenuItem>
                    <MenuItem value="NANO">NANO (Nano Coin)</MenuItem>
                    <MenuItem value="NEM">NEM (Nem)</MenuItem>
                    <MenuItem value="PPT">PPT (Papulous)</MenuItem>
                    <MenuItem value="XRP">XRP (Ripple)</MenuItem>
                    <MenuItem value="XLM">XLM (Stellar Lumens)</MenuItem>
                    <MenuItem value="STRAT">STRAT (Stratis)</MenuItem>
                    <MenuItem value="TRX">TRX (Tron)</MenuItem>
                  </Select>
                  <FormHelperText className={classes.tradeUp}>
                    <TrendingUp />
                    &nbsp;$ 67.98
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth className={classes.formControlTrade}>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    value={amount}
                    onChange={this.handleChangeAmount('amount')}
                    startAdornment={<InputAdornment position="start">{coin}</InputAdornment>}
                  />
                  <FormHelperText>Total BTC assets: 0.012 BTC</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <div className={classes.btnArea}>
              <Typography variant="subtitle1">Estimation: $ 342.12</Typography>
              <Button color="secondary" variant="contained" className={classes.button}>
                Exchange Now
              </Button>
            </div>
          </TabContainer>
        </SwipeableViews>
      </PapperBlock>
    );
  }
}

TradingFormWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TradingFormWidget);
