import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { COINCAP_ASSETS } from '../../util/networkConfig';
import './home.css';
import Table from '../../components/Table';
import ImageWithName from '../../components/ImageWithName';

const headings = ['rank', 'name', 'priceUsd', 'changePercent24Hr'];
const prettyName = {
  rank: 'Rank',
  name: 'Name',
  priceUsd: 'Price (USD)',
  changePercent24Hr: 'Change (24Hr)',
};
const trimmedFields = ['rank', 'name', 'priceUsd'];

const Home = () => {
  const [fields, setFields] = useState(headings);

  const { response, error, loading } = useFetch(COINCAP_ASSETS);

  const toggleFields = () => {
    if (fields.length === headings.length) {
      setFields(trimmedFields);
    } else {
      setFields(headings);
    }
  };
  if (loading) {
    return (
      <p>Loading please wait</p>
    );
  }
  if (error) {
    return (
      <p>Error in loading</p>
    );
  }
  return (
    <div className="home-root">
      <div className="home-responsive-container">

        <button className="toggle-button-style" type="button" onClick={() => toggleFields()}>Toggle number of columns</button>

        <Table>
          <Table.THead>
            <Table.TRow>
              {fields.map(item => (
                <Table.TH>
                  {prettyName[item]}
                </Table.TH>
              ))}
            </Table.TRow>
          </Table.THead>
          <Table.TBody>
            {response.data.map(item => (
              <Table.TRow
                down={item.changePercent24Hr[0] === '-'}
                key={item.id}
              >
                {fields.map(key => {
                  if (key === 'name') {
                    return (
                      <Table.TD>
                        <ImageWithName id={item.id} symbol={item.symbol} name={item.name} />
                      </Table.TD>
                    );
                  }
                  return (
                    <Table.TD>
                      {item[key]}
                    </Table.TD>
                  );
                })}
              </Table.TRow>
            ))}
          </Table.TBody>
        </Table>
      </div>
    </div>
  );
};


export default Home;
