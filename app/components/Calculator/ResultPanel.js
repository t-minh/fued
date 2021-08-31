import React from 'react';
import PropTypes from 'prop-types';

const replacement = [
  {
    reg: /\*/g,
    dest: '×'
  }, {
    reg: /\//g,
    dest: '÷'
  }
];


class ResultPanel extends React.Component {
  render() {
    const { exp } = this.props;
    replacement.forEach((item) => {
      exp.cur = exp.cur.replace(item.reg, item.dest);
      exp.last = exp.last.replace(item.reg, item.dest);
    });
    return (
      <div className="result-panel">
        <div className="last-row">{exp.last}</div>
        <div className="cur-row">{exp.cur}</div>
      </div>
    );
  }
}

ResultPanel.propTypes = {
  exp: PropTypes.object
};

ResultPanel.defaultProps = {
  exp: {}
};

export default ResultPanel;
