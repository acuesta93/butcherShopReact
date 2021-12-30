import { Button, Row } from "components";
import React from "react";

import "./ProductFilter.scss";

type IProductFilter = {
  name?: string;
  animal?: string;
  sortKey?: string;
  sortDir?: "ASC" | "DESC";
};

interface ProductFilterProps {}
export const ProductFilter = (props: ProductFilterProps) => {
  const [filter, setFilter] = React.useState<IProductFilter>({});

  const onNameChange = (value: string) => {
    setFilter({name : value, animal : filter.animal, sortKey : filter.sortKey, sortDir : filter.sortDir});

  };

  const onAnimalChange = (value: string) => {
      setFilter({name : filter.name, animal : value, sortKey : filter.sortKey, sortDir : filter.sortDir})

  }

  const onOrderByChange = (value: string) => {
    let sortKey, sortDir: 'ASC' | 'DESC' | undefined;
      switch(value){
          case 'highest-to-lowest-price': {
            sortKey = 'price';
            sortDir = 'DESC'
            break;
          }

          case 'lowest-to-highest-price': {
              sortKey = 'price';
              sortDir = 'ASC'
              break;
          }

          case 'highest-to-lowest-units': {
              sortKey = 'units';
              sortDir = 'DESC'
              break;
          }

          case 'lowest-to-highest-units': {
              sortKey = 'units';
              sortDir = 'ASC'
              break;
          }

      }

      setFilter({name : filter.name, animal : filter.animal, sortKey, sortDir})
      
  }

  return (
    <Row className="product-filter">
      <label className="filter-label">
        Name:{" "}
        <input
          className="filter-input"
          type="text"
          onChange={({ target }) => onNameChange(target.value)}
          value={filter.name ?? ""}
        />
      </label>
      <label className="filter-label">
        Animal:
        <select className="filter-select" onChange={({ target }) => onAnimalChange(target.value)} >
          <option value="pig">Pig</option>
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="vegetal">Vegetal</option>
          <option value="all-animals">All</option>
        </select>
      </label>
      <label className="filter-label">
        Order by:
        <select className="filter-order-by" onChange={({ target }) => onOrderByChange(target.value)}>
          <option value="highest-to-lowest-price">
            Highest to lowest price
          </option>
          <option value="lowest-to-highest-price">
            Lowest to highest price
          </option>
          <option value="highest-to-lowest-units">
            Highest to lowest units
          </option>
          <option value="lowest-to-highest-units">
            Lowest to highest units
          </option>
          <option value="all">All</option>
        </select>
      </label>
      <Button onClick={() => {console.log(filter)}}>OK</Button>
    </Row>
  );
};
