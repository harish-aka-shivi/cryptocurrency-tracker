import React from 'react';
import './table.css';
import { LIGHT_RED, LIGHT_GREEN } from '../../style';

const THead = props => (
  <thead {...props} />
);

const TRow = ({ down, ...props }) => (
  <tr
    style={{ backgroundColor: down ? LIGHT_RED : LIGHT_GREEN }}
    {...props}
  />
);

const TH = props => (
  <th {...props} />
);

const TD = props => (
  <td {...props} />
);

const TBody = props => (
  <tbody {...props} />
);


const Table = props => (
  <table {...props} />
);


Table.THead = THead;
Table.TBody = TBody;
Table.TH = TH;
Table.TRow = TRow;
Table.TD = TD;

export default Table;
